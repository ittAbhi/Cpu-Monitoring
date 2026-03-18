# Cpu-Monitoring
A terminal-based system monitor built with Node.js that displays live CPU usage, memory usage, uptime, platform details, and real-time system statistics with colored alerts.

<img width="494" height="691" alt="Screenshot 2026-03-18 211939" src="https://github.com/user-attachments/assets/bb82f2ef-10f9-499c-bda0-0f5756163f8e" />




# Terminal System Monitor using Node.js

A simple terminal-based system monitor built using Node.js.

It shows live system information directly in the terminal, including:

* CPU usage per core
* Memory usage
* Memory usage progress bar
* System uptime
* Platform and architecture
* Live current time
* High memory usage warning

## Features

* Real-time CPU monitoring for each core
* Colored memory alerts using Chalk
* Visual memory usage bar
* Automatic screen refresh every second
* Clean terminal dashboard output

## Technologies Used

* Node.js
* Chalk
* OS module

## Installation

```bash
npm install chalk
```

## Run the project

```bash
node app.js
```

## Example Output

```text
=======System Stats========
CPU Cores: 12
Platform: win32
Arch: x64
Memory used: 5.82 GB / 7.73 GB
Usage: ████████░░ 75%
The uptime is: 5 hrs 20 mins
```

## Learning Outcome

This project helped in understanding:

* Node.js core modules
* CPU and memory calculation
* Terminal formatting
* Real-time monitoring logic

## Future Improvements

* Average CPU usage
* Network monitoring
* Disk usage
* Better terminal UI
