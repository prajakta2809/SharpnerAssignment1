
var addBtn=document.getElementById("addExpenseBtn");
var form=document.getElementById("addForm");
var items=document.getElementById("items")
form.addEventListener('submit',addItem);
items.addEventListener('click',removeItem);
items.addEventListener('click',editItem);

    console.log(expenseAmount);
    console.log(description);

    function addItem(e){
    e.preventDefault();
    
    var expenseAmount=document.getElementById("expenseAmount").value;
    var description=document.getElementById("description").value;
    var z = document.getElementById("selected");
    var value = z.options[z.selectedIndex].value;
    var text = z.options[z.selectedIndex].text;
    var newItem=document.createElement('li');
    newItem.className='list-group-item';

    newItem.appendChild(document.createTextNode(expenseAmount));
    newItem.append(document.createTextNode(description));
    newItem.append(document.createTextNode(text));

    var delButton = document.createElement('button');
    var editButton = document.createElement('button');

    delButton.className="btn btn-danger btn-sm delete";
    editButton.className="btn btn-primary btn-sm edit";

    delButton.appendChild(document.createTextNode('Delete'));
    editButton.appendChild(document.createTextNode('Edit'));

    newItem.appendChild(delButton);
    newItem.appendChild(editButton);

    items.append(newItem);

    let obj={
        expAmt:expenseAmount,
        desc:description,
        mode:text
    }
    obj=JSON.stringify(obj);
    // console.log(nameInput.value);
    // console.log(email.value);
    localStorage.setItem(expenseAmount,obj);
}

function removeItem(e){
    e.preventDefault();
    let getElement=e.target.parentElement;
    let todelete=getElement.childNodes[0].textContent;

    if(e.target.classList.contains('delete')){
        let li=items.getElementsByTagName('li');
        Array.from(li).forEach(function(i){
            let key=i.childNodes[0].textContent;
            if(todelete==key){
                localStorage.removeItem(key);
                items.removeChild(getElement);
            }
        })
    }

}


function editItem(e){
    e.preventDefault();
    let getElement=e.target.parentElement;
    let todelete=getElement.childNodes[0].textContent;

    const targetAmt=getElement.childNodes[0].textContent;
    const targetdesc=getElement.childNodes[1].textContent;
    const targetSelect=getElement.childNodes[2].textContent;

    if(e.target.classList.contains('edit')){
        let li=items.getElementsByTagName('li');
        Array.from(li).forEach(function(i){
            let key=i.childNodes[0].textContent;
            if(todelete==key){
                localStorage.removeItem(key);
                expenseAmount=targetAmt;
                description=targetdesc;
                text=targetSelect;


                items.removeChild(getElement);
            }
        })
    }
}