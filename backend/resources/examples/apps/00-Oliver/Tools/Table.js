// npm install cli-table

const Table = require('cli-table');

const table = new Table({
  chars: {
    'top': '═', 'top-mid': '╤', 'top-left': '╔', 'top-right': '╗'
    , 'bottom': '═', 'bottom-mid': '╧', 'bottom-left': '╚', 'bottom-right': '╝'
    , 'left': '║', 'left-mid': '╟', 'mid': '─', 'mid-mid': '┼'
    , 'right': '║', 'right-mid': '╢', 'middle': '│'
  }
});

table.push(
  ['foo', 'bar', 'baz', 'bird'],
  ['frob', 'bar', 'quuz', 'sign']
);

console.log(table.toString());