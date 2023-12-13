const inputText = document.querySelector('#text')
const button = document.querySelector('.SubmitButton')
const list = document.querySelector('.addedToDo ul')
const myForm = document.getElementById('ToDoForm')


button.addEventListener('click', (x) => {
  if(inputText.value != "") {
    x.preventDefault();

  //create li where input value is added to the list
  const myLi = document.createElement('li');
  myLi.innerHTML = inputText.value;
  list.appendChild(myLi);

  //create a span where the 'X' can be used to delete list
  const mySpan = document.createElement('span');
  mySpan.innerHTML = 'x';
  // Add a click event listener to the span 'X' to remove the listed item
  mySpan.addEventListener('click',
  () => {
    myLi.remove()
  });
  myLi.appendChild(mySpan); // adding the X to inout value

  // else, if nothing is placed in the box, return Invalid input
  } else {
    alert("Invalid input. Please enter a task!")
  }
  // set value of inputText to nothing ""
  inputText.value = "";
});

