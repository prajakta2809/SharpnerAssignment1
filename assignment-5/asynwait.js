console.log("person 1: shows ticket");
console.log("person 2: shows ticket");

const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');

    },3000)
})

promiseWifeBringingTicks.then((t)=>{
   console.log(`person3: shows${t}`);
})


const getPopcorn = promiseWifeBringingTicks.then((t)=>{
    console.log("wife: I have the tickets");

    console.log("husband: we should go in");
    console.log("wife: no i am hungry");
    return new Promise((resolve,reject)=>resolve(`${t}`))
});

const getButter=getPopcorn.then((t)=>{
   console.log("husband: we should go in");
   console.log('wife: I need butter on my popcorn')
})

getButter.then((t)=> console.log(t));

console.log("person 4: shows ticket");
console.log("person 5: shows ticket");
//----------------------------------------------------------------------------------------------------

console.log("person 1: shows ticket");
console.log("person 2: shows ticket");

const preMovie= async()=>'perMovie';



preMovie().then((m)=> console.log(m));

console.log("person 3: shows ticket");
console.log("person 4: shows ticket");