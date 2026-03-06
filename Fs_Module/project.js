import * as readline from 'node:readline/promises';
import chalk from 'chalk';
import { stdin as input, stdout as output } from 'node:process';
import {createFile,appendFile,readFile,creatFolder,delete_Folder,deletefile,getinfo}from './file.js'


const rl = readline.createInterface({ input, output });
await console.log(chalk.bgMagenta(`file System`));
const arr = [
  'create file',
  'append file',
  'read your file',
  'create folder',
  'delete folder',
  'delete file',
  'get information about your file',
  'Exit'
];


async function showMenu() {

  arr.forEach((opt,index)=>
  {
    console.log(chalk.cyanBright(`${index+1}`)+' '+chalk.yellowBright(`${opt}`));
    
  })
  //console.log(chalk.bgMagenta(`choose one option.....`));
  const num = await rl.question(chalk.cyan(`choose one option=`));
  switch(num){
     case '1':
       const path = await rl.question("give path details=")
       const initialContent = await rl.question("write something in your file = ");
       createFile(path,initialContent);
      
       break;

     case '2':
           const add = await rl.question("give path details=")
       const Content = await rl.question("write something in your file = ");
       appendFile(add,Content);
       
       break;

       case '3':
           const read = await rl.question("give path detailswhich you want to read =")
      //  const Content = await rl.question("write something in your file = ");
       readFile(read);
      
       break;   

         case '4':
           const folder = await rl.question("give path details which you want to create =")
      //  const Content = await rl.question("write something in your file = ");
       creatFolder(folder);
       break; 

         case '5':
           const del_folder = await rl.question("give path details which you want to delete =")
      //  const Content = await rl.question("write something in your file = ");
       delete_Folder(del_folder);
       break; 

      case '6':
           const del_file = await rl.question("give path details which you want to delete =")
      //  const Content = await rl.question("write something in your file = ");
       deletefile(del_file);
       break; 


      case '7':
           const info = await rl.question("give path details which you want to get info =")
      //  const Content = await rl.question("write something in your file = ");
       getinfo(info);
       break; 

   default:
    {
      console.log(chalk.redBright("you enter wrong option"));
    }

  
}
}


showMenu();