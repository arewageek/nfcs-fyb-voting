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
import { useSelectionStore } from '@/store'
import { Nomination } from './PrevNominations'
import { Button } from './ui/button'

const NominateCandidateForm = () => {

    const [candidate, setCandidate] = useState<string>('')
    const [role, setRole] = useState<string>('')
    const [votes, setVotes] = useState<number>(0)

    const { add } = useSelectionStore()

    const handleInputChange = () => {
        return false;
    }

    const handleSelectionAdd = () => {

        const nomination: Nomination = {
            id: crypto.randomUUID(),
            candidate,
            role,
            votes
        }
        add(nomination)

        setCandidate('')
        setVotes(0)
        setRole('')
    }

    const roles = [
        'geek of the year', 'onowu of the year', 'cruise'
    ]

    return (
        <form onSubmit={handleSelectionAdd}>
            <div className="flex gap-y-2 flex-col w-full max-w-full">
                <Input onChange={(e) => setCandidate(e.target.value)} value={candidate} className="bg-white/10 py-3 px-4 w-full rounded-lg text-sm" placeholder="Candidate Name" />
                <select className='w-full bg-white/10 py-2 px-4' onChange={(e) => setRole(e.target.value)}>
                    {/* <SelectTrigger className="w-full bg-white/10">
                        <SelectValue placeholder="Nomination" />
                    </SelectTrigger>
                    <SelectContent className='bg-gray-700' onChange={(e) => console.log(e)}>
                        <SelectItem value="light">Geek of The year</SelectItem>
                        <SelectItem value="dark">Onowu of the year</SelectItem>
                        <SelectItem value="system">Cruise </SelectItem>
                    </SelectContent> */}
                    {roles.map(role => <option key={role} value={role} className='uppercase'>{role.toLocaleUpperCase()}</option>)}
                </select>


                <div className="max-w-full flex gap-x-2">
                    <div className="w-fit">
                        <button onClick={() => votes > 0 && setVotes(votes - 1)} type="button" className="bg-white/20 px-5 h-full w-full hover:bg-white/10 transition font-bold text-xl">
                            -
                        </button>
                    </div>
                    <div className="w-fit">
                        <input type="text" className="bg-white/10 w-full px-2 py-2 text-center" value={`${votes} vote${votes > 1 ? 's' : ''}`} onChange={() => handleInputChange} />
                    </div>

                    <div className="w-fit">
                        <button onClick={() => setVotes(votes + 1)} type="button" className="bg-white/20 px-5 h-full w-full hover:bg-white/10 transition font-bold text-xl">
                            +
                        </button>
                    </div>
                </div>

                <div className="w-full">
                    <Button type='button' onClick={handleSelectionAdd} className="w-full text-sm py-2 px-3 bg-sky-500 text-black font-bold hover:bg-sky-600 transition">
                        Add
                    </Button>

                </div>

            </div>
        </form >
    )
}

export default NominateCandidateForm