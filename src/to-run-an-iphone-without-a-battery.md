---
title: To run an iPhone without a battery
index: true
tags:
  - iphone
  - battery
source: Grok
---
# To run an iPhone without a battery

::: nota-bene
It's not possible to fully power up and run a modern iPhone (iPhone 6 or later) without a working battery, even if you plug it into a charger.
:::
### Why a Battery Is Required
- **Hardware Design**: The iPhone's power management system requires the battery to regulate voltage and provide stable power to the logic board. The charging circuit bypasses the battery only for minimal diagnostics, not full boot.
- **No Direct DC Input**: Unlike some laptops or custom devices, iPhones don't have a direct power input that skips the battery.
### What Happens When You Try
| Scenario                       | Result                                                                                         |
| ------------------------------ | ---------------------------------------------------------------------------------------------- |
| Plug in charger (no battery)   | Screen may show **Apple logo briefly** or **charging symbol**, then shuts off. No boot to iOS. |
| Plug in charger (dead battery) | Same as above—needs ~5-10% charge in battery to boot.                                          |
### Workarounds (Limited)
1. **Temporary Battery Connection** (for repair/diagnostics):
   - Connect a **known-good iPhone battery** (even from another model, temporarily) using the flex cable.
   - Or use a **DC power supply** (3.7–4.2V, ~1A) clipped to battery connector pins (**warning**: high risk of damage—only for experts).
     - Pinout (varies by model): Usually Pin 1 (+), Pin 4 (-).
     - **Do NOT attempt** unless you have schematics and experience.
2. **Apple Store / Authorized Repair**:
   - They use proprietary tools to force-boot without battery for diagnostics, but won't run the phone long-term.
### Bottom Line
- **You cannot use an iPhone without a functional battery.**
- Replace the battery (or have it replaced) to restore normal operation.
- If you're trying to recover data from a phone with a dead battery, connect a temporary battery or take it to a repair shop with micro-soldering tools.