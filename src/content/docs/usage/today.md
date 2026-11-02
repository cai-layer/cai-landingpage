---
title: "Today"
description: "Today lists the few work items that need you today, ranked P0 to P3, in Cai's ⌥C panel. Claude Code builds it from Slack, Gmail, GitHub and your other tools; the list and your done and snoozed state stay on your Mac."
---

# Today

**Today** is a short list of the work items that need you today, right in the ⌥C panel. Your own [Claude Code](https://claude.com/claude-code) builds it with the **cai-today** skill: it reads Slack, Gmail, Google Calendar, GitHub and your other connected tools, keeps one item per subject, and ranks each one P0 to P3 with a one-line reason and a prompt you can paste into your agent.

Today uses Claude Code and the connectors you already set up in Claude, so the reading happens through those services, not on-device. The list, what you marked done or snoozed, and your priorities stay on your Mac.

A run only reads your tools. It never sends, replies, comments or changes anything in them, and the only files it writes are the list itself.

---

## Setup

Today needs [Claude Code](https://claude.com/claude-code), installed and signed in. Cai runs it in the background; you don't need to keep a terminal open.

1. Press **⌥C**, then **⌘T** (or choose **Today** in the Cai menu bar icon's right-click menu)
2. Choose **Set Up Today** and follow the three steps:
   - **Add the cai-today skill to Claude**: Cai copies the skill into `~/.claude/skills/cai-today`. If a different cai-today skill is already there, Cai leaves it as it is and uses it
   - **Your tools**: Cai asks Claude which tools it can reach and shows each one as connected, needing sign-in, or not available. Turn on the ones Today should read. GitHub is read with the `gh` command, so sign in with `gh auth login` first
   - **Who matters most**: while the first list builds, Cai suggests people and Slack channels from the last 30 days. Star the people who should rank first, then choose **Show Today**

The first build takes a few minutes. Cai can close while it runs; it keeps going, and the menu item reads **Today (building…)** until it's done.

---

## Using the list

P0 and P1 items show first. P2 and P3 fold under **Later**, and snoozed items under **Snoozed**; press **↵** on either row to expand it. Type to filter the list.

Press **→** to open an item's details: why it matters, who is waiting, the links, and the **Suggested prompt**. In details, **↑ ↓** move to the previous and next item and **←** goes back to the list.

| Shortcut | Action |
| --- | --- |
| **⌘T** | Open Today from the action window |
| **↵** or **⌘↵** | Copy the item's prompt and close Cai |
| **⌘C** | Copy the prompt and keep Cai open |
| **⌘O** | Open the item's first link |
| **⌘D** | Mark done |
| **⌘⌫** | Dismiss |
| **⌘S** | Snooze until tomorrow at 09:00, or unsnooze a snoozed item |
| **⌘Z** | Undo the last done, dismiss or snooze |
| **⌘R** | Refresh the list |
| **Esc** | Back to the action list (or close, when Today was opened from the menu) |

Paste the prompt into Claude Code or any other agent to do the work or draft the reply. The prompt points to the source by its link, so your agent reads the details itself.

A done or dismissed item comes back when its source moves on: a thread you marked done on Monday returns if someone replies on Tuesday.

### Today Shortcut

To open Cai straight on Today from any app, record a shortcut in **Settings** → **Today** → **Today Shortcut** (for example ⌥⌘C). It works in every app, so it replaces what those keys do there. It needs ⌘, ⌥ or ⌃, and it can't be the same as Cai's own shortcut.

---

## Refreshing

Choose when Today refreshes in **Settings** → **Today** → **Refresh**:

| Option | What it does |
| --- | --- |
| **Once a day** | Today refreshes the first time you open it each day, and when you press ⌘R |
| **Only when I press ⌘R** | Today refreshes only when you press ⌘R |

While a refresh runs, the header reads **Refreshing…**. Afterwards it shows when the list was updated and how many items it has. Settings shows how long the last refresh took.

### How far back the first build reads

**First build reads the last:** sets how many days of messages, mentions and emails the first build looks at: 1, 3, 7 (the default) or 14 days. Work that is already yours, like issues assigned to you and review requests, is read whatever its age. Later refreshes read only what changed since the previous one.

---

## Your priorities

Today ranks people, channels and topics you care about higher. They live in a plain Markdown file, `priorities.md`, which setup fills from your answers in **Who matters most**. To edit it, open **Settings** → **Today** → **Who Matters Most** and choose **Open in Finder**, then edit the file in any editor. The next refresh uses it.

| Section | What goes there |
| --- | --- |
| **People** | A name, an email or an @handle, one per line. A `*` in front ranks them first |
| **Slack channels** | Channels to read on top of your DMs, mentions and threads |
| **Also watch** | Pages and projects to check for changes that involve you: Notion pages, Google Docs, any https link |
| **Topics** | Optional words that make an item more important |

Lines inside `<!-- -->` comments are examples and are ignored.

To change which tools Today reads, open **Settings** → **Today** → **Tools**. Today reads only your DMs, mentions and threads, plus the channels in your priorities.

---

## Where it lives

Everything Today keeps is on your Mac, in `~/Library/Application Support/Cai/`:

| Folder | What's in it |
| --- | --- |
| `Today/` | `items.jsonl`, the list the skill writes |
| `TodayState/` | `priorities.md`, and what you marked done, dismissed or snoozed |

The skill itself is in `~/.claude/skills/cai-today`. When a newer Cai comes with a different version, **Settings** → **Today** → **cai-today Skill** offers **Update Skill**. If you edited your copy, Cai leaves it as it is.
