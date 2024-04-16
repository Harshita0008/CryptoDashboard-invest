const admin = require('firebase-admin');
const serviceAccount = require('./crypto-e2e7a-firebase-adminsdk-nu4ls-7c7a6dda4b.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
