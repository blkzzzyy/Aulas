let btnAddTask = document.getElementById("btn-add-task");
let inputInsText = document.getElementById("input-ins-text");
let table = document.querySelector("tbody");
let cont = 0;

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
    columTaskOptions.innerHTML = '<button onclick="deletetask(this)" id="btn-delete-task" class="btn-delete-task">❌</button>';

    newRow.appendChild(columTaskNumber);
    newRow.appendChild(columTask);
    newRow.appendChild(columTaskCompleted);
    newRow.appendChild(columTaskOptions);

    table.appendChild(newRow);

    inputInsText.value = "";
}

function deletetask(btn)
{
    
    let row = btn.parentNode.parentNode;
    console.log(row);
    row.remove();
    
    console.log("aura + ego")
    row = "";
    btnDeleteTask = "";
}