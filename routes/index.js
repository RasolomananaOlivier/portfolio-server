var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');



/* GET home page. */
router.post('/', function (req, res, next) {

    const { sender, name, message } = req.body;
    const myMail = 'herimanitraolivierr@gmail.com';
    const passwd = 'tesvcvbbsrnsdbah';

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: myMail,
            pass: passwd
        }
    });

    const mailOptions = {
        from: sender,
        to: myMail,
        subject: 'Job opportunity from' + name,
        text: message
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log('hello' + err);
        } else {
            res.json(info);
        }
    })
});

module.exports = router;
