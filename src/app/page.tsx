
import NominateCandidateForm from "@/components/NominateCandidateForm";
import PrevNominations from "@/components/PrevNominations";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-5 py-10 flex h-[80vh] w-full items-center justify-center sticky top-10">
      <div className="bg-white/10 px-5 pb-10 py-4 w-full lg:w-1/4 rounded-lg divide-y divide-white/30">
        <h2 className="font-bold text-md py-2">
          Choose Your Candidates
        </h2>

        <div className="pt-8 w-full">
          <NominateCandidateForm />
        </div>



        <PrevNominations />

      </div>
    </main>
  );
}
