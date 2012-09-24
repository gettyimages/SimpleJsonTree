describe("when using simple json tree js : simple-json-tree.js", function () {
  var targetElement;

  beforeEach(function () {
    if (targetElement === undefined) {
      targetElement = $("<div id='target-element'></div>");
      targetElement.jsonTree(sampleData);
    }
  });

  it("should render the tree control in the target element", function () {
    expect(targetElement.html().length).toBeGreaterThan(0);
  });

  // ===== Test rendering of objects that are NULL =====
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

  // ===== Test rendering of objects that are not NULL =====
  it("should render non-null objects with correct icon", function () {
    expect(targetElement.find("li.tree-branch > label:contains('NonNullObject')").closest("li").find("span.object").length).toEqual(1);
  });

  it("should render non-null objects as branch nodes", function () {
    expect(targetElement.find("li.tree-branch > label:contains('NonNullObject')").closest("li").find("span.object").length).toEqual(1);
  });

  it("should render non-null objects with expand-collapse buttons", function () {
    expect(targetElement.find("li.tree-branch > label:contains('NonNullObject')").closest("li").find("span.button").length).toEqual(1);
  });

  // ===== Test rendering of properties =====
  it("should render properties with correct icon", function () {
    expect(targetElement.find("li:contains('Station') > span.object").closest("li").find("li:contains('1814+Seattle') span.property").length).toEqual(1);
  });

  it("should render properties as leaf nodes", function () {
    expect(targetElement.find("li.tree-branch:contains('Station') > span.object").closest("li").find("li.tree-leaf:contains('1814+Seattle')").length).toEqual(1);
  });

  it("should not render properties with expand-collapse buttons", function () {
    expect(targetElement.find("li.tree-branch:contains('Station') > span.object").closest("li").find("li.tree-leaf:contains('1814+Seattle') span.button").length).toEqual(0);
  });

  // ===== Test rendering of arrays =====
  it("should render arrays with correct icon", function () {
    expect(targetElement.find("li:contains('Predictions (19 items)') > span.array").length).toEqual(1);
    expect(targetElement.find("li:contains('ChartData (170 items)') > span.array").length).toEqual(1);
  });

  it("should render populated arrays with expand-collapse buttons", function () {
    expect(targetElement.find("li:contains('Predictions (19 items)') > span.button").length).toEqual(1);
    expect(targetElement.find("li:contains('ChartData (170 items)') > span.button").length).toEqual(1);
  });

  it("should render array elements with correct indexes", function () {
    var arrayElements = targetElement.find("li:contains('Predictions (19 items)') > ul");
    expect($(arrayElements[0]).text().indexOf("[0]")).toBeGreaterThan(-1);
    expect($(arrayElements[1]).text().indexOf("[1]")).toBeGreaterThan(-1);
    expect($(arrayElements[2]).text().indexOf("[2]")).toBeGreaterThan(-1);
  });

  it("should render array elements that are primitives with property icons", function () {
    // each of the 19 predictions contains 5 properties: 5 * 19 = 95
    expect(targetElement.find("li:contains('Predictions (19 items)') > ul > li > ul > li > span.property").length).toEqual(95);
    // each of the 170 chartdata elements contains 2 properties: 2 * 170 = 340
    expect(targetElement.find("li:contains('ChartData (170 items)') > ul > li > ul > li > span.property").length).toEqual(340);
  });

  it("should render array elements with expand-collapse buttons", function () {
    expect(targetElement.find("li:contains('Predictions (19 items)') > ul > li > span.button").length).toEqual(19);
    expect(targetElement.find("li:contains('ChartData (170 items)') > ul > li > span.button").length).toEqual(170);
  });

  // ===== Test rendering of arrays of arrays =====
  it("should render arrays of arrays", function () {
    expect(targetElement.find("li span[class='icon array']").closest("li").find("li span[class='icon array']").length).toBeGreaterThan(0);
  });

  // ===== Test rendering of arrays with primitive member types =====
  it("should render simple arrays of numbers", function () {
    expect(targetElement.find("li:contains('SimpleNumericArray') span.tree-leaf-value").length).toEqual(3);
    expect(targetElement.find("li:contains('SimpleNumericArray') span.tree-leaf-value:contains('0')").length).toEqual(1);
    expect(targetElement.find("li:contains('SimpleNumericArray') span.tree-leaf-value:contains('1')").length).toEqual(1);
    expect(targetElement.find("li:contains('SimpleNumericArray') span.tree-leaf-value:contains('2')").length).toEqual(1);
  });

  it("should render simple arrays of strings", function () {
    expect(targetElement.find("li:contains('SimpleStringArray') span.tree-leaf-value").length).toEqual(3);
    expect(targetElement.find("li:contains('SimpleStringArray') span.tree-leaf-value:contains('\"0\"')").length).toEqual(1);
    expect(targetElement.find("li:contains('SimpleStringArray') span.tree-leaf-value:contains('\"1\"')").length).toEqual(1);
    expect(targetElement.find("li:contains('SimpleStringArray') span.tree-leaf-value:contains('\"2\"')").length).toEqual(1);
  });

  it("should render simple arrays of booleans", function () {
    expect(targetElement.find("li:contains('SimpleBooleanArray') span.tree-leaf-value").length).toEqual(3);
    expect(targetElement.find("li:contains('SimpleBooleanArray') span.tree-leaf-value:contains('true')").length).toEqual(2);
    expect(targetElement.find("li:contains('SimpleBooleanArray') span.tree-leaf-value:contains('false')").length).toEqual(1);
  });

  // ===== Test rendering of complex arrays of arrays with mixed member types =====
  it("should render complex arrays of arrays with mixed member types", function () {
    expect(targetElement.find("li:contains('(5 items)') > ul > li:contains('Lorem'):eq(0) > span.array").length).toEqual(1);
    expect(targetElement.find("li:contains('(5 items)') > ul > li:contains('NonNullObject') > span.object").length).toEqual(1);
    expect(targetElement.find("li:contains('(5 items)') > ul > li:contains('[4]') > span.property").length).toEqual(1);
  });
});