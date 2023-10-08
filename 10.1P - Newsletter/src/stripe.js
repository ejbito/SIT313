import React from "react"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from "./components/payment/PaymentForm"

const PUBLIC_KEY = "pk_test_51NxMMIDKjnRN7dQ0W1XmCXiviGzFr7q5GYKriFeZLVLwx64X09fM5Ujh6Orh3mZJx2r4Gq2aHrFsDdONPcAJiXAa00U3mq0ixs"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}