describe("when using simple json tree js : simple-json-tree.js", function () {
  var targetElement;

  beforeEach(function () {
    targetElement = $("<div id='target-element'></div>");
    targetElement.jsonTree(sampleData);
  });

  it("should render the tree control in the target element", function () {
    expect(targetElement.html().length).toBeGreaterThan(0);
  });

  it("should render null objects with correct icon", function () {
    expect(targetElement.find("li:contains('HighLowValues') > span.object").length).toEqual(1);
    expect(targetElement.find("li:contains('TideGraph') > span.object").length).toEqual(1);
  });

  it("should render null objects as leaf nodes", function () {
    expect(targetElement.find("li.tree-leaf:contains('HighLowValues')").length).toEqual(1);
  });

  it("should render null objects with null text as value", function () {
    expect(targetElement.find("li.tree-leaf:contains('HighLowValues') > span.tree-leaf-value").text()).toEqual("null");
  });

  it("should not render null objects with expand-collapse buttons", function () {
    expect(targetElement.find("li.tree-leaf:contains('HighLowValues') > span.button").length).toEqual(0);
  });

  it("should render non-null objects with correct icon", function () {
    expect(targetElement.find("li:contains('Station') > span.object").length).toEqual(1);
  });

  it("should render non-null objects as branch nodes", function () {
    expect(targetElement.find("li.tree-branch:contains('Station') > span.object").length).toEqual(1);
  });

  it("should render non-null objects with expand-collapse buttons", function () {
    expect(targetElement.find("li.tree-branch:contains('Station') > span.object").closest("li").find("span.button").length).toEqual(1);
  });

  it("should render properties with correct icon", function () {
    expect(targetElement.find("li.tree-branch:contains('Station') > span.object").closest("li").find("li:contains('1814+Seattle') span.property").length).toEqual(1);
  });

  it("should render properties as leaf nodes", function () {
    expect(targetElement.find("li.tree-branch:contains('Station') > span.object").closest("li").find("li.tree-leaf:contains('1814+Seattle')").length).toEqual(1);
  });

  it("should not render properties with expand-collapse buttons", function () {
    expect(targetElement.find("li.tree-branch:contains('Station') > span.object").closest("li").find("li.tree-leaf:contains('1814+Seattle') span.button").length).toEqual(0);
  });

  it("should render arrays with correct icon", function () {
    expect(targetElement.find("li:contains('Predictions (19)') > span.array").length).toEqual(1);
    expect(targetElement.find("li:contains('ChartData (170)') > span.array").length).toEqual(1);
  });

  it("should render populated arrays with expand-collapse buttons", function () {
    expect(targetElement.find("li:contains('Predictions (19)') > span.button").length).toEqual(1);
    expect(targetElement.find("li:contains('ChartData (170)') > span.button").length).toEqual(1);
  });

  it("should render array elements with correct indexes", function () {
    var arrayElements = targetElement.find("li:contains('Predictions (19)') > ul");
    expect($(arrayElements[0]).text().indexOf("[0]")).toBeGreaterThan(-1);
    expect($(arrayElements[1]).text().indexOf("[1]")).toBeGreaterThan(-1);
    expect($(arrayElements[2]).text().indexOf("[2]")).toBeGreaterThan(-1);
  });

  it("should not render array elements with icons", function () {
    expect(targetElement.find("li:contains('Predictions (19)') > ul > li > span.icon").length).toEqual(0);
    expect(targetElement.find("li:contains('ChartData (170)') > ul > li > span.icon").length).toEqual(0);
  });

  it("should render array elements with expand-collapse buttons", function () {
    expect(targetElement.find("li:contains('Predictions (19)') > ul > li > span.button").length).toEqual(19);
    expect(targetElement.find("li:contains('ChartData (170)') > ul > li > span.button").length).toEqual(170);
  });

  it("should render simple arrays of numbers", function () {
    expect(targetElement.find("li label.tree-leaf-key:contains('number')").length).toEqual(3);
  });

  it("should render simple arrays of strings", function () {
    expect(targetElement.find("li label.tree-leaf-key:contains('string')").length).toEqual(3);
  });

  it("should render simple arrays of booleans", function () {
    expect(targetElement.find("li label.tree-leaf-key:contains('boolean')").length).toEqual(3);
  });
});