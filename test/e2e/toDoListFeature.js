describe('To Do App', function() {

  var taskInput = element(by.model('toDoCtrl.newToDo'));
  var addButton = element(by.id('add-btn'));
  var completeTask = element(by.model('todo.completed'));
  var removeAllCompleteBtn = element(by.id('rm-done-btn'));
  var deleteTaskBtn= element(by.id('delete-btn'));

  beforeEach(function() {
    browser.get('http://localhost:3000');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To Do List');
  });

  describe('when a task is added', function () {

    beforeEach(function () {
      taskInput.sendKeys('Walk Basil');
      addButton.click();
    });

    it('list item contains task contents/text added in input field', function () {
      expect(element(by.id('tasks')).getText()).toContain('Walk Basil');
    });

    it('increments task count/number', function () {
      expect(element(by.id('todo-count')).getText()).toContain('1');
    });

  });

  describe('completing tasks', function () {

    beforeEach(function () {
      taskInput.sendKeys('Walk Basil');
      addButton.click();
    });

    it('checkbox should be empty when task is created', function () {
      expect(element(by.id('status')).getAttribute('class')).toEqual('completed-false');
    });

    it('should mark task as complete if checkbox is selected', function () {
      completeTask.click();     expect(element(by.id('status')).getAttribute('class')).toEqual('completed-true');
    });

    it('selecting the remove completed task button removes the completed tasks', function () {
      completeTask.click();
      removeAllCompleteBtn.click();
      expect(element(by.id('todo-count')).getText()).toContain('0');
    });

  });

  describe('deleting tasks', function () {

    beforeEach(function () {
      taskInput.sendKeys('Walk Basil');
      addButton.click();
    });

    it('can delete individual tasks', function () {
      deleteTaskBtn.click();
      expect(element(by.id('todo-count')).getText()).toContain('0');
    });

  });


});
