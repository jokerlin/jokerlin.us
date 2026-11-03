---
title: Projects - jokerlin
display: Projects
description: List of projects that I am proud of
wrapperClass: 'text-center'
art: dots
projects:
  Tools:
    - name: Skill Manager
      link: https://github.com/jokerlin/skill-manager
      desc: Manage agent skills and plugins across many machines and coding agents (Claude Code, Codex, Pi). CLI, TUI and macOS app.
      icon: i-ri-tools-line
    - name: claude-guard
      link: https://github.com/jokerlin/claude-guard
      desc: Check the egress IP before Claude Code starts and before each prompt, and stop on an IP that is not on your allowlist. zsh plugin and Claude Code plugin.
      icon: i-ri-shield-check-line
---

<!-- @layout-full-width -->
<ListProjects :projects="frontmatter.projects ?? []" />
