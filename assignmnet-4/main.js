const nameInput=document.getElementById('name');
const emailInput=document.getElementById('email');
const phoneInput=document.getElementById('phone');
const submitbtn=document.getElementById('submitbtn');
const myForm=document.getElementById('myForm');
myForm.addEventListener('submit',onSubmit);
const ul =document.getElementById('items');
ul.addEventListener('click',removeItem);
ul.addEventListener('click',editItem);


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
        const editbtn=document.createElement('button');

        delbtn.appendChild(document.createTextNode('Delete'));
        editbtn.appendChild(document.createTextNode('Edit'));

        delbtn.className='delete';
        editbtn.className='edit';

        li.append(delbtn);
        li.append(editbtn);
        ul.appendChild(li);

        myObj={
            
            name:nameInput.value,
            email:emailInput.value,
            phone:phoneInput.value
        }

       // myObj=JSON.stringify(myObj);
       // localStorage.setItem(emailInput.value,myObj);
          axios.post("https://crudcrud.com/api/07a504ef4ae84fd0aabb93c1ec2d55c3/data",myObj)
          .then(res=>{
            console.log(res);
          }).catch((err)=>{
            console.log(err);
          })


          axios.get("https://crudcrud.com/api/07a504ef4ae84fd0aabb93c1ec2d55c3/data")
          .then((res)=>{
           // console.log(res);
           console.log("response:"+res.data);
          }).catch((err)=>{
            console.log(err);
          })

    }
}

function removeItem(e){
    
    e.preventDefault();
    let getElement=e.target.parentElement;
    let todelete=getElement.childNodes[1].textContent;
    console.log(myObj);
    if(e.target.classList.contains('delete')){
        let li=ul.getElementsByTagName('li');
        Array.from(li).forEach(function(i){
            let key=i.childNodes[1].textContent;
            if(todelete==key){
                //console.log(key);
               // localStorage.removeItem(key);
                axios.delete(`https://crudcrud.com/api/07a504ef4ae84fd0aabb93c1ec2d55c3/data/64a90b5fc632b703e8309d69`)
                .then(res=>{
                  console.log(res);
                }).catch((err)=>{
                  console.log(err);
                })
      
                ul.removeChild(getElement);
            }
        })
    }

}
    

function editItem(e){
    e.preventDefault();
    let getElement=e.target.parentElement;
    let todelete=getElement.childNodes[1].textContent;

    const targetName=getElement.childNodes[0].textContent;
    const targetEmail=getElement.childNodes[1].textContent;
    const targetPhone=getElement.childNodes[2].textContent;


    if(e.target.classList.contains('edit')){
        let li=ul.getElementsByTagName('li');
        Array.from(li).forEach(function(i){
            let key=i.childNodes[1].textContent;
            if(todelete==key){
                localStorage.removeItem(key);
                nameInput.value=targetName;
                emailInput.value=targetEmail;
                phoneInput.value=targetPhone;

                ul.removeChild(getElement);
            }
        })
    }
}