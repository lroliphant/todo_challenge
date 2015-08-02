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

    it('list item appears as active', function () {
      expect(element(by.id('todo')).getText()).toContain('Walk Basil');
    });

// TEST FOR TASKS BEING ACTIVE OR NOT? HOW...
    // it('the total number of tasks is displayed', function () {
    //   expect(element(by.id('total')).getText()).toEqual('1 Tasks Active');
    // });

    });


  });
