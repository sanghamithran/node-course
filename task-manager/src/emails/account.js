const mailgun = require('mailgun-js');

const mailgunAPIKey = '82c87a04ad32e83073422ac2829ce6ed-7cd1ac2b-179c4341';
const mailgunDomain = 'sandbox381521aaef9045bcae4be0332e3159a1.mailgun.org';

const mg = mailgun({ apiKey: mailgunAPIKey, domain: mailgunDomain });

mg.messages().send({
  from: 'San <luttappino1@gmail.com>',
  to: 'luttappino1@gmail.com',
  subject: 'This is my first creation!',
  text: 'I hope this one actually get to you',
});
