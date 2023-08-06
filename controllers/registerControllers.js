const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

let transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_MAIL, // generated ethereal user
    pass: process.env.SMTP_PASSWORD, // generated ethereal password
  },
});



const inventry = expressAsyncHandler(async (req, res) => {
  const {table} = req.body;

  // console.log(table)
  let EmailTamplate = `<div class='table-emails'>${table}</div>`;
  

  var mailOptions = {
    from: process.env.SMTP_MAIL,
    to: "mohhomadfarman@gmail.com",
    subject: "Check Inventry List",
    text: `Here is The inventry List`,
    html: EmailTamplate
  
  };

   

  try{
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent successfully!");
        
      }
    });
    res.send({status:"sent",isLoading: false})
  }catch{
    res.send("Email is not Sent")
  }

});

module.exports = { inventry };
