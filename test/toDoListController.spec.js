describe('ToDoListController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initialises with an empty to do input field', function() {
    expect(ctrl.toDo).toBeUndefined();
  });

  describe('is initialised with an empty list', function () {
    it('so has no to dos yet', function() {
      expect(ctrl.toDoList.length).toEqual(0);
    });
  });

  var fakeTask = [
    {
      task: 'Walk Basil',
      status: 'active'
    }
  ];

  describe('can add and display to dos', function () {

    beforeEach(function() {
      ctrl.newToDo = 'Walk Basil';
      ctrl.addToDo();
    });

    it('displays current/active to dos in list', function() {
      expect(ctrl.toDoList).toEqual(fakeTask);
    });

    it('and length of the to do list increases by 1', function () {
      expect(ctrl.toDoList.length).toEqual(1);
    });

    it('should not add empty to dos to list', function () {
      ctrl.newToDo = '';
      ctrl.addToDo();
      expect(ctrl.toDoList.length).toEqual(1);
    });

  });


});
