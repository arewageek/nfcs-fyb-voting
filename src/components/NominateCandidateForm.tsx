"use client"

import { useState } from 'react'
import { Input } from './ui/input'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const NominateCandidateForm = () => {

    const [candidate, setCandidate] = useState<string>()
    const [role, setRole] = useState<string>()
    const [votes, setVotes] = useState<number>(0)

    return (
        <form>
            <div className="flex gap-y-2 flex-col">
                <Input onChange={(e) => setCandidate(e.target.value)} value={candidate} className="bg-white/10 py-3 px-4 w-full rounded-lg text-sm" placeholder="Candidate Name" />
                <Select>
                    <SelectTrigger className="w-full bg-white/10">
                        <SelectValue placeholder="Nomination" />
                    </SelectTrigger>
                    <SelectContent className='bg-gray-700'>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>


                <div className="w-full flex justify-between gap-x-2">
                    <div className="w-full">
                        <button onClick={() => votes > 0 && setVotes(votes - 1)} type="button" className="bg-white/20 px-5 h-full w-full hover:bg-white/10 transition font-bold text-xl">
                            -
                        </button>
                    </div>
                    <div className="w-full">
                        <input type="text" className="bg-white/10 px-2 py-2 text-center" value={`${votes} vote${votes > 1 ? 's' : ''}`} />
                    </div>

                    <div className="w-full">
                        <button onClick={() => setVotes(votes + 1)} type="button" className="bg-white/20 px-5 h-full w-full hover:bg-white/10 transition font-bold text-xl">
                            +
                        </button>
                    </div>
                </div>

                <div className="w-full">
                    <button className="w-full text-sm py-2 px-3 bg-sky-500 text-black font-bold hover:bg-sky-600 transition">
                        Add
                    </button>

                </div>

            </div>
        </form>
    )
}

export default NominateCandidateForm