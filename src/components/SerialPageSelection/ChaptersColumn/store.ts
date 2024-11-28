import { create } from "zustand";
import { chapter } from "../../../types/TypeChapter";

interface IChapters {
  arraySorted: chapter[];
  filteredResults: chapter[];
  requiredChapter: string;
  setArraySorted: (arraySorted: chapter[]) => void;
  setFilteredResults: (filteredResults: chapter[]) => void;
  reverseChapters: () => void;
  setChapterAndFilter: (value: string) => void;
}

export const useGetChapters = create<IChapters>((set) => ({
  arraySorted: [],
  filteredResults: [],
  requiredChapter: "",

  setArraySorted: (arraySorted: chapter[]) => set({ arraySorted }),

  setFilteredResults: (filteredResults: chapter[]) => set({ filteredResults }),

  reverseChapters: () =>
    set((state) => ({
      filteredResults: state.filteredResults.slice().reverse(),
    })),

  setChapterAndFilter: (value: string) =>
    set((state) => {
      const filteredResults = value
        ? state.arraySorted.filter((item) => item.chapter === Number(value))
        : state.arraySorted;

      return {
        requiredChapter: value,
        filteredResults,
      };
    }),
}));
