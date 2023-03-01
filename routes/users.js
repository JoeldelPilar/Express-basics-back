var express = require('express');
var router = express.Router();

let users = [
  { id: 1, name: 'John', lastName: 'Doe' },
  { id: 2, name: 'Jane', lastName: 'Doe' },
  { id: 3, name: 'Adam', lastName: 'Row' },
  { id: 4, name: 'Anne', lastName: 'Now' },
  { id: 5, name: 'Bert', lastName: 'Low' },
  { id: 6, name: 'Alice', lastName: 'Sow' },
];


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json(users);
});

module.exports = router;
