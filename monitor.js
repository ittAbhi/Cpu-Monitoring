import os from 'node:os';
import chalk from 'chalk';

let oldCpus = os.cpus();

setInterval(() => {
    const newCpus = os.cpus();

    const usage = newCpus.map((cpu, i) => {
        return {
            core: i,
            usage: calculateCPU(oldCpus[i], newCpus[i]) + '%',
        };
    });

    oldCpus = newCpus;

    console.clear();
    console.log(chalk.bgMagenta.bold('=======System Stats========'));

    console.table(usage);
    console.log('Platform:', os.platform());
    console.log('Arch:', os.arch());
    console.log('Time:', new Date().toLocaleTimeString());
    console.log('CPU Cores:', os.cpus().length);

    const usedMemory = (os.totalmem() - os.freemem()) / (1024 * 1024 * 1024);
    const totalMemory = os.totalmem() / (1024 * 1024 * 1024);

    console.log(
        'Memory used:',
        usedMemory > 6.6
            ? chalk.redBright(`${usedMemory.toFixed(2)} GB / ${totalMemory.toFixed(2)} GB`)
            : chalk.green(`${usedMemory.toFixed(2)} GB / ${totalMemory.toFixed(2)} GB`)
    );

    const percent = (usedMemory / totalMemory) * 100;

    const filled = Math.floor(percent / 10);
    const empty = 10 - filled;

    const bar = '█'.repeat(filled) + '░'.repeat(empty);

    console.log(`Usage: ${bar} ${percent.toFixed(0)}%`);

    const upTime = os.uptime();
    const hours = Math.floor(upTime / 3600);
    const mins = Math.floor((upTime % 3600) / 60);

    console.log(`The uptime is: ${hours} hrs ${mins} mins.`);

    if (usedMemory > 6.6) {
        console.log(chalk.red('⚠ High Memory Usage'));
    }

    console.log('-----------------------------');

}, 1000);

function calculateCPU(OldCpus, newCpus) {
    const oldTotal = Object.values(OldCpus.times).reduce((a, b) => a + b);
    const newTotal = Object.values(newCpus.times).reduce((a, b) => a + b);

    const idle = newCpus.times.idle - OldCpus.times.idle;
    const total = newTotal - oldTotal;
    const used = total - idle;

    return ((100 * used) / total).toFixed(1);
}