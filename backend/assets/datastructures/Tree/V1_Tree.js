// ----------------------------------------
// Go to the link(s) below for more information.
// ----------------------------------------
// https://medium.com/@_jmoller/javascript-data-structures-trees-c961297e6482
// ----------------------------------------


class Tree {
  constructor(root) {
    this._root = root || null;
  }

  tree._traverse((node) => {
    // I have access to each and every node of the tree here and 	I can do whatever I want with them
    console.log(node);
  });

_traverse(callback) {
  const self = this;
  function goThrough(node) {
    callback(node);
    node.children.forEach((child) => {
      goThrough(child);
    });
  }
  goThrough(this._root, dash);
}


_addNode(value, parentValue) {
  const newNode = {
    value,
    children: []
  };

  if (this._root === null) {
    this._root = newNode;
    return;
  }

  this._traverse((node) => {
    if (node.value === parentValue) {
      node.children.push(newNode);
    }
  });
}

_removeNode(value) {
  this._traverse((node) => {
    node.children.forEach((childNode, index) => {
      if (childNode.value === value) {
        node.children.splice(index, 1);
      }
    });
  })
}

_search(value) {
  let returnNode = 'Not Found';
  this._traverse((node) => {
    if (node.value === value) {
      returnNode = node;
    }
  });
  return returnNode;
}

_displayLeafs(parentValue) {
  const parentNode = typeof parentValue === 'string' ? this._search(parentValue) : parentValue;
  let leafsRet = [];
  if (parentValue.children && !parentValue.children.length) {
    return parentValue;
  }

  parentNode.children.forEach((child) => {
    leafsRet.push(this._displayLeafs(child));
  });

  return leafsRet.flat();
}

}

class Node {
  constructor(value, children) {
    this.value = value;
    this.children = children;
  }
}


const tree = new Tree();

tree._addNode('Computers & Electronics');
tree._addNode('Notebooks', 'Computers & Electronics');
tree._addNode('Routers', 'Computers & Electronics');
tree._addNode('Desktop Computers', 'Computers & Electronics');

tree._addNode('Macbooks', 'Notebooks');
tree._addNode('Asus', 'Notebooks');

tree._addNode('Macbook Pro', 'Macbooks');
tree._addNode('Macbook Air', 'Macbooks');


tree._traverse((node) => {
  console.log(node.value);
});

console.log(tree._displayLeafs('Notebooks'));