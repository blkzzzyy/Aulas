let btnAddTask = document.getElementById("btn-add-task");
let inputInsText = document.getElementById("input-ins-text");
let table = document.querySelector("table");
let cont = 0;
const btnDeleteTask = document.getElementsByid("btn-delete-task");


btnAddTask.addEventListener("click", addtask);

function addtask()
{
    var inputInsTextValue = inputInsText.value;
    cont = cont + 1;

    const newRow = document.createElement("tr");
    const columTaskNumber = document.createElement("td");
    const columTask = document.createElement("td");
    const columTaskCompleted = document.createElement("td");
    const columTaskOptions = document.createElement("td");

    columTaskNumber.textContent = cont;
    columTask.textContent = inputInsTextValue;
    columTaskCompleted.innerHTML = '<input type="checkbox" name="check-completed" id="check-completed">';
    columTaskOptions.innerHTML = '<input type="button" value="❌" id="btn-delete-task" class="btn-delete-task">';

    newRow.appendChild(columTaskNumber);
    newRow.appendChild(columTask);
    newRow.appendChild(columTaskCompleted);
    newRow.appendChild(columTaskOptions);

    table.appendChild(newRow);

    inputInsText.value = "";

    console.log("Aura + Ego 67 ");

}

btnDeleteTask.addEventListener("click", deleteTask);


function deleteTask()
{
    var rowToDelete = btnDeleteTask.parentElement.parentElement;
    rowToDelete.remove();

}