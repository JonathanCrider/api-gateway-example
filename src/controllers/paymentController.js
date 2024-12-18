import provider from '../config/stripe.js'

export const recentChargesByDays = async (numDays = 30) => {
  const stripe = provider()
  
  // current date to minutes - (days, hours, min, seconds)
  const daysToHours = numDays * 24 * 60 * 60
  const numDaysAgo = Math.floor(Date.now() / 1000) - daysToHours
  
  const charges = await stripe.charges.list({
    created: {
      gte: numDaysAgo
    },
    limit: 100 // max is 100, implement recursion?
  })
  // https://docs.stripe.com/api/charges/list#list_charges-created

  const totalCharges = charges.data.length
  const { totalAmount, listOfCharges } = charges.data.reduce((acc, charge) => {
    const { amount, currency, description, status } = charge
    
    const data = {
      amount: amount / 100,
      currency,
      description,
      status
    }
    
    acc.totalAmount += amount
    acc.listOfCharges.push(data)
    
    return acc
  },{ totalAmount: 0, listOfCharges: [] })

  return {
    totalCharges,
    totalAmount: totalAmount/100,
    listOfCharges
  }
}

// TODO: account for different currencies (cents -> dollars)
// TODO: handle errors
