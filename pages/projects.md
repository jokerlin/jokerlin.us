---
title: Projects - jokerlin
display: Projects
description: List of projects that I am proud of
wrapperClass: 'text-center'
art: dots
projects:
  AI & Agents:
    - name: Skill Manager
      link: https://github.com/jokerlin/skill-manager
      desc: Manage agent skills and plugins across many machines and coding agents (Claude Code, Codex, Pi). CLI, TUI and macOS app.
      icon: i-ri-apps-2-ai-line
---

<!-- @layout-full-width -->
<ListProjects :projects="frontmatter.projects ?? []" />
