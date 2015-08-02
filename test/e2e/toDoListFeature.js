describe('To Do App', function() {

  var taskInput = element(by.model('toDoCtrl.newToDo'));
  var addButton = element(by.className('btn'));

  beforeEach(function() {
    browser.get('http://localhost:3000');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To Do List');
  });

  describe('When a task is added', function () {

    beforeEach(function () {
      taskInput.sendKeys('Walk Basil');
      addButton.click();
    });

    it('list item contains task contents/text added in input field', function () {
      expect(element(by.id('todo')).getText()).toContain('Walk Basil active');
    });

    it('increments task count/number', function () {
      expect(element(by.id('todo-count')).getText()).toContain('1');
    });

    // TEST FOR TASKS BEING ACTIVE OR NOT? HOW...

  });


});
