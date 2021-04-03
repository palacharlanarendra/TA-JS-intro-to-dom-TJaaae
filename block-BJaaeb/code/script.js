/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/

// Your code goes here

// TEST

function createInputElm(labelMsg,type="text"){
  let label = document.createElement("label");
  label.innerHTML = `${labelMsg}: <input type="${type}">`
  return label;
}
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

// Your code goes here

// TEST
function createInputElm(labelMsg,type="text"){
  let body =  document.querySelector("body");
   let label = `<label>${labelMsg}: <input type="${type}"></label>`
   body.innerHTML = label;
}
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
// Your code goes here

// TEST
function createList(args){
  let ul = document.createElement("ul");
  let li = document.createElement("li");
  let li2 = document.createElement("li");
  let li3 = document.createElement("li");
  let li4 = document.createElement("li");
  li.innerText = args[0];
  li2.innerText = args[1];
  li3.innerText = args[2];
  li4.innerText = args[3];
  ul.append(li,li2,li3,li4);
  return ul;
}
createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']);
createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']);

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

// Your code goes here

// TEST
function createTodoList(args){
    var ul = document.createElement("ul");
    for(let element of args){
      var li = document.createElement("li");
      let p = document.createElement("p");
      let input = document.createElement("input");
      var span = document.createElement("span");
      input.type="checkbox"
      li.innerText= element.name
      input.checked = element.isDone
      ul.append(li,input,span);
    }
    span.innerText="X";
    let body = document.querySelector("body");
    body.append(ul);
}
// createTodoList([
//   { name: 'Learn DOM', isDone: false },
//   { name: 'Learn JS', isDone: true },
// ]);
// createTodoList([
//   { name: 'Learn DOM', isDone: false },
//   { name: 'Learn React', isDone: true },
//   { name: 'Learn JS', isDone: true },
// ]);
