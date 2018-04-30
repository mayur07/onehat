import * as express from 'express';

import CatCtrl from './controllers/cat';
import UserCtrl from './controllers/user';
import QuoteCtrl from './controllers/quote';
import ProjectCtrl from './controllers/project';
import Cat from './models/cat';
import User from './models/user';
import Quote from './models/quote';
import Project from './models/project';

export default function setRoutes(app) {

  const router = express.Router();

  const catCtrl = new CatCtrl();
  const userCtrl = new UserCtrl();
  const quoteCtrl = new QuoteCtrl();
  const projectCtrl = new ProjectCtrl();

  // Cats
  router.route('/cats').get(catCtrl.getAll);
  router.route('/cats/count').get(catCtrl.count);
  router.route('/cat').post(catCtrl.insert);
  router.route('/cat/:id').get(catCtrl.get);
  router.route('/cat/:id').put(catCtrl.update);
  router.route('/cat/:id').delete(catCtrl.delete);

  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/register').post(userCtrl.insert);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);

  // Quotes
  router.route('/quote').get(quoteCtrl.getAll);
  router.route('/quote').post(quoteCtrl.insert);
  router.route('/quote/:id').put(quoteCtrl.update);
  router.route('/quote/saveDocx').post(quoteCtrl.getDocx);

  // Projects
  router.route('/project').get(projectCtrl.getAll);
  router.route('/project').post(projectCtrl.insert);


  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
