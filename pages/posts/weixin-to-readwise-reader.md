---
title: 微信收藏文章到 Readwise Reader
date: 2025-10-06T00:00:00.000+08:00
lang: zh
duration: 8min
---

[[toc]]

## 微信稍后阅读的痛点

作为一名效率工具爱好者，“差生文具多”的我一直在寻找优雅的稍后阅读工作流。自 2022 年末起，我把 Readwise Reader 作为主力工具，但微信公众号文章的收藏始终是个痛点：每次看到好文，都要复制链接、切换应用、粘贴保存，既繁琐又打断专注。

国庆假期，我决定用一晚上的 Vibe Coding，把这个问题解决掉：**在微信中直接把公众号文章收藏到 Readwise Reader**。

## 技术实现调研

一开始我注意到 Cubox [有类似功能](https://help.cubox.pro/save/ecf6/)，可以通过企业微信收藏文章。参考 ChatGPT 的调研与 [V2EX 讨论](https://us.v2ex.com/t/886899)，这条路径通常需要：

- 企业认证（300 元 / 年）
- 开通微信客服或会话存档等能力（部分场景还需额外费用）

对个人开发者而言，成本偏高。有没有更“曲线救国”的方案？

进一步研究后，我选择利用 **微信客服**（企业微信的“微信客服”能力）。微信客服支持在微信内外接入客服入口，用户可直接在微信里发消息；企业端能通过开放 API 收发消息、自动回复等。也就是说，我可以新建一个“自用”的微信客服账号，把公众号文章链接发给这个客服；服务端再通过微信客服 API 拉取消息并提取链接，最后调用 Readwise Reader 的 API 保存文章。**微信客服接口是企业微信的官方能力，不需要单独为“会话存档”付费**，非常适合做 Side Project。

那么现阶段的技术路线就是：**用微信客服开放接口替代会话存档**。用户在微信里把文章发给自己的企业微信客服号；后端用微信客服 API 获取消息里的文章链接，再用 Readwise Reader API 完成保存。下面是开发与部署的完整过程。

## 实现过程

### 1. 开通并配置微信客服

**注册企业微信与微信客服**：访问 [微信客服官网](https://kf.weixin.qq.com/) 即可开通。已有企业微信的，在管理后台启用“微信客服”应用（在“应用管理”或手机端“工作台”可见）。

**新建客服账号**：相当于为企业配置一个虚拟客服代表。由于是自用，把自己设为接待人员即可。注意：**一旦切换到通过 API 管理微信客服，就不能在后台继续手动创建客服账号**，因此建议先把账号建好，再切到 API 接入模式。

**用个人微信添加客服**：在“开始接入”里生成对外客服链接或二维码，用个人微信扫码添加，这样就能随时把公众号文章链接发给这个客服。

**配置开发者接口**：在“开发配置”页面重点关注以下信息：

- **企业 ID（CorpID）**：可在“我的企业”查到。
- **回调 URL / Token / EncodingAESKey**：  
  - **Token**：自定义，用于消息签名校验。  
  - **EncodingAESKey**：系统生成的 43 位字符串，用于对消息体做 AES 加解密。  
  - **回调 URL**：你部署的服务地址（下文会说明）。  

> 文档分散且术语较多，我作为微信生态的初学者云里雾里。建议对照 [企业微信文档库](https://developer.work.weixin.qq.com/document/path/90930) 理解回调配置与签名校验的整体流程。

### 2. 获取 Readwise Reader API 凭证

登录 Readwise，在账户设置或开发者页面获取 [**API Token**](https://readwise.io/access_token)。之后即可使用 [Reader API](https://readwise.io/reader_api) 添加文章、同步高亮等。

### 3. 部署到 Vercel

项目地址：[`jokerlin/Weixin2ReadwiseReader`](https://github.com/jokerlin/Weixin2ReadwiseReader)（把微信消息转发到企业微信客服，通过 webhook 回调把文章添加到 Readwise Reader）。

**核心流程**：

1. 验证并解析微信客服推送（支持明文与密文），完成签名校验与 AES 解密。  
2. 使用回调提供的 `token` 与 `openKfId`，调用“获取会话消息”接口拉取用户发送的完整内容。  
3. 识别消息中的公众号文章链接。  
4. 调用 **Readwise Reader API** 保存文章。  
5. 使用 Upstash（Vercel KV）存储已处理的消息 ID 作为“游标”，解决接口 `limit`（上限 1000 条）导致的翻页与最新消息拉取问题。

**部署步骤**（`README` 提供了一键部署）：

按照 Vercel 引导创建 Upstash（Redis 服务，用于存储客服消息翻页 cursor），并获取 REST 地址与 Token。然后在 Vercel 项目里配置以下环境变量：

| 变量名 | 必需 | 说明 |
| --- | --- | --- |
| `WECHAT_TOKEN` | ✅ | 微信客服回调配置的 Token（用于签名校验） |
| `WECHAT_ENCODING_AES_KEY` | ✅ | 43 字符的 EncodingAESKey（用于 AES-256-CBC 解密） |
| `WECHAT_CORPID` | ✅ | 企业 ID（用于解密后尾部校验） |
| `WECHAT_KF_SECRET` | ✅ | 微信客服 Secret（用于换取 `access_token`） |
| `READWISE_TOKEN` | ✅ | Readwise Reader API Token（用于保存链接） |
| `KV_REST_API_URL` | ✅ | Vercel KV 的 REST Endpoint（如 `https://xxx.upstash.io`） |
| `KV_REST_API_TOKEN` | ✅ | Vercel KV 的 REST Token |

**注意事项**：

- `WECHAT_KF_SECRET` 一开始可能拿不到：**需先把回调验证通过**，再到“开发配置”页面复制真实值（可以先随便填占位）。  
- 回调地址形如 `https://your.domain/api/wx_kf_webhook`。**微信侧不能直接访问 Vercel 的默认子域名**，需要在 Vercel 为项目绑定自己的公网域名，并将该域名配置为回调 URL。  

## 总结

通过这个项目，我实现了在微信中把公众号文章“一键收藏”到 Readwise Reader，完全基于微信客服官方能力，避免了额外的付费依赖。自建方案的另一个好处是：数据与流程都在自己掌控之中，更易迭代和支持多生态。

更重要的是，这次实践再次验证了 **Vibe Coding** 的魅力——当灵感出现时，借助少量代码与云服务，就能把想法快速落地成可用的小工具，显著提升个人效率。即便微信生态相对封闭，**只要善用官方接口与一点创造力**，依然可以打通数据流，搭建出顺手的效率工作流。
