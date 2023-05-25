//console.log(document);

//examine document:
// console.log(document.URL);
// console.log(document.title);
// document.title=123;
// console.log(document.head);

// console.log(document.body);
// console.log(all);
// console.log(all[10]);
// console.log(document.links);
// console.log(document.images);

//---------------------------------------

//console.log(document.getElementById('header-title'));

// const headerTitle=document.getElementById('header-title');
// const header=document.getElementById('main-header');

/*
console.log(headerTitle);
headerTitle.textContent='Hello';
headerTitle.innerText="Goodbye"; //deals with style
headerTitle.innerHTML='<h3>hye!<h3/>'; //this will go inside h1;this will not change h1 to h3
*/

//byClassName

//var items=document.getElementsByClassName('list-group-item');
/*
var addItems=document.getElementsByTagName('h2')[0];
console.log(addItems);
addItems.style.fontWeight='bold';
addItems.style.color='green';



console.log(items);
console.log(items[1]);
items[2].style.backgroundColor='green';
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}

//getElement by tag
var li=document.getElementsByTagName('li');

console.log(li);
console.log(li[1]);
li[2].style.backgroundColor='green';
for(var i=0;i<items.length;i++){
    li[i].style.fontWeight='bold';
}
*/

//query selector
// var header = document.querySelector('#main-header');
// header.style.borderBottom='solid 4px black';

// var input = document.querySelector('input');
// input.value='hello'; //grabs the first one

// var submit =document.querySelector('input[type="submit"]');
// submit.value="send";

//--Assignment given

// var li=document.getElementsByTagName('li');


// for(var i=0;i<li.length;i++){
//     li[i].style.fontWeight='bold';
// }

var li=document.getElementsByClassName('list-group-item');
for(var i=0;i<li.length;i++){
    li[i].style.fontWeight='bold';
}
