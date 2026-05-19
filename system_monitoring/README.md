# System Monitoring Utility 🖥️

A lightweight, real-time system monitoring tool built with Node.js. It runs directly in your terminal and provides a clean, auto-updating dashboard of your computer's health and system statistics.

## Features ✨

- **CPU Monitoring:** Real-time percentage usage for each CPU core, displayed neatly in a table.
- **Dynamic Memory Usage:** Tracks used vs total memory. Output is color-coded using `chalk` to indicate load:
  - 🟢 **Green:** Under 60% memory footprint
  - 🟡 **Yellow:** 60% - 85% memory footprint
  - 🔴 **Red:** Above 85% memory footprint
- **System Information:** Displays the underlying Operating System and release version.
- **Uptime Tracking:** Live counter showing exactly how long your system has been running (Days, Hours, Minutes, Seconds).
- **Auto-Refresh:** The dashboard automatically updates every 1 second continuously.

## Prerequisites 📦

Before running this project, make sure you have [Node.js](https://nodejs.org/) installed on your machine.

## Installation 🚀

1. Clone or download this repository.
2. Navigate to the project directory in your terminal:
   ```bash
   cd system_monitoring
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

## Usage 💻

To start the system monitor, simply run:

```bash
node monitor.js
```

To stop the monitor, press `Ctrl + C` in your terminal.

## Technologies Used 🛠️

- **Node.js** (`node:os` module for core system metrics)
- **Chalk** (For terminal text coloring)
- ES Modules

---
*If any new features are added to this project, this README will be updated accordingly!*