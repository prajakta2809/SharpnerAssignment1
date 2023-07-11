const single=document.getElementById('item');
const description=document.getElementById('description');
const additem=document.getElementById('additem');

const myForm=document.getElementById('myForm');
myForm.addEventListener('submit',onSubmit);
const ul =document.getElementById('items');
const ul_done =document.getElementById('itemsDone');

ul.addEventListener('click',removeItem);
ul.addEventListener('click',completed);


let myObj;
function onSubmit(e){
    e.preventDefault();
    if(single.value==='' || description.value===''){
        console.error('incomplete form');
    }else{
        const li=document.createElement("li");
        li.appendChild(document.createTextNode(single.value));
        li.appendChild(document.createTextNode(description.value));
        const delbtn=document.createElement('button');
        const checkbtn=document.createElement('button');

        delbtn.appendChild(document.createTextNode('Delete'));
        checkbtn.appendChild(document.createTextNode('Check'));

        delbtn.className='delete';
        checkbtn.className='check';

        li.append(delbtn);
        li.append(checkbtn);
        ul.appendChild(li);

        myObj={
            
            item:single.value,
            desc:description.value,
            Done:'false'
        }
        axios.post("https://crudcrud.com/api/bc89789e0fd347e19ef2f297f9934afd/todos",myObj)
          .then(res=>{
            console.log(res.data._id);
          }).catch((err)=>{
            console.log(err);
          })

        //   axios.get("https://crudcrud.com/api/bc89789e0fd347e19ef2f297f9934afd/todos")
        //   .then((res)=>{
          
        //    console.log("Get API:"+res.data.length);
        //    for(let i=0;i<res.data.length;i++){
        //     console.log(res.data[i].item+" "+res.data[i].description);
        //    }
        //    //console.log("response:"+res.data);
        //   }).catch((err)=>{
        //     console.log(err);
        //   })

         

    }
}

function removeItem(e){
    
    e.preventDefault();
    let getElement=e.target.parentElement;
    let todelete=getElement.childNodes[1].textContent;
    var idToDelete;

    axios.get("https://crudcrud.com/api/bc89789e0fd347e19ef2f297f9934afd/todos")
          .then((res)=>{
          
           console.log("Get API:"+res.data.length);
           for(let i=0;i<res.data.length;i++){
            //console.log(res.data[i].item+" "+res.data[i].desc);
           if(res.data[i].desc==todelete){
              idToDelete=res.data[i]._id;
              
           }
           }
           //console.log("response:"+res.data);
          }).catch((err)=>{
            console.log(err);
          })

    
    console.log("ID to be deleted"+idToDelete);

    console.log("To delete"+idToDelete);
    if(e.target.classList.contains('delete')){
        let li=ul.getElementsByTagName('li');
        Array.from(li).forEach(function(i){
            let key=i.childNodes[1].textContent;
            if(todelete==key){
                 
               


               // var url="https://crudcrud.com/api/07a504ef4ae84fd0aabb93c1ec2d55c3/todos/"+idToDelete;
                axios.delete("https://crudcrud.com/api/07a504ef4ae84fd0aabb93c1ec2d55c3/todos/"+idToDelete)
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



function completed(e){
    
    e.preventDefault();
    let getElement=e.target.parentElement;
    let todelete=getElement.childNodes[1].textContent;
    //console.log(myObj);
    var complete;

    axios.get("https://crudcrud.com/api/bc89789e0fd347e19ef2f297f9934afd/todos")
          .then((res)=>{
          
           console.log("Get API:"+res.data.length);
           for(let i=0;i<res.data.length;i++){
            //console.log(res.data[i].item+" "+res.data[i].desc);
           if(res.data[i].desc==todelete){
              complete=res.data[i]._id;
              
           }
           }
           //console.log("response:"+res.data);
          }).catch((err)=>{
            console.log(err);
          })

    if(e.target.classList.contains('check')){
        let li=ul.getElementsByTagName('li');
        Array.from(li).forEach(function(i){
            let key=i.childNodes[1].textContent;
            if(todelete==key){
                myObj={
            
                    item:single.value,
                    desc:description.value,
                    Done:'True'
                }
                ul_done.appendChild(getElement);
                axios.put("https://crudcrud.com/api/07a504ef4ae84fd0aabb93c1ec2d55c3/todos/"+complete,myObj)
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
    

