import provider from '../config/stripe.js'

export const recentChargesByDays = async (numDays = 30) => {
  const stripe = provider()
  
  const charges = await stripe.charges.list()
  return charges
}
