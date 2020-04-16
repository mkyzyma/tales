const functions = require('firebase-functions');
// We have to import the built version of the server middleware.
// eslint-disable-next-line import/no-unresolved
const { sapper } = require('./__sapper__/build/server/server');

const middleware = sapper.middleware();
exports.ssr = functions.https.onRequest((req, res) => {
  req.baseUrl = '';
  middleware(req, res);
});
