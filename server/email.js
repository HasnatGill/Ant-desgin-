const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");


// send mail
router.post("/home",  (req, res) => {
    const { email } = req.body;
    try {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user:'hasnatmajid01@gmail.com',
                pass: 'Gill338&.'
            }
        });

        const mailOptions = {
            from:'hasnatmajid01@gmail.com',
            to: email,
            subject: "Sending Email With React And Nodejs",
            html: '<h1>Congratulation</h1> <h1> You successfully sent Email </h2>'
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error" + error)
            } else {
                console.log("Email sent:" + info.response);
                res.status(201).json({status:201,info})
            }
        })

    } catch (error) {
        console.log("Error" + error);
        res.status(401).json({status:401,error})
    }
});


module.exports = router;