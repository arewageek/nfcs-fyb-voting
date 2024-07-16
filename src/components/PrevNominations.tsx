import React from 'react'

export interface Nominations {
    candidate: string,
    role: string,
    votes: number
}

const PrevNominations = () => {
    const allNominations: Nominations[] = [
        {
            candidate: "Arewa Geek",
            role: "Geek of the Year",
            votes: 1
        },
        {
            candidate: "Arewa Geek",
            role: "Geek of the Year",
            votes: 1
        }
    ]

    const cost = async () => {
        const costPerNomination = 100;

        let nominationsCount = 0;

        for (let i = 0; i <= allNominations.length; i++) {
            nominationsCount += allNominations[i].votes
        }
        console.log(nominationsCount)

        return 30
    }

    return (
        <div className="pt-8">
            <div className='flex items-center justify-between'>
                <h3 className="text-sm font-bold">
                    Your Selections
                </h3>

                <div className='text-xs font-medium'>
                    Cost: &#8358;{cost().toLocaleString()}
                </div>
            </div>
            <div className="pt-3 flex gap-2 flex-wrap">

                {
                    allNominations.map(nom => <span key={nom.candidate} className="font-normal text-xs py-2 px-3 rounded-xl bg-white/10 inline">
                        {/* {nom.candidate} &mdash; <b className="italic">{nom.votes} vote{nom.votes > 1 ? 's' : ''}</b> &mdash; Cool Calm Collected */}
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