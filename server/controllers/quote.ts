import Quote from '../models/quote';
import BaseCtrl from './base';
// var JSZip = require('jszip');
var HtmlDocx = require('html-docx-js');
var pdf = require('html-pdf');
var fs = require('fs');
var path = require('path');

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

  }
}
