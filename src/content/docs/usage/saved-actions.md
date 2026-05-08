---
title: "Custom Actions"
description: "Save frequently-used AI prompts, scripts and URL templates as custom actions in Cai. Chain steps together. Pin, hide and reorder to make Cai yours."
---

# Custom Actions

Custom actions let you save frequently-used prompts, scripts and URL templates for instant access. Type to filter your actions and custom actions appear inline: no menus, no setup each time. Chain them together to build multi-step workflows that pipe results from step to step.

## Three Types of Custom Actions

### Prompt Actions

Save an AI instruction you use often. When triggered, Cai sends your selected text to the LLM with your saved prompt.

**Examples:**

- `Rewrite as a professional email reply`
- `Translate to German`
- `Extract action items as a bullet list`
- `Convert to SQL query`

### URL Actions

Save a URL template with `%s` as a placeholder. When triggered, Cai replaces `%s` with your selected text and opens it in your browser.

**Examples:**

- `https://www.reddit.com/search/?q=%s`
- `https://translate.google.com/?text=%s`
- `https://en.wikipedia.org/wiki/%s`
- `https://maps.google.com/maps?q=%s`

> **Tip:** Your selected text is automatically URL-encoded, so spaces and special characters are handled for you.

### Shell Actions & Scripts

Save a shell command that runs with your selected text or as a one-off command. Use this to automate workflows, trigger scripts, or pipe text to command-line tools.

Shell actions use `{{result}}` as the placeholder for your selected text. **Cai single-quote-wraps and escapes it for you** — just write `{{result}}` directly, no quoting required.

**Examples (from the [cai-extensions](https://github.com/cai-layer/cai-extensions) repo):**

- `echo -n {{result}} | base64`: encode text as Base64
- `echo {{result}} | tr '[:lower:]' '[:upper:]'`: uppercase
- `echo -n {{result}} | md5`: MD5 hash
- `lsof -ti :{{result}} | xargs kill -9`: kill the process on a given port
- `say {{result}}`: read your selected text aloud
- `curl -s ifconfig.me | pbcopy`: copy your public IP (no placeholder needed)

> **Migration note.** If your action was authored before v1.5 with `'{{result}}'` or `"{{result}}"` (manually wrapped), Cai rewrites it to the new safe-by-default form on first launch. No action needed; your shortcut keeps working identically.

> **Caution:** Shell actions execute with your user-level permissions and can modify files, send network requests, and control other applications. Only create shell actions if you understand exactly what the command does. Never paste commands from untrusted sources.

#### Filter pipeline (advanced)

The full template syntax is `{{var|filter|filter:"arg"}}`. Filters chain left to right. The default filter for a shell action is `|shell` (single-quote wrap + escape) — that's why bare `{{result}}` is safe.

| Filter | What it does |
|---|---|
| `shell` | Single-quote wrap and escape (default in shell actions) |
| `url_encode` | Percent-encode for URLs |
| `json` | Escape for JSON string contexts |
| `llm:"directive"` | Run the value through the local LLM with the directive as the system prompt |
| `raw` | Pass through unchanged. Use for values you control (e.g. integer ports) |

Useful patterns:

- `{{result|llm:"translate to German"}}` — runs an inline LLM transform inside a shell command (also auto-runs the action in the background; see below)
- `{{result|raw}}` — opt out of escaping when you know the input is safe
- `{{result|url_encode}}` — manually URL-encode inside a shell template

#### Shell Action Tips

- **`command not found`?** Shell actions run in a non-interactive zsh that doesn't load your `~/.zshrc`, so tools like `gh`, `node`, or `python` installed via Homebrew may not be on `PATH`. Use the absolute path: `/opt/homebrew/bin/gh …` on Apple Silicon, `/usr/local/bin/gh …` on Intel. Find it with `which gh` in Terminal.
- **15-second timeout** for foreground shell actions. For longer-running tasks, enable **Run in background** (see below).
- **Newlines in selected text.** Multi-line selections work transparently with the default `|shell` filter. If a downstream tool (`say`, `open`, URL builders) misbehaves on newlines, collapse them first: `echo {{result}} | tr '\n' ' '`.

## Run in Background

Shell actions have a **"Run in background"** toggle. When enabled:

1. Cai dismisses immediately when you trigger the action
2. The menu bar icon pulses while the task runs
3. A toast surfaces the result on completion (or the error message on failure)

This is the right choice for slow tasks (network calls, long pipelines, AI-driven shells). Actions whose template includes an `|llm:"…"` filter are automatically forced into background mode — local LLM generation takes too long for the foreground path.

## Auto Replace Selection

For **Prompt** actions, you can enable the **"Auto replace selection"** toggle. When triggered, the action:

1. Dismisses Cai immediately
2. Runs the LLM in the background
3. Pastes the result directly over your original selection

This skips the result view entirely. Perfect for actions like "Fix Grammar," "Translate to German," or "Make Professional" where you always want the result to replace the source text.

---

## Chaining Actions

Every custom action has a **"Then run"** field that lets you append more steps. Each step receives the previous step's output as input — so a chain pipes results from action to destination to LLM to Apple Shortcut, in any order you like.

Three kinds of step:

| Step | What it is |
|---|---|
| **Action** | Another custom action or destination by name. Reuse the building blocks you already have. |
| **Inline LLM** | A one-off LLM transform with a directive (e.g. "summarize as 3 bullets, no preamble"). No saved action needed. |
| **Apple Shortcut** | Any shortcut from your Shortcuts.app library, run via `shortcuts run`. Cai pipes the chain value via stdin; stdout flows back. |

**Examples**

- **Translate → Replace Selection.** "Translate to German" prompt action, then "Replace Selection" destination. One keystroke replaces the source text with the translation in place.
- **Selection → Summarize → Slack.** Inline LLM step ("summarize in 2 sentences"), then a Slack webhook destination. Long messages turn into digest pings.
- **Selection → Save to Things.** Apple Shortcut step that creates a Things to-do from text input. Cai becomes a launcher for your existing automations.
- **Bug report → GitHub issue → Linear ticket.** Two MCP destinations chained: file the same context to both trackers in one trigger.

**Safety rails:** Cai enforces a max chain depth of 10 and detects cycles (e.g. action A → action B → action A). The chain stops with a toast rather than looping forever.

---

## Creating Custom Actions

1. Left-click the **Cai menu bar icon** to open Preferences
2. Click **Actions** and switch to the **Custom** tab
3. Click the add button and fill in:
   - **Name**: what you'll see in the action list
   - **Type**: Prompt, URL, or Shell
   - **Value**: the prompt instruction, URL template (use `%s` for your selected text, auto-encoded), or shell command (just use `{{result}}` — see [Shell Actions](#shell-actions--scripts) above)
4. **Then run** (optional): add chain steps to pipe the result into another action, destination, inline LLM step, or Apple Shortcut
5. For Prompt actions, optionally enable **"Auto replace selection"** to replace the selected text inline
6. For Shell actions, optionally enable **"Run in background"** for slower tasks
7. Click **Save**

You can edit or delete existing custom actions from the same screen.

---

## Make Cai Yours

Settings → **Actions** has two tabs: **Custom** and **Built-in**. Both let you tune what shows up in the ⌥C list.

- **Pin to top.** Toggle "Pin to top" on a custom action and it jumps ahead of Ask AI in the list, claiming the first ⌘ numbers. Pinned actions appear in pinned-first order; everything else falls below.
- **Drag to reorder.** Use the drag handle in the row to reorder your custom actions. Pinned ones stay above unpinned.
- **Hide built-in actions.** The Built-in tab has per-action visibility toggles. Turn off anything you don't use (Define, Search, Pretty Print JSON, etc.) to keep the list focused. Hidden actions stay reachable by typing to filter, so you don't lose them — they just stop crowding the default view.

The action list updates live as you toggle: no need to dismiss and re-trigger ⌥C.

---

## Using Custom Actions

Custom actions appear when you **type to filter** in the action window:

1. Select text and press **⌥C**
2. Start typing to filter — your custom actions matching the search appear alongside built-in actions
3. Use **⌘1–9** or arrow keys to pick one
4. The action executes immediately

**Example:** You have a custom action named "Reddit Search". Type `red` and it appears. Press Enter or its ⌘ number to search Reddit with your selected text.

## Requirements

- **Prompt actions** require a running [local LLM server](/docs/getting-started/llm-setup/)
- **URL actions** work without any LLM — they just open your browser
- **Shell actions** work without any LLM — they execute the command directly
- **Chain steps** with inline LLM directives or actions of type Prompt require an LLM
