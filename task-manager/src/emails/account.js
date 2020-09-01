const mailgun = require('mailgun-js');

const mailgunDomain = 'sandbox381521aaef9045bcae4be0332e3159a1.mailgun.org';

const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: mailgunDomain });

const sendWelcomeEmail = (email, name) => {
  mg.messages().send({
    from: 'San <luttappino1@gmail.com>',
    to: email,
    subject: 'Thanks for joining in!',
    text: `Welcome to the app ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancellationEmail = (email, name) => {
  mg.messages().send({
    from: 'San <luttappino1@gmail.com>',
    to: email,
    subject: 'Sorry to see you go!',
    text: `Goodbye, ${name}. I hope to see you soon.`,
  });
};

module.exports = ({
  sendWelcomeEmail,
  sendCancellationEmail,
});
