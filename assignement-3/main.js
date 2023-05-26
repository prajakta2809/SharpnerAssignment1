var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit',addItems);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);

function addItems(e){
    e.preventDefault();
    var newItem=document.getElementById('item').value;
    var li=document.createElement('li');
    li.className='list-group-item';
    //console.log(li);
    li.appendChild(document.createTextNode(newItem));
    var delButton = document.createElement('button');
    delButton.className="btn btn-danger btn-sm float-right delete";
    delButton.appendChild(document.createTextNode('X'));
    li.appendChild(delButton);

    itemList.append(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
             var li =e.target.parentElement;
             itemList.removeChild(li);
        }
    }

}

function filterItems(e){
    var text = e.target.value.toLowerCase();
    console.log(text);
    var items=itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var iteamName = item.firstChild.textContent;
        if(iteamName.toLowerCase().indexOf(text)!= -1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    })

}


//Edit button adding
var addEdit=document.getElementsByClassName('list-group-item');

// addEdit[2].appendChild(editButton);
// addEdit[1].appendChild(editButton);

for(var i=0;i<addEdit.length;i++){
    var editButton=document.createElement('button');
    editButton.className="btn btn-primary btn-sm float-right";
    editButton.appendChild(document.createTextNode('Edit'));
    addEdit[i].appendChild(editButton);
}


console.log(editButton);
