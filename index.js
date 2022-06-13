// console.log("Hello");
const toDoList = document.querySelector(".todo-list");
let undoneBtns = document.querySelectorAll(".undone-btn");
let doneBtns = document.querySelectorAll(".done-btn");
let newTodoItem = document.createElement("div");
newTodoItem.classList.add("todo-item");
let newTodoPara = document.createElement("p");
newTodoPara.textContent = "Programming Practice";
newTodoItem.append(newTodoPara);

let buttons = document.createElement("div");
buttons.classList.add("buttons");

let doneUndoneWrappper = document.createElement("div");

const donebutton = document.createElement("a");
donebutton.classList.add("done-btn", "btn");
donebutton.setAttribute("href", "#");
donebutton.textContent = "Done";
doneUndoneWrappper.append(donebutton);

const unDonebutton = document.createElement("a");
unDonebutton.classList.add("undone-btn", "btn");
unDonebutton.setAttribute("href", "#");
unDonebutton.textContent = "Undone";
doneUndoneWrappper.append(unDonebutton);

buttons.append(doneUndoneWrappper);

const deletebutton = document.createElement("a");
deletebutton.classList.add("delete-btn", "btn");
deletebutton.setAttribute("href", "#");
deletebutton.textContent = "Delete";
buttons.append(deletebutton);
// appending buttons onto the new todo item

newTodoItem.append(buttons);
toDoList.append(newTodoItem);
console.log(newTodoItem);
// for hiding the undone button when page loads
console.log("length", undoneBtns.length)
console.log("length of Done buttons", doneBtns.length)


// for (let doneBtn of doneBtns) {
//     doneBtn.addEventListener("click", (e) => {
//         e.preventDefault();
//         e.target.style.display = "none";
//         e.target.nextElementSibling.style.display = "inlineBlock";
//     })
// }
