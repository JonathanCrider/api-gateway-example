import { Stripe } from 'stripe'

const provider = () => {
  return new Stripe(process.env.STRIPE_SECRET_API_KEY)
}

export default provider

// https://github.com/stripe/stripe-node#usage
