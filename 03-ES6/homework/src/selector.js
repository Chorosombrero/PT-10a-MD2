var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) resultSet.push(startEl);

  for (const child of startEl.children) {
    resultSet = [...resultSet, ...traverseDomAndCollectElements(matchFunc, child)]
  }

  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  if (selector[0] === "#") return "id";
  if (selector[0] === ".") return "class";
  if (selector.includes(".")) return "tag.class";
  return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = (selec) => `#${selec.id}` === selector;
  } else if (selectorType === "class") {
    matchFunction = (selec) => selec.classList.contains(selector.slice(1));
  } else if (selectorType === "tag.class") {
    matchFunction = (selec) => {

     /* selec.tagName.toLowerCase() === selector.split[0] && selec.classList.contains(selector.split(".")[1])*/
      const [tag, className] = selector.split(".");
      return (
        selec.classList.contains(className) &&
        selec.tagName.toLowerCase() === tag.toLowerCase()
      );
    };
    
  } else if (selectorType === "tag") {
    matchFunction = (selec) => selec.tagName.toLowerCase() === selector;
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
