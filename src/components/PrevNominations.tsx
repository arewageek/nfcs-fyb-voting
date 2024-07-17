"use client"

import { useSelectionStore } from "@/store"
import { useEffect, useState } from "react"
import PaystackCheckoutButton from "./PaystackCheckoutButton"

export interface Nomination {
    id: string,
    candidate: string,
    role: string,
    votes: number
}

const PrevNominations = () => {
    const [cost, setCost] = useState(0)
    const [count, setCount] = useState(0)

    const { selections, sum } = useSelectionStore()

    return (
        <div className="pt-8">
            <div className='flex items-center justify-between'>
                <h3 className="text-sm font-bold">
                    Your Selections
                </h3>

                <div className='text-xs font-medium'>
                    Cost: &#8358;{sum.toLocaleString()}
                </div>
            </div>
            <div className="pt-3 flex gap-2 flex-wrap">

                {
                    selections.map(nom => <span key={crypto.randomUUID()} className="font-normal text-xs py-2 px-3 rounded-xl bg-white/10 inline capitalize">
                        {nom.candidate} &mdash; <b className="italic">{nom.votes} vote{nom.votes > 1 ? 's' : ''}</b> &mdash; {nom.role}
                    </span>)
                }

            </div>

            <div className="pt-5 text-sm font-bold">
                <PaystackCheckoutButton />
            </div>
        </div>
    )
}

export default PrevNominations