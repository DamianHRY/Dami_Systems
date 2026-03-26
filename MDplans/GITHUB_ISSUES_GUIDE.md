# 🛠️ GitHub Issues & Milestones: AI Dev Agent Guide

This document serves as the **Source of Truth** for project management and task tracking within the **Dami Systems** repository. Every AI agent interacting with this codebase **MUST** follow these procedures to ensure transparency, discipline, and organized progress.

---

## 🎯 Core Principles
1. **No Work Without an Issue**: Every task, bug fix, or feature MUST be represented by a GitHub Issue.
2. **Real-time Updates**: Issues must reflect the *current* state of the task.
3. **Milestone Alignment**: Every significant issue should be linked to its corresponding project milestone.
4. **Agent Transparency**: Agents must "speak" to the issues by leaving comments when starting, pausing, or finishing work.

---

## 🔄 The AI Agent Workflow

### 1. Initial Context Sync (Start of Chat)
Before any coding begins, the agent **MUST**:
- [ ] List all **Open Issues** (`mcp_github-mcp-server_list_issues`).
- [ ] Check for **Active Milestones**.
- [ ] Identify the specific issue(s) relevant to the user's request.

### 2. Task Initialization
If the task is new or not tracked:
- [ ] Create a new issue using `mcp_github-mcp-server_issue_write` (method: `create`).
- [ ] Use a clear, descriptive title (e.g., `[Feature] Implement User Authentication`).
- [ ] Add a structured body with a task list (Checkboxes).
- [ ] **Assign to yourself** (if applicable) and link to a milestone.

### 3. Execution & Commits
- [ ] **Start Comment**: Leave a comment on the issue: *"Status: Starting work on this task. [Agent ID/Name]"*.
- [ ] **Commit Linking**: Reference the issue number in all commit messages (e.g., `feat: add login form (fixes #12)`).
- [ ] **Progress Updates**: If a task is complex, update the issue checkboxes as they are completed.

### 4. Definition of Done (DoD)
Before closing an issue:
- [ ] Ensure all code changes are pushed and verified.
- [ ] Add a final comment summarizing the implementation or including instructions for the user.
- [ ] Use `mcp_github-mcp-server_issue_write` (method: `update`) to set `state: "closed"`.
- [ ] Update the milestone progress by ensuring all related issues are resolved.

---

## 📝 Issue Template for AI Agents

When creating an issue, use this structure for the `body`:

```markdown
### 📝 Description
Brief explanation of what is being implemented and why.

### ✅ Tasks
- [ ] TASK_1
- [ ] TASK_2
- [ ] TASK_3

### 🛠️ Technical Details (Optional)
Specify key files to modify or technologies to use.

### 🏁 Definition of Done
Criteria that must be met to close this issue.
```

---

## ✨ AI Discipline Checklist
*Check these off mentally before concluding your turn:*
- [ ] Did I check if an issue exists for this work?
- [ ] Did I update the issue status/comments?
- [ ] Is this work linked to a milestone?
- [ ] Did I provide a clear summary in the issue when closing?

---

> [!IMPORTANT]
> **Adherence to this guide is mandatory.** It allows the user (Damian) to track progress across different AI sessions and maintain a professional development lifecycle.
