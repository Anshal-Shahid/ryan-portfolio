const nodemailer = require('nodemailer');


const form = async(req, res) => {
    const { name, email,message } = req.body;
console.log(`email:${email}`);

    // Create a transporter object using SMTP
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port:587,
        auth: {
            user: 'anshalshahid2@gmail.com',
            pass:'jjamzshipawqfygs'  // cr ben key
        }
    });
    

    // Email options
    const info = await transporter.sendMail({
        from: `"${name} (${email})" <anshalshahid2@gmail.com>`,

        to: "anshalshahid2@gmail.com", // list of receivers
        subject: `${name}`, // Subject line
        text: `${message}`, // plain text body
        html: `<b>Subject: Mail from website</b> 
        <br><br> ${message}`, // html body
        replyTo: email,
      });
      console.log("Message sent: %s", info.messageId);
      res.redirect("/")
};

module.exports={form}