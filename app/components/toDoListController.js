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

  self.taskCounter = function () {
    return self.toDoList.length;
  };

  // self.deleteTask = function() {
  //   for (i = 0; i < self.toDoList.length; i++ ) {
  //     item = self.toDoList[i];
  //     if (item.task == key) {
  //       self.list.splice(i, 1);
  //     }
  //   }
  //   self.updateTotal();
  // };

  self.deleteTask = function(indexOf) {
    self.toDoList.splice(indexOf, 1);
  };



}]);
