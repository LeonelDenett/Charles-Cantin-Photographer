const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.CHARLES_CANTIN);

export default function (req, res) {
    const body = JSON.parse(req.body);
    
    const message = `
        Name: ${body.name}\r\n
        Email: ${body.email}\r\n
        Message: ${body.message}
    `;

    const data = {
        to: 'pibabe6098@aregods.com',
        from: 'pibabe6098@aregods.com',
        subject: 'New web form message!',
        text: message,
        html: message.replace(/\r\n/g, '<br/>')
    }

    mail.send(data);

    res.status(200).json({ status: 'Ok'});
}