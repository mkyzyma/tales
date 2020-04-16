const functions = require('firebase-functions');
// eslint-disable-next-line import/no-unresolved
const { sapper } = require('./__sapper__/build/server/server');

const middleware = sapper.middleware();
exports.ssr = functions.https.onRequest((req, res) => {
  req.baseUrl = '';
  middleware(req, res);
});
