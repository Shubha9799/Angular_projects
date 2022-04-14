console.log('Taking command line argumentsfor node js program');
process.argv.forEach((ele,index,arr)=>{
    console.log(`${ele}-->${index}`)
})
const args=process.argv.slice(2);
console.log(args);