import *as fs from 'node:fs/promises';
import chalk from 'chalk';
import path from 'node:path';

 //createFile....
export async function createFile (pathname,initialContent){ 
  try{
    await fs.writeFile(pathname,initialContent)
    console.log(chalk.green(`${pathname} file created successfully...`));
  
  }
    catch(err)
    {
      console.log("somthing went wrong..",err.message);
    return ;
    }
  
  
}

//appendFile
export async function appendFile(pathname,content)
{
  try{

  await fs.appendFile(pathname,`\n`+content);
  //console.log('appending done..');
  console.log(chalk.green(`${pathname} content added successfully...`));

  }catch(err)
  {
    console.log("something went wrong...",err.message);
  }
  
}

//read file...
export async function readFile(pathname)
{
try{
 const result = await fs.readFile(pathname,'utf-8');
 //console.log(chalk.green(`file read successfully...`));
 console.log(`read content from ${pathname}` )
 console.log(`${result}`)
  }
  catch(err)
  {
    console.log("something went wrong",err.message)
  }
}

//create folder 
export async function creatFolder(pathname)
{
  try{
   await fs.mkdir(pathname);
     console.log(chalk.green(`${pathname} create successfully...`));
  }
  catch(err)
  {
    console.log("something went wrong",err.message);
  }
}

//delete file
export async function deletefile(pathname)
{
  try{
    await fs.unlink(pathname)
    console.log(chalk.green(`${pathname} deleted successfully`));
  }

  catch(err) {
    console.log("something went wrong",err.message);
    return;
  }
  
}

 //delete folder..
export async function delete_Folder(pathname) {
  try{
     await fs.rm(pathname , {recursive : true , force : true});
   console.log(chalk.green(`${pathname} deleted successfully...`));
  }
  catch(err)
  {
     console.log("something went wrong..",err.message)
  }
}  

//Information
export async function getinfo(pathname) {
  try{
  const info =  await fs.stat(pathname);
   const result ={
    birth : info.birthtime,
    modified: info.mtime,
      size: info.size,
      isDir: info.isDirectory()
   };
   console.log(`getting info from ${pathname}`)
   console.log(chalk.green(JSON.stringify(result)));
   return result;
  }
  catch(err)
  {
    console.log("something went wrong...",err.message)
  }
}

