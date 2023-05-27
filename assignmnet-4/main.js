const nameInput=document.getElementById('name');
const emailInput=document.getElementById('email');
const phoneInput=document.getElementById('phone');
const submitbtn=document.getElementById('submitbtn');
const myForm=document.getElementById('myForm');
myForm.addEventListener('submit',onSubmit);
const ul =document.getElementById('items');
ul.addEventListener('click',removeItem);
let myObj;
function onSubmit(e){
    e.preventDefault();
    if(nameInput.value==='' || emailInput.value===''|| phoneInput.value===''){
        console.error('incomplete form');
    }else{
        const li=document.createElement("li");
        li.appendChild(document.createTextNode(nameInput.value));
        li.appendChild(document.createTextNode(emailInput.value));
        li.appendChild(document.createTextNode(phoneInput.value));
        const delbtn=document.createElement('button');
        delbtn.appendChild(document.createTextNode('Delete'));
        delbtn.className='delete';
        li.append(delbtn);
        ul.appendChild(li);

        myObj={
            name:nameInput.value,
            email:emailInput.value,
            phone:phoneInput.value
        }

        myObj=JSON.stringify(myObj);
        localStorage.setItem(emailInput.value,myObj);
           

    }
}



function removeItem(e){
   
    e.preventDefault();
    let getElement=e.target.parentElement;
    let todelete=getElement.childNodes[1].textContent;

    if(e.target.classList.contains('delete')){
        let li=ul.getElementsByTagName('li');
        Array.from(li).forEach(function(i){
            let key=i.childNodes[1].textContent;
            if(todelete==key){
                localStorage.removeItem(key);
                ul.removeChild(getElement);
            }
        })
    }

}
    