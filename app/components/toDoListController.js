toDoTaskList.controller('ToDoListController', [function() {

  var self = this;

  self.toDoList = [];

  self.addToDo = function() {
    if(!self.newToDo || self.newToDo === '') {
      return;
    }
    self.toDoList.push( {task: self.newToDo, status: 'active'} );
    // console.log(self.newToDo);
    // console.log(self.toDoList);
    self.newToDo = '';
  };



}]);
