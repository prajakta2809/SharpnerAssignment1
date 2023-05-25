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

const headerTitle=document.getElementById('header-title');
const header=document.getElementById('main-header');

/*
console.log(headerTitle);
headerTitle.textContent='Hello';
headerTitle.innerText="Goodbye"; //deals with style
headerTitle.innerHTML='<h3>hye!<h3/>'; //this will go inside h1;this will not change h1 to h3
*/
header.style.borderBottom='solid 3px black';

//byClassName
var items=document.getElementsByClassName('list-group-item');

var addItems=document.getElementsByTagName('h2')[0];
console.log(addItems);
addItems.style.fontWeight='bold';
addItems.style.color='green';




 