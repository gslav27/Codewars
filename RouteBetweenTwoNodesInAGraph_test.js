/* eslint-disable func-names, no-restricted-syntax */
const Node = function (value, edges) {
  nodes[value] = {
    value,
    edges,
  };
  return nodes[value];
};

var nodes = {};

const checkRoute = (x, y) => {
  let isTrue = false;
  const check = (() => {
    const checkedRoutes = [];
    return (r, rtc) => {
      if (checkedRoutes.indexOf(r.value) !== -1) return;
      checkedRoutes.push(r.value);
      if (r.edges) {
        for (const node of r.edges) {
          if (node.value === rtc.value) { isTrue = true; return; }
          check(node, rtc);
        }
      }
    };
  })();
  check(x, y);
  return isTrue;
};

const getRoute = function (a, b) {
  const ab = checkRoute(a, b);
  const ba = checkRoute(b, a);
  console.log('checkRoute(a, b) =', ab, 'checkRoute(b, a) =', ba);
  return ab;
};
