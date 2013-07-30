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
    taskButtons.appendChild(this.completedButton());
    taskButtons.appendChild(this.deleteButton());
    document.getElementById("todo-items").appendChild(liTag);
    liTag.appendChild(taskText);
    taskText.appendChild(taskButtons);

    return liTag;
  },
  completedButton: function() {
    var completeButton = document.createElement("button");
    completeButton.className = "complete-button";
    completeButton.innerHTML = "completed";
    var that = this;
    completeButton.onclick = function(event) {
      var button = event.target;
      var associatedTask = document.getElementById("todo-items").removeChild(that.getTask(event));
      completeButton.parentNode.removeChild(completeButton);
      document.getElementById("completed-items").appendChild(associatedTask);
    };
    return completeButton;
  },
  deleteButton: function() {
    var deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.innerHTML = "delete";
    var that = this;
    deleteButton.onclick = function(event) {
      var button = event.target;
      var associatedTask = that.getTask(event);
      associatedTask.parentNode.removeChild(associatedTask);
    };
    return deleteButton;
  },
  clearButton: function() {
    var clearButton = document.createElement("button");
    clearButton.className = "clear-button";
    clearButton.innerHTML = "clear";
  },
  getTask: function(event) {
    return event.target.parentNode.parentNode.parentNode;
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