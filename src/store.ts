import { create } from "zustand";
import { Nomination } from "./components/PrevNominations";

type SelectionStore = {
  selections: Nomination[];
  count: () => number;
  add: (nomination: Nomination) => void;
  // remove: (candidateId: number) => void;
  removeAll: () => void;
};

export const useSelectionStore = create<SelectionStore>((set, get) => ({
  selections: [],
  count: () => {
    const { selections } = get();
    if (selections.length)
      return selections
        .map((item) => item.votes)
        .reduce((prev, current) => prev + current);

    return 0;
  },
  add: (newNomination: Nomination) => {
    console.log("received", newNomination);
    const { selections } = get();
    const updatedSelections = updateSelections(newNomination, selections);
    set({ selections: updatedSelections });
  },
  removeAll: () => {
    set({ selections: [] });
  },
}));

const updateSelections = (
  nomination: Nomination,
  selections: Nomination[]
): Nomination[] => {
  selections.push(nomination);

  return selections;
};
