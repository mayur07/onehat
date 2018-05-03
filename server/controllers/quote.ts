import Quote from '../models/quote';
import BaseCtrl from './base';
// var JSZip = require('jszip');
var HtmlDocx = require('html-docx-js');
var pdf = require('html-pdf');
var fs = require('fs');
var path = require('path');
const nodemailer = require('nodemailer');

// var smtpTransport = nodemailer.createTransport({
//   host: "mail@1hat.com.au",
//   port: 587,
//   secure: false,
//   auth: {
//     user: "mail@1hat.com.au",
//     pass: "Admin.9871"
//   }
// });

var smtpTransport = nodemailer.createTransport({
  //service: "Gmail",
  host: "mail.1hat.com.au",
  port: 465,
  secure: true,
  auth: {
      user: "admin@1hat.com.au",
      pass: "Admin.9871"
  }
});

// var transporter = nodemailer.createTransport({ 
//   host: 'mail@1hat.com.au', 
//   port: 465, 
//   auth: { user: 'Email address', pass: 'password' },
//   secure: true
// });

export default class QuoteCtrl extends BaseCtrl {
  model = Quote;



  getDocx = (req, res) => {
    let docpath = __dirname.replace('\dist', '').replace('server', 'client').replace('controllers', 'assets');
    console.log(path.resolve(docpath, 'html.docx'));
    var converted = HtmlDocx.asBlob(req.body.html);
    let filename = req.body.name;
    let pdfoptions = { format: 'Letter' };
    fs.writeFile(path.resolve(docpath, filename + '.docx'), converted, function (err) {
      if (err) throw err;
      res.status(200).json(path.resolve(docpath, filename + '.docx'));
      pdf.create(req.body.html, pdfoptions).toFile(path.resolve(docpath, filename + '.pdf'), function (err, res) {
        if (err) return console.log(err);
        console.log(res); // { filename: '/app/businesscard.pdf' }
      });
    });

    // verify mail
    // var mailOptions = {
    //   from: "admin@1hat.com.au", // sender address
    //   to: "mayur.mathurkar7@gmail.com", // list of receivers
    //   subject: "Hello ✔", // Subject line
    //   text: "Hello world ✔", // plaintext body
    //   html: "<b>Hello world ✔</b>" // html body
    // }
    // smtpTransport.sendMail(mailOptions, function (error, response) {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log("Message sent: " + response.message);
    //   }
    // });

  }


}
