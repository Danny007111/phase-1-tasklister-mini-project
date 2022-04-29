document.addEventListener("DOMContentLoaded", () => {

  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  // const newTaskPriority = document.getElementById("new-task-priority");
  const ul = document.getElementById("tasks");


function inputLength(){
  return newTaskDescription.value.length;
};

function createListElement(){
  let li = document.createElement("li");
  let buttn = document.createElement("button");

  buttn.setAttribute("id", `${newTaskDescription.value.split(' ').join('')}`);
  
  buttn.innerHTML = "X";
  li.appendChild(document.createTextNode(newTaskDescription.value + " "));
  li.appendChild(buttn);
  ul.appendChild(li);

  let sel = document.querySelector("#" + `${newTaskDescription.value.split(' ').join('')}`)

  sel.addEventListener("click", function(){
    ul.removeChild(li);
  })

  newTaskDescription.value = "";
}

newTaskForm.addEventListener("submit", function(e){
  e.preventDefault();
  if (inputLength() > 0 ){
    createListElement();
  }else{
    console.log("Stop!")
  }
  });



  
})