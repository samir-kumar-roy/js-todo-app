// console.log("Hello");
let toDoList = document.querySelector(".todo-list");

// let newTodoItem = document.createElement("div");
// newTodoItem.classList.add("todo-item");
// let newTodoPara = document.createElement("p");
// newTodoPara.textContent = "Programming Practice";
// newTodoItem.append(newTodoPara);

// let buttons = document.createElement("div");
// buttons.classList.add("buttons");

// let doneUndoneWrappper = document.createElement("div");

// const donebutton = document.createElement("a");
// donebutton.classList.add("done-btn", "btn");
// donebutton.setAttribute("href", "#");
// donebutton.textContent = "Done";
// doneUndoneWrappper.append(donebutton);

// const unDonebutton = document.createElement("a");
// unDonebutton.classList.add("undone-btn", "btn");
// unDonebutton.setAttribute("href", "#");
// unDonebutton.textContent = "Undone";
// doneUndoneWrappper.append(unDonebutton);

// buttons.append(doneUndoneWrappper);

// const deletebutton = document.createElement("a");
// deletebutton.classList.add("delete-btn", "btn");
// deletebutton.setAttribute("href", "#");
// deletebutton.textContent = "Delete";
// buttons.append(deletebutton);
// // appending buttons onto the new todo item

// newTodoItem.append(buttons);
// toDoList.append(newTodoItem);
// console.log(newTodoItem);
// // for hiding the undone button when page loads
// console.log("length", undoneBtns.length)
// console.log("length of Done buttons", doneBtns.length)


const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", e => {
    e.preventDefault();
    let todoTask = document.querySelector("#todo-task").value;
    if (todoTask == "") {
        setTimeout(() => {
            document.querySelector(".empty-alert").style.display = "block";
        }, 100)
    } else {

        toDoList.innerHTML += `
<div class="todo-item">
            <p>${todoTask}</p>
            <div class="buttons">
                <div>
                    <a href="#" class="done-btn btn">Done</a>
                    <a href="#" class="undone-btn btn">Undone</a>
                </div>
                <a href="#" class="delete-btn btn">Delete</a>
            </div>
        </div>
`;

        document.querySelector("#todo-task").value = "";
    }
    let doneBtns = document.querySelectorAll(".done-btn");
    for (let doneBtn of doneBtns) {
        doneBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.target.style.display = "none";
            e.target.parentElement.parentElement.previousElementSibling.style.textDecoration = "line-through";
            e.target.nextElementSibling.style.visibility = "visible";
        })
    }

    let undoneBtns = document.querySelectorAll(".undone-btn");
    for (let undonebutton of undoneBtns) {
        undonebutton.addEventListener("click", function (e) {
            e.preventDefault();
            e.target.style.visibility = "hidden";
            e.target.parentElement.parentElement.previousElementSibling.style.textDecoration = "none";
            e.target.previousElementSibling.style.display = "inline-block";
        })
    }
    let deleteBtns = document.querySelectorAll(".delete-btn");
    console.log(deleteBtns);
    for (let deletebtn of deleteBtns) {
        deletebtn.addEventListener("click", e => {
            e.preventDefault();
            if (confirm("Are you sure?")) {
                e.target.parentElement.parentElement.remove();
            }

        });
    }
})


