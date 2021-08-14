/* eslint-disable quotes */
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
/* eslint max-len: ["error", { "ignoreStrings": true }]*/
const stripe = require('stripe')('sk_test_51JGmgNC9dXaIWjJJ4jk8Hy4v8A0t5rRrSHvqTC4ooSEi1yNkx1SAznM8EURgxMKtUvx05TkCNswep3fUcZw8nXd500MN9Dk0AS');

// API (Built on Google Cloud Function)

// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get('/', (req, res) => {
  res.status(200).send('hello world from Google Cloud Function Express App!');
});

app.post('/payments/create', async (req, res) => {
  // From payments page
  const total = req.query.total;

  console.log('Payment Request Received! For amount: ', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listeners for Cloud Functions
exports.api = functions.https.onRequest(app);
