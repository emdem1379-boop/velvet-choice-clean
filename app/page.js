'use client'

import { loadStripe } from '@stripe/stripe-js'

export default function HomePage() {
  const handleCheckout = async () => {
   const stripe = await loadStripe('pk_test_XXXXXXXXXXXXXXXX') 
    if (!stripe) {
      alert('Stripe did not load.')
      return
    }

    await stripe.redirectToCheckout({
      lineItems: [{price: 'price_XXXXXXXXXXXXXXXX', quantity: 1 }],
      mode: 'subscription',
      successUrl: window.location.origin,
      cancelUrl: window.location.origin,
    })
  }

  return (
    <main>
      <h1>Velvet Choice</h1>
      <p>Steamy interactive love stories.</p>

      <button onClick={handleCheckout}>
        🔒 Unlock the next chapter — $5/month
      </button>
    </main>
  )
}
