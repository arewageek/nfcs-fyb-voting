"use client"

import { verifyPayment } from '@/actions/paystack.action';
import { useSelectionStore } from '@/store';
import React from 'react'
import { PaystackButton, usePaystackPayment } from 'react-paystack';
import { PaystackProps } from 'react-paystack/dist/types';
import { toast } from 'react-toastify';

interface TrxResponse {
    message: "Approved" | "Rejected"
    redirecturl: string
    reference: string
    status: "success" | "failed"
    trans: string
    transaction: string
    trxref: string
}

const PaystackCheckoutButton = () => {

    const { sum, removeAll, clearSum } = useSelectionStore()


    const config: PaystackProps = {
        reference: (new Date()).getTime().toString(),
        email: "user@example.com",
        amount: sum * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: `${process.env.NEXT_PUBLIC_PAYSTACK_TEST_PUB_KEY}`,
        label: "hhasssss"
    };

    const onSuccess = (reference: TrxResponse) => {
        const verify = async () => {
            const paymentVerified = await verifyPayment({ reference: reference.trxref })
            console.log({ paymentVerified })
        }
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);
        verify()

        toast.success("Payment was successful")

        clearSum()
        removeAll()
    };

    // you can call this function anything
    const onClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
        toast.error("Payment was closed")
    }

    const initializePayment = usePaystackPayment(config);

    const handleCheckout = () => {
        initializePayment({ onSuccess, onClose })
    }

    return (
        <button onClick={handleCheckout} className=" bg-sky-500 px-3 py-3 rounded text-black w-full hover:bg-sky-600 transition">
            Proceed to Payment
        </button>
    )
}

export default PaystackCheckoutButton