toDoTaskList.controller('ToDoListController', [function() {

  var self = this;
  self.toDoList = [];

  self.addToDo = function() {
    if(!self.newToDo || self.newToDo === '') {
      return;
    }
    self.toDoList.push( {'task': self.newToDo, 'completed': false} );
    self.newToDo = '';
  };

  self.taskCounter = function () {
    return self.toDoList.length;
  };

  self.deleteTask = function(item) {
    var index = self.toDoList.indexOf(item);
    self.toDoList.splice(index, 1);
  };

// convert to a function using filter without underscore js library
  self.removeCompleteTasks = function() {
    self.toDoList = _.filter(self.toDoList, function(todo){
      return !todo.completed;
    });
  };

}]);
