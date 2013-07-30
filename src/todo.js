var todoApp = {
  createTask: function(input) {
    var newTodoItem = Object.create(todoItem);
    newTodoItem.setTaskText(input);
    this.appendTask(newTodoItem);
  },
  appendTask: function(newTodoItem) {
    if (newTodoItem.taskName !== "") {
      newTodoItem.render();
    }
  }
};

var todoItem = {
  taskName: "",
  setTaskText: function(input) {
    this.taskName += input;
  },
  render: function() {
    var liTag = document.createElement("li");
    var taskText = document.createElement("div");
    taskText.innerHTML = this.taskName;
    taskText.className = "task-text";
    var taskButtons = document.createElement("div");
    taskButtons.className = "task-buttons";
    document.getElementById("todo-items").appendChild(liTag);
    liTag.appendChild(taskText);
    taskText.appendChild(taskButtons);
  }
};

if (typeof Object.create !== 'function') {
  Object.create = function(o) {
    function F() {}
    F.prototype = o;
    return new F();
  };
}

// window.onload = function() {
document.getElementById("add-item").onclick = function(event) {
  var task = document.getElementById("new-task-field").value;
  todoApp.createTask(task);
};
// };