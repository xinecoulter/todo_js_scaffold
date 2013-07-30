describe("Object", function() {
  it("should have a create method to duplicate an object", function() {
    var newTodoItem = Object.create(todoItem);
    expect(todoItem).toEqual(newTodoItem);
  });
});

describe("todoItem", function() {
  it("should have a method completedButton that returns a button", function() {
    expect(todoItem.completedButton().nodeName).toBe("BUTTON");
  });

  it("should have a method deleteButton that returns a button", function() {
    expect(todoItem.deleteButton().nodeName).toBe("BUTTON");
  });
});