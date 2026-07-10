let btnAddTask = document.getElementById("btn-add-task");
let inputInsText = document.getElementById("input-ins-text");
let table = document.querySelector("table");
let cont = 0;
let btnDeleteTask = document.getElementById("btn-delete-task");


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
if( cont > 0){
btnDeleteTask.addEventListener("click", deleteTask);
var rowtoDelete = "";

function deleteTask()
{
    rowToDelete = btnDeleteTask.parentElement.parentElement;
    rowToDelete.remove();

    rowtoDelete = "";

    if(rowToDelete !== "") {

    rowToDelete = "";
}

console.log(rowToDelete);
}
}