import { create } from "zustand";
import { Nomination } from "./components/PrevNominations";

type SelectionStore = {
  selections: Nomination[];
  count: () => number;
  add: (nomination: Nomination) => void;
  // remove: (candidateId: number) => void;
  removeAll: () => void;
  sum: number;
  increaseSum: (newSum: number) => void;
  clearSum: () => void;
};

export const useSelectionStore = create<SelectionStore>((set, get) => ({
  selections: [],
  sum: 0,
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
  increaseSum: (newSum) => {
    const { sum } = get();
    const newTotalSum = newSum + sum;
    set({ sum: newTotalSum });
  },
  removeAll: () => {
    set({ selections: [] });
  },
  clearSum: () => {
    set({ sum: 0 });
  },
}));

const updateSelections = (
  nomination: Nomination,
  selections: Nomination[]
): Nomination[] => {
  selections.push(nomination);

  return selections;
};
