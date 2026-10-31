---
title: "Keep Awake & Focus Timer"
description: "Keep your Mac awake and run a Pomodoro-style focus timer from the Cai menu bar icon. Both are off by default and live in Settings, Menu Bar."
---

# Keep Awake & Focus Timer

Two small tools live in the Cai menu bar icon: **Keep Awake** stops your Mac from sleeping for as long as you choose, and the **Focus Timer** reminds you to look away from the screen. Both are off by default. Turn them on in **Settings** → **Menu Bar**.

---

## Keep Awake

1. Open Cai → **Settings** → **Menu Bar** and turn on **Keep Awake**
2. Click the Cai logo in the menu bar to start it. Click again to stop it

A click starts Keep Awake with the duration you used last (30 minutes the first time). To pick another one, right-click the icon and choose **Keep Awake For**: Indefinitely, 15 Minutes, 30 Minutes, 1 Hour, 2 Hours or 5 Hours. **Turn Off** in the same submenu stops it.

While it is on, the Cai icon turns into an outline and fills back in from the top as time passes. When it is solid again, Keep Awake has ended and your Mac sleeps as usual. With **Indefinitely**, the icon stays an outline until you turn it off. The right-click menu shows the time left, for example "Keep Awake: 18 min left".

Once Keep Awake is enabled, a click no longer opens Settings. Use **Cai Settings…** (⌘,) in the right-click menu instead.

### Options

| Setting | What it does |
| --- | --- |
| **Let the display sleep** | Keeps the Mac awake (downloads, builds and calls keep running) but lets the screen turn off. Off by default |
| **Stop when battery is below** | Ends Keep Awake when the Mac is unplugged and the battery drops below 10%, 20%, 30% or 50%. On at 10% by default. Only shown on Macs with a battery |

---

## Focus Timer

A minimal Pomodoro timer: 25 minutes of focus, then a 5-minute break, and a 30-minute break after every 4th session.

1. Open Cai → **Settings** → **Menu Bar** and turn on **Focus Timer**
2. Right-click the Cai menu bar icon and choose **Start Focus**

While a session runs, the time left shows next to the Cai logo, for example `24:13`.

### Quick controls

Click the countdown to open a small panel right under it:

| Control | What it does |
| --- | --- |
| **↺** | Starts the whole cycle over: session 1, focus, full length. Press it again within 5 seconds (it shows as **■**) to stop the timer |
| **⏸** / **▶** | Pauses, or carries on where it was |
| **⏭** | Moves on: from focus to the break, from a break straight into the next focus session |

The four dots under the controls show where you are in the cycle: solid for finished sessions, a ring for the one you're in, faint for the ones to come. A click on the Cai logo keeps its own job (Keep Awake, or Settings), and right-clicking anywhere opens the full menu.

### In the menu

The right-click menu has the same controls as plain items, plus two more:

| Item | What it does |
| --- | --- |
| **Restart Focus** / **Restart Break** | Starts only the current session again |
| **Stop Timer** | Ends the session and clears the cycle; the countdown leaves the menu bar |

### When a session ends

A short chime plays when a focus session or a break runs out on its own, and a notification says it's time for a break. **Snooze 5 min** on the notification gives you five more minutes of focus before the same break comes back. After a break that runs out, the next focus session waits until you start it.

The lengths are adjustable in **Settings** → **Menu Bar**: **Focus** (5 to 90 minutes), **Short break** (1 to 30) and **Long break, every 4th** (5 to 60). A change applies from the next session. **Play a sound when a session ends** turns the chime off.

The chime works with notifications off. The break notification needs notifications allowed for Cai; if they are off, Settings says so and links to **Open Notification Settings**.

---

## Agents can read the timer

If you have [connected an agent](/docs/usage/agent-actions/), it can read the timer and Keep Awake state through the `get_focus_state` tool: which session is running, how long is left, and whether the Mac is being kept awake. That lets an agent suggest a break when a focus session ends. It is read-only: agents can't start, pause or skip the timer, or change Keep Awake.
