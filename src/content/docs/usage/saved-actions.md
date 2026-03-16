---
title: "Custom Actions"
description: "Save frequently-used AI prompts and URL templates as custom actions in Cai. Instant access to your most common clipboard actions."
---

# Custom Actions

Custom actions let you save frequently-used prompts and URL templates for instant access. Type to filter your actions and custom actions appear inline — no menus, no setup each time.

## Two Types of Custom Actions

### Prompt Actions

Save an AI instruction you use often. When triggered, Cai sends your clipboard text to the LLM with your saved prompt.

**Examples:**
- `Rewrite as a professional email reply`
- `Translate to German`
- `Extract action items as a bullet list`
- `Convert to SQL query`

### URL Actions

Save a URL template with `%s` as a placeholder. When triggered, Cai replaces `%s` with your clipboard text and opens it in your browser.

**Examples:**
- `https://www.reddit.com/search/?q=%s`
- `https://translate.google.com/?text=%s`
- `https://en.wikipedia.org/wiki/%s`
- `https://maps.google.com/maps?q=%s`

> **Tip:** The clipboard text is automatically URL-encoded, so spaces and special characters are handled for you.

## Creating Custom Actions

1. Left-click the **Cai menu bar icon** to open Preferences
2. Click **Custom Actions**
3. Click the add button and fill in:
   - **Name** — what you'll see in the action list
   - **Type** — Prompt or URL
   - **Value** — the prompt instruction or URL template (use `%s` for the clipboard text)
4. Click **Save**

You can edit or delete existing custom actions from the same screen.

## Using Custom Actions

Custom actions appear when you **type to filter** in the action window:

1. Select text and press **⌥C**
2. Start typing to filter — your custom actions matching the search appear alongside built-in actions
3. Use **⌘1–9** or arrow keys to pick one
4. The action executes immediately

**Example:** You have a custom action named "Reddit Search". Type `red` and it appears — press Enter or its ⌘ number to search Reddit with your clipboard text.

## Requirements

- **Prompt actions** require a running [local LLM server](/docs/getting-started/llm-setup/)
- **URL actions** work without any LLM — they just open your browser
