---
title: 优化器不会问的问题
date: 2026-11-04T00:00:00.000+08:00
lang: zh
type: note
duration: 1min
---

今天很多 Agent Evolution 工作，主要在解决「给定目标，怎么把分数提上去」：

```text
给定 Task / Benchmark
→ 找 Failure
→ 修改 Skill / Prompt / Harness
→ Evaluate
→ 提升 Score
```

更强的自进化还需要回答：

```text
当前 Objective 是否仍值得优化？
→ 下一轮应该优化什么？
→ 如何产生新的 Objective？
→ 如何判断它和真实用户价值一致？
```

> **Improving performance and building durable professional judgment are different goals.**
