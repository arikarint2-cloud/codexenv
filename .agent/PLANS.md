\# Codex Execution Plans



An ExecPlan is a living implementation plan for a complex coding task. It must be detailed enough that a person who has never seen this repository before can follow it from beginning to end and get a working, observable result.



The goal of an ExecPlan is not just to describe code changes. The goal is to explain why the change matters, what files and modules are involved, what steps will be taken, how progress will be tracked, and how success will be verified.



\## When to use an ExecPlan



Use an ExecPlan for complex features, significant refactors, migrations, multi-file changes, debugging tasks with unknown causes, or any task where the implementation is likely to take multiple steps.



For small, obvious edits, an ExecPlan is not required.



\## Core requirements



Every ExecPlan must be self-contained. Do not assume the reader remembers earlier conversations. Include all context, assumptions, file paths, commands, and decisions needed to continue the work later.



Every ExecPlan must be a living document. Update it whenever progress is made, when a discovery changes the approach, when a decision is made, or when validation results are known.



Every ExecPlan must produce observable behavior. Explain what someone can do after the change that they could not do before, and how to verify that it works.



Use plain language. If a technical term is necessary, define it immediately and explain where it appears in this repository.



\## Required structure for an ExecPlan



Each ExecPlan should use this structure:



\# Short action-oriented title



This ExecPlan is a living document. The sections `Progress`, `Surprises \& Discoveries`, `Decision Log`, and `Outcomes \& Retrospective` must be kept up to date as work proceeds.



If this repository contains `.agent/PLANS.md`, this plan must follow it.



\## Purpose / Big Picture



Explain what the user gains from this change. Describe the user-visible behavior or developer-visible outcome that will exist after the work is complete.



\## Progress



Track concrete progress with checkboxes and timestamps. This section must always reflect the real current state.



\- \[ ] Initial investigation complete.

\- \[ ] Implementation started.

\- \[ ] Validation completed.



When stopping work, update this section so another agent or human can continue.



\## Surprises \& Discoveries



Record unexpected findings, bugs, constraints, performance issues, library behavior, or project-specific details discovered during the work.



Use this format:



\- Observation: ...

&#x20; Evidence: ...



\## Decision Log



Record decisions that shape the implementation.



Use this format:



\- Decision: ...

&#x20; Rationale: ...

&#x20; Date/Author: ...



\## Outcomes \& Retrospective



Summarize what was achieved, what remains, what was learned, and whether the original goal was met.



Update this at the end of major milestones and when the plan is complete.



\## Context and Orientation



Describe the relevant current state of the project. Name files and directories using repository-relative paths. Explain how the important parts fit together.



Do not refer to previous conversations as required context. Include the context directly here.



\## Plan of Work



Describe the implementation sequence in prose. For each planned change, name the file, module, function, component, or command involved.



Resolve ambiguity inside the plan. Do not leave important decisions for the reader.



\## Concrete Steps



List exact commands and editing steps. Include the working directory for commands.



When a command has important output, show a short example of what success should look like.



\## Validation and Acceptance



Explain how to prove the change works. Include exact test, lint, build, or run commands.



Acceptance must be phrased as observable behavior, not just internal implementation details.



For example: after starting the app and opening a specific page, the user should see a specific result; or after running a CLI command, the output should contain a specific value.



\## Idempotence and Recovery



Explain which steps can be safely repeated. If a step can fail halfway, explain how to retry or roll back.



Prefer additive changes and safe validation before destructive changes.



\## Artifacts and Notes



Include concise evidence such as important command outputs, short diffs, logs, or examples that prove the plan is working.



Keep this section focused on evidence, not long code dumps.



\## Interfaces and Dependencies



Name important libraries, modules, public functions, types, APIs, configuration files, and external dependencies involved in the change.



Be specific about names and paths that should exist after implementation.



\## Maintenance rule



When revising an ExecPlan, update every affected section. At the bottom of the plan, add a short note describing what changed and why.

