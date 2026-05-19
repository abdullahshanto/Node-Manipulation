import os from 'node:os';
import chalk from 'chalk';

let oldCPU = os.cpus();

function monitor(){
    const newCPU = os.cpus();

    const usage = newCPU.map((cpu,i)=>{
      return {
        core : i,
        usage : calculate_CPU(oldCPU[i],newCPU[i])+'%'
      };
    });

    console.clear();

    console.log(chalk.bgMagenta("system monitor"));

    console.table(usage);

    // Memory Information
    const totalMemoryInGB = os.totalmem() / (1024*1024*1024);
    const freeMemoryInGB = os.freemem() / (1024*1024*1024);
    const usedMemory = totalMemoryInGB - freeMemoryInGB;
    const memoryPercent = (usedMemory / totalMemoryInGB) * 100;
    
    let memoryColor = chalk.green;
    if (memoryPercent > 85) memoryColor = chalk.red;
    else if (memoryPercent > 60) memoryColor = chalk.yellow;

    console.log(`Memory Usage: ${memoryColor(`${usedMemory.toFixed(2)} GB / ${totalMemoryInGB.toFixed(2)} GB (${memoryPercent.toFixed(1)}%)`)}`);

    // System Information
    const uptime = os.uptime();
    const days = Math.floor(uptime / 86400);
    const hours = Math.floor((uptime % 86400) / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);

    console.log(`System OS: ${chalk.cyan(`${os.type()} ${os.release()}`)}`);
    console.log(`Uptime: ${chalk.cyan(`${days}d ${hours}h ${minutes}m ${seconds}s`)}`);

    oldCPU = newCPU; // Update oldCPU for the next tick
}

function calculate_CPU(oldCPU,newCPU)
{
  const oldTotal = Object.values(oldCPU.times).reduce((a,b)=>a+b);
  const newtotal = Object.values(newCPU.times).reduce((a,b)=>a+b);

  const idle = newCPU.times.idle - oldCPU.times.idle;

  const total = newtotal - oldTotal;
  const used=total-idle;

  return ((100*used)/total).toFixed(1);
}


setInterval(monitor,1000)


