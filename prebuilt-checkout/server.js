// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripe = require('stripe')('sk_test_51M68l6G83dj9oB0VP5k10mjwGk8hOYjFGTWA0IlmyevGtHN2xlPz6aV6uvLfW46vjeUEdCGm9dXMOVTZrkmcJT8900p2pcS6vx');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:3000';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1M68pWG83dj9oB0Vw6CUzlmO',
        quantity: 1,
      },
    ],
    success_url: `${YOUR_DOMAIN}/success`,
    cancel_url: `${YOUR_DOMAIN}/failure`,
    mode: 'subscription',
    payment_method_types: ['bacs_debit', 'card'],
  });

  res.redirect(303, session.url);
});

app.listen(5050, () => console.log('Running on port 5050'));