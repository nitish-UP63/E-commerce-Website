const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({

      host:process.env.SMPT_HOST,
      port:process.env.SMPT_PORT,  // Host and port are not mandatory but, if their is some issue in sending mail, then we can mention them, gmail , yahoo and others have their seperate host and port 

    service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  const mailOption = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOption);
};

module.exports = sendEmail;
