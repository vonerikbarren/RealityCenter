var openingCode = "Good evening Sir"
var divider = "-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=";
var openingMessage = "Sir here is the code you wish to see: "

const tree = {
  name: 'John',
  children: [
    {
      name: 'Jim',
      children: []
    },
    {
      name: 'Zoe',
      children: [
        { name: 'Kyle', children: [] },
        { name: 'Sophia', children: [] }
      ]
    }
  ],
  name: 'Jill',
  children: [
    {
      name: 'Joe',
      children: []
    },
    {
      name: 'Mack',
      children: [
        { name: 'Bill', children: [] },
        { name: 'Laura', children: [] },
        { name: 'Phil', children: [] },
      ]
    }
  ]
}

var johnsChildren = tree.children[1].children

console.log(johnsChildren);

function printChildrenRecursive(t) {
  if (t.children.length === 0) {
    return
  }
  t.children.forEach(children => {
    console.log(children.name)
    printChildrenRecursive(children);
  })
}

console.log(printChildrenRecursive(tree));