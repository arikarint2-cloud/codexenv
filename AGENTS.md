# AGENTS.md

## Текущее состояние проекта
- Корень проекта: `C:\Users\Александр\Desktop\Codex_Learning`
- На момент создания файла проект пуст: исходники, манифесты зависимостей и конфиги сборки отсутствуют.
- Из-за этого стек и команды запуска/сборки пока не зафиксированы в кодовой базе.

## Стек проекта
Пока не определён. После добавления первого манифеста фиксировать стек по факту:
- `package.json` -> Node.js / npm (или pnpm/yarn, если явно используется)
- `pyproject.toml` / `requirements.txt` -> Python
- `go.mod` -> Go
- `Cargo.toml` -> Rust
- `*.csproj` / `*.sln` -> .NET

## Ключевые команды (правило выбора)
До появления манифестов запускать и собирать нечего. Когда стек появится, использовать команды из самого проекта (в порядке приоритета):
1. Команды из README проекта.
2. Скрипты/таргеты из манифеста (`scripts` в `package.json`, `Makefile`, task runner).
3. Стандартные команды стека, только если они согласуются с конфигом проекта.

Минимальный ориентир после появления Node.js-проекта:
- Установка: `npm install`
- Запуск dev: `npm run dev`
- Сборка: `npm run build`
- Тесты: `npm test`
- Линт/формат: `npm run lint` и/или `npm run format`

## Правила кода
- Не менять архитектуру и инструменты без явной причины и согласования.
- Следовать существующему стилю проекта (линтер, форматтер, структура папок).
- Делать минимальные, локальные изменения, избегать лишнего рефакторинга.
- Не добавлять зависимости без необходимости.
- Любые новые команды/скрипты документировать в README и в этом файле.

## Инструкции самопроверки перед сдачей
1. Проверить, что изменения ограничены задачей и не затрагивают лишние файлы.
2. Запустить профильные проверки проекта (как только они появятся):
   - линт
   - тесты
   - сборка
3. Убедиться, что нет регрессий в запуске локального окружения.
4. Проверить понятность изменений: имена, комментарии, сообщения об ошибках.
5. Если что-то не удалось проверить, явно указать это в отчёте.

## Обновление этого документа
Обновить `AGENTS.md` сразу после того, как в проекте появятся:
- фактический стек,
- точные команды запуска/сборки/тестов,
- обязательные quality gates (lint, typecheck, тесты, сборка).

# Project instructions

## ExecPlans

When writing complex features, significant refactors, migrations, or tasks that require more than a few coordinated edits, use an ExecPlan as described in `.agent/PLANS.md` from design to implementation.

Before implementation, create or update an ExecPlan and show it for review unless the user explicitly says to proceed immediately.

When implementing an approved ExecPlan:

- Read `.agent/PLANS.md` before starting.
- Keep the ExecPlan updated as work proceeds.
- Update `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective`.
- Do not ask the user for every next step during implementation; proceed through the next milestone when the plan is clear.
- Run the validation commands described in the ExecPlan.
- Do not mark the task complete until the behavior is observable and tests/checks pass, or until failures are documented clearly.
