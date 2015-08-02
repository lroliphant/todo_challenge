toDoTaskList.controller('ToDoListController', [function() {

  var self = this;
  self.toDoList = [];

  self.addToDo = function() {
    if(!self.newToDo || self.newToDo === '') {
      return;
    }
    self.toDoList.push( {'task': self.newToDo, 'done': false} );
    self.newToDo = '';
  };

  self.taskCounter = function () {
    return self.toDoList.length;
  };

  self.deleteTask = function(item) {
    var index = self.toDoList.indexOf(item);
    self.toDoList.splice(index, 1);
  };

  self.removeDoneTasks = function() {
    self.toDoList = _.filter(self.toDoList, function(todo){
      return !todo.done;
    });
  };

}]);
