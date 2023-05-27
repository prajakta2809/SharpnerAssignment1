const ul = document.querySelector('.items');

const btn= document.querySelector('.btn');

// click

// btn.addEventListener('click',(e)=>{
//   e.preventDefault();
//   document.querySelector('#my-form').style.background ='#ccc';
// });

// // mousehover

// btn.addEventListener('mouseover',(e)=>{

//     document.querySelector('body').classList.add('bg-dark');
// });

// //mouseout
// btn.addEventListener('mouseout',(e)=>{
//   document.querySelector('.items').lastElementChild.innerHTML="<h1>Hello<h1/>";
// });

//2nd task:
const myForm =document.querySelector('#my-form');
const nameInput =document.querySelector('#name');
const email =document.querySelector('#email');
const user =document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    
    e.preventDefault();
    if(nameInput.value==='' || email.value===''){
        console.error("complete the form");
    }else{
        var li=document.createElement('li');
        li.className='item';
        li.appendChild(document.createTextNode(nameInput.value));
        li.appendChild(document.createTextNode(email.value));
        ul.appendChild(li);

        let obj={
            name:nameInput.value,
            email:email.value
        }
        obj=JSON.stringify(obj);
        console.log(nameInput.value);
        console.log(email.value);
        localStorage.setItem(email.value,obj);
        
    }
    
}

