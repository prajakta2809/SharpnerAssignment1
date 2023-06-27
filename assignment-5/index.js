
const user ={
    username:'yash',
    lastactivitytime:'13th of Jan'
}

 updateactivitytime={
    return new Promise((resolve,reject)={
        setTimeout(()=>{
            User.lastactivitytime=new Date().getTime();
            resolve(User.lastactivitytime)
        },1000)
    })
}

userupdatespost(){
    Promise.all([createPost,updateactivitytime])
    .then(([createPostresolve,updateactivityresolve])=>{
        console.log(updateactivityresolve)
    })
    .catch(err=> console.log(err));
}