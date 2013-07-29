describe("Todo", function() {

  it("should be duplicated", function() {
    var newTodoItem = Object.create(todoItem);
    expect(todoItem).toEqual(newTodoItem);
  });

});
