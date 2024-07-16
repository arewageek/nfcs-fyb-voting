"use client"

import { useSelectionStore } from "@/store"
import { useEffect, useState } from "react"

export interface Nomination {
    id: string,
    candidate: string,
    role: string,
    votes: number
}

const PrevNominations = () => {
    const [cost, setCost] = useState(0)
    const [count, setCount] = useState(0)

    const { selections } = useSelectionStore()

    return (
        <div className="pt-8">
            <div className='flex items-center justify-between'>
                <h3 className="text-sm font-bold">
                    Your Selections
                </h3>

                <div className='text-xs font-medium'>
                    Cost: &#8358;{cost.toLocaleString()}
                </div>
            </div>
            <div className="pt-3 flex gap-2 flex-wrap">

                {
                    selections.map(nom => <span key={crypto.randomUUID()} className="font-normal text-xs py-2 px-3 rounded-xl bg-white/10 inline">
                        {nom.candidate} &mdash; <b className="italic">{nom.votes} vote{nom.votes > 1 ? 's' : ''}</b> &mdash; Cool Calm Collected
                    </span>)
                }

            </div>

            <div className="pt-5 text-sm font-bold">
                <button className=" bg-sky-500 px-3 py-3 rounded text-black w-full hover:bg-sky-600 transition">
                    Proceed to Payment
                </button>
            </div>
        </div>
    )
}

export default PrevNominations