const mypath=require('path');
const fs=require('fs');
const notes='/users/joe/notes.html';  //linux
const winpath="C:\Users\shubhangi_kittur\Desktop\thbs_devops_mean_mern\99-ng-projects\todo-node\test.txt"; //windows
console.log(mypath.dirname(notes));
console.log(mypath.basename(notes));
console.log(mypath.extname(notes));

/*reading file using fs module*/
console.warn(`I am reading file by readFile method`);
//add correct and wrong file path
fs.readFile("./.env",'utf-8',(err,data)=>{
    if(err){
        console.error(`I am in error state ${err}`)
        return
    }
    console.warn(data);
})

/*writing content inside the file using fs module*/
const content="-----Appended contents in the file-----"
//{flag:'a+'}--->append content if file already exists
fs.writeFile('./test.txt',content,{flag:'a+'},err=>{
    if(err){
        console.log(err)
        return
    }
    console.log('Added content inside file successfully')
})