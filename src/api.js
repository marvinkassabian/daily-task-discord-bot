import admin from 'firebase-admin';

const Api = {};

Api.init = function (logger) {

    const serviceAccount = {
        type: process.env.FIREBASE_SERVICE_ACCOUNT_TYPE,
        project_id: process.env.FIREBASE_SERVICE_ACCOUNT_PROJECT_ID,
        private_key_id: process.env.FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY_ID,
        private_key: process.env.FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY,
        client_email: process.env.FIREBASE_SERVICE_ACCOUNT_CLIENT_EMAIL,
        client_id: process.env.FIREBASE_SERVICE_ACCOUNT_CLIENT_ID,
        auth_uri: process.env.FIREBASE_SERVICE_ACCOUNT_AUTH_URI,
        token_uri: process.env.FIREBASE_SERVICE_ACCOUNT_TOKEN_URI,
        auth_provider_x509_cert_url: process.env.FIREBASE_SERVICE_ACCOUNT_AUTH_PROVIDER_X509_CERT_URL,
        client_x509_cert_url: process.env.FIREBASE_SERVICE_ACCOUNT_CLIENT_X590_CERT_URL
    };

    this.logger = logger;

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: process.env.FIREBASE_DATABASE_URL
    });

    this.firestore = admin.firestore();

    return this;
}

Api.postAda = function () {
    let docRef = this.firestore.collection('users').doc('alovelace');

    let setAda = docRef.set({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815
    });

    return Promise.all([setAda]);
}

export default Api;