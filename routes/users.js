var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
router.get('/hello', (req, res, next) => {
    res.send("Fuck");
})

module.exports = router;
