import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';

import User from '../models/user';
import BaseCtrl from './base';

export default class UserCtrl extends BaseCtrl {
  model = User;

  login = (req, res) => {
    console.log('in login...............');
    this.model.findOne({ email: req.body.email, password: req.body.password }, (err, user) => {
      console.log('in in login...............',err,user);
      if (!user) { return res.sendStatus(403); }
      res.json(user);
      // user.comparePassword(req.body.password, (error, isMatch) => {
      //   if (!isMatch) { return res.sendStatus(403); }
      //   const token = jwt.sign({ user: user }, process.env.SECRET_TOKEN); // , { expiresIn: 10 } seconds
      //   res.status(200).json({ token: token });
      // });
    });
    // console.log('in login...............');
    // let user = { email: 'jack@test.com', password: 'Admin@123' };
    // res.json(user);
  }


}
