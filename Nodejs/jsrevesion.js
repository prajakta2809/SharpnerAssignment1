// const name= 'Max';
// let age=29;
// const hashHobbies=true;
// age=30;

// const summerizeUser=(userName,userAge,userHobby)=>{
//     return (
//         'name'+userName+userAge+userHobby
//     );
// }

// const add=(a,b)=>a+b;
// console.log(add(1,2));

// console.log(summerizeUser(name,age,hashHobbies));
//-----------------------------------------------------
//assignment-Sharpner

// const product=(a,b)=>a*b;
// console.log(product(3,7));

//-------------------------------------------------------
// const person={
//     name:'MAX',
//     age:30,
//     greet(){console.log('Hii'+this.name)}
// };
// const printName=({name})=>{   //this is destructing
//     console.log(name);
// }
//person.greet();
//printName(person);

//--------Arrays----------------------------
//const hobbies=['sports','cooking',1,2,3];
// for(let i of hobbies){
//     console.log(i);
// }

// console.log(hobbies.map(i=>{
//     return 'hobby'+i;
// }));

// const friuts= ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
// console.log(friuts.map(i=>{
//     if(i==' '){
//         return 'empty string';
//     }
//     return i;
// }));

// const obj1 = {'key1': 1}
// const obj2 = { ...obj1}
// if(obj2 === obj1){
// console.log('same objects')
// }
// else{
// console.log('different objects')
// }

// setTimeout(()=>{
//     console.log('timer...')
// },3000);

console.log('a');
console.log('b');
setTimeout(() => console.log('c'), 3000)
setTimeout(() => console.log('d'), 0)
console.log('e');
  