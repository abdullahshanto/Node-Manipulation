import os from 'node:os';

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
    console.table(usage);

    const totalMemoryInGB = os.totalmem() / (1024*1024*1024);
    const usedMemory = totalMemoryInGB - (os.freemem() / (1024*1024*1024));
    console.log(
        `memory used : ${usedMemory.toFixed(3)} GB / ${totalMemoryInGB.toFixed(3)} GB`
    );

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


