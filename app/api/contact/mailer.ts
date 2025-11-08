import nodemailer from 'nodemailer';

const myGmailUser = process.env.GMAIL_USER;
const myGmailPass = process.env.GMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: myGmailUser,
		pass: myGmailPass,
	},
});

const mailer = ({
	senderMail,
	name,
	text,
	recipientMail,
}: {
	senderMail: string;
	name: string;
	text: string;
	recipientMail: string;
}) => {
	const from = name && senderMail ? `${name} <${senderMail}>` : `${name || senderMail}`;
	const message = {
		from,
		to: `${recipientMail}`,
		subject: `Portfolio contact form submitted by ${from}`,
		text,
		replyTo: from,
	};

	return new Promise((resolve, reject) => {
		transporter.sendMail(message, (error, info) => (error ? reject(error) : resolve(info)));
	});
};

export default mailer;
