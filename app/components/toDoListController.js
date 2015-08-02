toDoTaskList.controller('ToDoListController', [function() {

  var self = this;

  self.toDoList = [];

  self.addToDo = function() {
    if(!self.newToDo || self.newToDo === '') {
      return;
    }
    self.toDoList.push( {'task': self.newToDo, 'done': false} );
    // console.log(self.newToDo.task);
    // console.log(self.toDoList);
    self.newToDo = '';
  };

  // self.isComplete = function() {
  //   if(!self.newToDo || self.newToDo === '') {
  //     return;
  //   }
  //   self.toDoList.push( {'task': self.newToDo, 'status': 'active'} );
  //   // console.log(self.newToDo);
  //   // console.log(self.toDoList);
  //   self.newToDo = '';
  // };


}]);
