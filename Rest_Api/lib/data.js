import path from 'path'
import fs from 'fs';
const lib={};

lib.basedir = path.join(__dirname,'/../.data');

lib.create = function(dir,file,data,callback){
  fs.open(lib.basedir+dir+)
}