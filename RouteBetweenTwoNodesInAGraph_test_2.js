/* eslint-disable func-names, no-restricted-syntax */
const Node = function (value, edges) {
  nodes[value] = {
    value,
    edges,
  };
  return nodes[value];
};

// an object containing all the nodes in the tree
var nodes = {};

const getRoute = function (a, b) {
  let isTrue = false;

  const findRoute = (() => {
    const checkedRoutes = [];
    return (r, rtc) => {
      if (checkedRoutes.indexOf(r.value) !== -1) return;
      checkedRoutes.push(r.value);
      if (r.edges) {
        for (const node of r.edges) {
          if (node.value === rtc.value) { isTrue = true; return; }
          findRoute(node, rtc);
        }
      }
    };
  })();

  findRoute(a, b);
  return isTrue;
};
