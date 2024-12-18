import { Stripe } from 'stripe'

const provider = () => {
  return new Stripe(process.env.STRIPE_SECRET_API_KEY)
}

export default provider

// Resources:
// https://github.com/stripe/stripe-node#usage
// https://github.com/stripe-samples/test-data1
