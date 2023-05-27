var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit',addItems);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);

function addItems(e){
    e.preventDefault();
    var newItem=document.getElementById('item').value;
    var newItemDescription=document.getElementById('description').value;

    var li=document.createElement('li');
    li.className='list-group-item';
    //console.log(li);
    li.appendChild(document.createTextNode(newItem));
    li.append(document.createTextNode(newItemDescription));

    var delButton = document.createElement('button');
    var editButton = document.createElement('button');

    delButton.className="btn btn-danger btn-sm float-right delete";
    editButton.className="btn btn-primary btn-sm float-right";

    delButton.appendChild(document.createTextNode('X'));
    editButton.appendChild(document.createTextNode('Edit'));

    li.appendChild(delButton);
    li.appendChild(editButton);

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
    //console.log(text);
    var items=itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var iteamName = item.childNodes[0].textContent;
        var descName = item.childNodes[1].textContent;
        var finalName=iteamName+descName;
        console.log(finalName);
        if(finalName.toLowerCase().indexOf(text)!= -1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    })

}
