import Quote from '../models/quote';
import BaseCtrl from './base';
// var JSZip = require('jszip');
var HtmlDocx = require('html-docx-js');
var fs = require('fs');
var path = require('path');

export default class QuoteCtrl extends BaseCtrl {
  model = Quote;

  getDocx = (req, res) => {
    let docpath = __dirname.replace('\dist', '').replace('server', 'client').replace('controllers', 'assets');
    console.log(path.resolve(docpath, 'html.docx'));
    var converted = HtmlDocx.asBlob(req.body.html);
    let filename = req.body.name + '.docx';
    fs.writeFile(path.resolve(docpath, filename), converted, function (err) {
      if (err) throw err;
    });
    res.status(200).json(path.resolve(docpath, filename));
  }
}
