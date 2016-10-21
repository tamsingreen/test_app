var express = require('express');
var router = express.Router();

const users = [{
    userid: 123,
    first: 'Tamsin',
    last: 'Green'
  },
  {
    userid: 222,
    first: 'Bob',
    last: 'The Builder'
  },
  {
    userid: 555,
    first: 'Charlie',
    last: 'Brown'
  }
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

router.get('/:id', function(req, res, next) {
  const idParam = req.params.id;
  console.log(idParam);

  const user = users.filter(function (userObj) {
    console.log(idParam == userObj.userid);
    return (idParam == userObj.userid);
  });

  if (user.length > 0) {
    res.send(user);
  } else {
    res.send('User not found');
  }

});

module.exports = router;
