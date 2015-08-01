toDoTaskList.controller('ToDoListController', [function() {

  var self = this;

  self.toDoList = [];

  self.addToDo = function() {
    if(!self.newToDo || self.newToDo === '') {
      return;
    }
    self.toDoList.push( {task: self.newToDo, status: 'active'} );
    self.newToDo = '';
  };



}]);
