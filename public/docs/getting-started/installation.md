# Installation

## Download

1. Download the `.dmg` from the [latest release](https://github.com/soyasis/cai/releases/latest)
2. Open the DMG and drag **Cai.app** to your Applications folder
3. Open the app — macOS will show a warning (see [First Launch Setup](#first-launch-setup) below)
4. Configure your LLM server in Preferences (left-click the menu bar icon)

## Requirements

- **macOS 13.0** (Ventura) or later
- **Accessibility permission** (for the global hotkey ⌥C)
- **Local LLM server** (optional — only needed for AI-powered actions)

## First Launch Setup

Cai is free and open source. Since it's not distributed through the App Store or notarized with a paid Apple Developer account, macOS Gatekeeper will block it on first launch. This is normal for any open-source Mac app distributed outside the App Store.

**Step 1** — Open Cai. macOS will block it. Click **Done**.

**Step 2** — Go to **System Settings → Privacy & Security**, scroll down, and click **Open Anyway**.

**Step 3** — Click **Open Anyway** in the confirmation dialog.

**Step 4** — Authenticate with Touch ID or your password.

**Step 5** — Cai needs Accessibility permission to use the global hotkey (⌥C) and simulate ⌘C to copy your selection. Click **Open System Settings**.

**Step 6** — Toggle Cai **on** in the Accessibility list.

You're all set! Press **⌥C** with any text selected to start using Cai.

> [!TIP]
> You can also remove the quarantine flag via Terminal instead: `xattr -cr /Applications/Cai.app`

## Build from Source

```bash
git clone https://github.com/soyasis/cai.git
cd cai/Cai
open Cai.xcodeproj
```

In Xcode:
1. Select the **Cai** scheme and **My Mac** as destination
2. **Product → Run** (⌘R)

> [!NOTE]
> The app requires Accessibility permission and runs without App Sandbox (required for global hotkey and CGEvent posting).
