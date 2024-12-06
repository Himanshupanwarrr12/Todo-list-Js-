// First, take all variables
let inputTxt = document.getElementById("inpTxt");
const addTxt = document.getElementById("addTxt");
let ulList = document.getElementById("todo-list");
let currentEditLi = null; // Variable to track the task being edited

// Now, add EventListener to the Add button 
addTxt.addEventListener("click", () => {

    if(inputTxt.value.trim()==="") {
        return };
    
    if (currentEditLi) {
    // If a task is being edited, update the task's text
    currentEditLi.firstChild.textContent = inputTxt.value; // Update the task text
    currentEditLi.appendChild(createEditButton()); // Re-add the Edit button
    currentEditLi.appendChild(createDeleteButton()); // Re-add the Delete button
    currentEditLi = null; // Reset the editing mode
  } else  {
    // If it's a new task, create a new li element and add it to the list
    const li = document.createElement("li");
    const taskText = document.createElement("span"); // Wrap the task text in a span
    taskText.textContent = inputTxt.value;
    li.appendChild(taskText);
    ulList.appendChild(li);

    // Create and append the Edit button
    li.appendChild(createEditButton());

    // Create and append the Delete button
    li.appendChild(createDeleteButton());
  }

  // Clear the input field after adding or editing a task
  inputTxt.value = "";

});

// Function to create the Edit button
function createEditButton() {
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", (event) => {
    // Get the li element of the task being edited
    currentEditLi = event.target.parentElement;

    // Place the task's text into the input field
    inputTxt.value = currentEditLi.firstChild.textContent; // Get text from span

    // Remove the old Edit and Delete buttons before adding new ones
    currentEditLi.querySelector("button").disabled = true;
    const oldEditBtn = currentEditLi.querySelector("button");
    const oldDelBtn = currentEditLi.querySelectorAll("button")[1];
    oldEditBtn.remove(); // Remove old Edit button
    oldDelBtn.remove(); // Remove old Delete button
  });
  return editBtn;
}

// Function to create the Delete button
function createDeleteButton() {
  const delbtn = document.createElement("button");
  delbtn.textContent = "Delete";
  delbtn.addEventListener("click", (event) => {
    const li = event.target.parentElement;
    ulList.removeChild(li); // Remove the task
  });
  return delbtn;
}
