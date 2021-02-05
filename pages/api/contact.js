import nodemailer from "nodemailer";

// TODO: nodemailer

const emailPass = "yourPassword";

const transporter = nodemailer.createTransport({
  host: "smtp.ionos.de",
  port: 25,
  auth: {
    user: "yourUser@example.com",
    pass: emailPass
  }
});

const mailer = ({ senderMail, name, text, recipientMail }) => {
  const from =
    name && senderMail ? `${name} <${senderMail}>` : `${name || senderMail}`;
  const message = {
    from,
    to: `${recipientMail}`,
    subject: `New message from ${from}`,
    text,
    replyTo: from
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};

export default async (req, res) => {
  const { senderMail, fullName, message, recipientMail } = req.body;

  // Check if fields are all filled
  if (!senderMail || !fullName || !message || !recipientMail) {
    res.status(403).send("Forbidden. Not all necessary fields are filled!");
    return;
  }

  const mailerRes = await mailer({
    senderMail,
    name: fullName,
    text: message,
    recipientMail
  });
  res.send(mailerRes);
};
