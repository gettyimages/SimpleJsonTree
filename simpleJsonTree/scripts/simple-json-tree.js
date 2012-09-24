$.fn.jsonTree = function (data) {
  return simpleJsonTree.render(data, this);
};

var simpleJsonTree = (function () {
  var createListItem = function () {
    return $("<li class='tree-list-item'></li>");
  };

  var createButton = function () {
    return $("<span class='button'></span>");
  };

  var createIcon = function (object) {
    if (Array.isArray(object.value)) {
      return $("<span class='icon array'></span>");
    }
    else if (typeof object.value === "object") {
      return $("<span class='icon object'></span>");
    } else {
      return $("<span class='icon property'></span>");
    }
  };

  var writeObjectNode = function (object, target, index) {
    var listItem = createListItem();

    if (object.value !== null) {
      listItem.addClass("tree-branch");
      listItem.addClass("tree-item-closed");
      listItem.append(createButton());
      listItem.append(createIcon(object));
      writeArrayElementIndex(listItem, index);
      listItem.append("<label>" + object.key + "</label>");
      render(object.value, listItem);
    } else {
      listItem.addClass("tree-leaf");
      listItem.append(createIcon(object));
      listItem.append("<label class='tree-leaf-key'>" + object.key + "<span> : </span></label>");
      listItem.append("<span class='tree-leaf-value'>null</span>");
    }

    target.append(listItem);
  };

  var writeArrayNodes = function (arrayKvp, target, index) {
    var i;
    var listItem = createListItem();

    if (arrayKvp.value.length > 0) {
      listItem.append(createButton());
      listItem.addClass("tree-branch");
      listItem.addClass("tree-item-closed");
    } else {
      listItem.addClass("tree-leaf");
    }

    listItem.append(createIcon(arrayKvp));
    writeArrayElementIndex(listItem, index);
    listItem.append("<label>" + arrayKvp.key + " (" + arrayKvp.value.length + " items)</label>");
    target.append(listItem);

    for (i = 0; i < arrayKvp.value.length; i += 1) {
      if (typeof arrayKvp.value[i] === "object") {
        var arrayMemberElement = createListItem();
        var button = createButton();
        arrayMemberElement.append(button);
        arrayMemberElement.append(createIcon({ key: "", value: arrayKvp.value[i] }));
        arrayMemberElement.append($("<label>[" + i + "]</label>"));
        arrayMemberElement.addClass("tree-branch");
        arrayMemberElement.addClass("tree-item-closed");

        var arrayMemberContainer = $("<ul class='tree-list'></ul>");
        arrayMemberContainer.append(arrayMemberElement);
        listItem.append(arrayMemberContainer);
        render(arrayKvp.value[i], arrayMemberElement);
      } else {
        render(arrayKvp.value[i], listItem, i);
      }
    }
  };

  var writeLeafNode = function (kvpObject, target, index) {
    var listItem = createListItem();
    listItem.addClass("tree-leaf");
    listItem.append(createIcon(kvpObject));
    writeArrayElementIndex(listItem, index);
    listItem.append("<label class='tree-leaf-key'>" + kvpObject.key + "<span> : </span></label><span class='tree-leaf-value'>" + formatValue(kvpObject.value) + "</span>");
    target.append(listItem);
  };

  var writeArrayElementIndex = function (target, index) {
    if (index !== undefined && index !== null) {
      target.append($("<label>[" + index + "]</label>"));
    }
  };

  var formatValue = function (primitive) {
    var date = "";
    if (typeof primitive !== "string") {
      return primitive;
    }

    if (primitive.indexOf("/Date(") > -1) {
      date = " (" + Date.fromJson(primitive) + ")";
    }

    return '"' + primitive + '"' + date;
  };

  var readProperties = function (object) {
    var properties = [];
    var key;

    if (typeof object !== "object") {
      properties.push({ key: "", value: object });
    }
    else if (Array.isArray(object)) {
      properties.push({ key: "", value: object });
    }
    else {
      for (key in object) {
        value = object[key];
        properties.push({ key: key, value: value });
      }
    }
    return properties;
  };

  var render = function (data, target, index) {
    var list, properties, i;
    list = $("<ul class='tree-list'></ul>");
    target.append(list);
    properties = readProperties(data);

    for (i = 0; i < properties.length; i += 1) {
      handleType(properties[i], list, index);
    }
    return target;
  };

  var handleType = function (object, target, index) {
    if (Array.isArray(object.value)) {
      writeArrayNodes(object, target, index);
    }
    else if (typeof object.value === "object") {
      writeObjectNode(object, target, index);
    } else {
      writeLeafNode(object, target, index);
    }
  };

  var setTreeBranchClass = function (branchItem) {
    if (branchItem.hasClass("tree-item-closed")) {
      branchItem.removeClass("tree-item-closed");
      branchItem.addClass("tree-item-open");
    } else {
      branchItem.removeClass("tree-item-open");
      branchItem.addClass("tree-item-closed");
    }
  };

  var toggle = function (e) {
    e.stopPropagation();
    $(e.target).closest("li.tree-branch").children("ul").toggle();
    setTreeBranchClass($(e.target).closest("li.tree-branch"));
  };

  var init = function () {
    $(document).undelegate(".tree-branch .button", "click", toggle);
    $(document).delegate(".tree-branch .button", "click", toggle);
  };

  var clear = function (target) {
    target.html("");
  };

  return {
    render: function (data, target) {
      clear(target);
      init();
      return render(data, target);
    }
  };
})();

