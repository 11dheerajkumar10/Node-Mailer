// const nodemailer = require("nodemailer");

// const sendmail = async(req,res)=>{
//   let testaccount =  await nodemailer.createTestAccount()
// }

//   // Create a SMTP transporter object
//   const transporter = nodemailer.createTransport({
//   service:"gmail",
      
//       auth: {
//           user: 'shubhamishra114@gmail.com',
//           pass: 'hnnltclfvahnjodz'
//       }
//   });

//   // Message object
//   let message = {
//       from: 'shubhamishra114@gmail.com',
//       to: '11dheerajkumar10@gmail.com',
//       subject: 'Ha meri jan',
//       text: 'aaj padhenga to kal kamayenga mere bhai',
//       html: '<p><b>Hello</b> to myself!</p>'
//   };

//   transporter.sendMail(message, (err, info) => {
//       if (err) {
//           console.log('Error occurred. ' + err.message);
//           return process.exit(1);
//       }

//       console.log('Message sent: %s', info.messageId);
//       // Preview only available when sending through an Ethereal account
//       console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
//   });



// module.exports = sendmail