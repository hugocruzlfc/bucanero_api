const nodemailer = require('nodemailer');

//module.exports = (formulario, file) => {
module.exports = (formulario) => {
 var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: process.env.USER_ACCOUNT_GMAIL,
        pass: process.env.PASS_ACCOUNT_GMAIL
        }
        });
    const mailOptions = {
    from: `”${formulario.asunto}”<${process.env.USER_ACCOUNT_GMAIL}>`,
    to: 'usuario@bucanero.com.cu', // email para quien va diriguido
    html: `
    <strong>De:</strong> ${formulario.nombre} <br/>
    <strong>E-mail:</strong> ${process.env.USER_ACCOUNT_GMAIL} <br/>
    <strong>Mensaje:</strong> ${formulario.mensaje}`,
    // attachments: [
    //     // {   // utf-8 string as an attachment
    //     //     filename: 'text1.txt',
    //     //     content: 'hello world!'
    //     // },
    //     // {   // binary buffer as an attachment
    //     //     filename: 'text2.txt',
    //     //     content: new Buffer('hello world!','utf-8')
    //     // }
    //     {   // file on disk as an attachment
    //         filename: file.file.name,
    //         path: file.file.path // stream this file
    //     }
    //     // {   // filename and content type is derived from path
    //     //     path: '/path/to/file.txt'
    //     // },
    //     // {   // stream as an attachment
    //     //     filename: 'text4.txt',
    //     //     content: fs.createReadStream('file.txt')
    //     // },
    //     // {   // define custom content type for the attachment
    //     //     filename: 'text.bin',
    //     //     content: 'hello world!',
    //     //     contentType: 'text/plain'
    //     // },
    //     // {   // use URL as an attachment
    //     //     filename: 'license.txt',
    //     //     path: 'https://raw.github.com/andris9/Nodemailer/master/LICENSE'
    //     // },
    //     // {   // encoded string as an attachment
    //     //     filename: 'text1.txt',
    //     //     content: 'aGVsbG8gd29ybGQh',
    //     //     encoding: 'base64'
    //     // },
    //     // {   // data uri as an attachment
    //     //     path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='
    //     // }
    // ]
    };
    transporter.sendMail(mailOptions, function (err, info) {
            if (err){
                console.log(err)
            } else{
            console.log(info);
            }
        });
}
