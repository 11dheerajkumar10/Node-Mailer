const nodemailer = require("nodemailer")
const sendMail = async (req,res)=>{
    let testAccount = await nodemailer.createTestAccount();
}
    let transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
    user: "11dheerajkumar10@gmail.com",
    pass: "cftnapkgibkizyty", 
    }
    })

    let mail = {
        from: "11dheerajkumar10@gmail.com",
        to: "dheerajkumarphotography@gmail.com",
        subject: "Hello from Node Mailer",
        text: "Hello Brother from Node Mailer"
    }

transporter.sendMail(mail, (error, info)=>{
    if (error){
        console.log(`Error ${err.message}`)
        return process.exit(1)
    }
    else{
        console.log("Message has been sent")
    }
})







module.exports = sendMail