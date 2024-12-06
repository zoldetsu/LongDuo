import { create } from "zustand";

type TComment = {
  text: string;
  countLike: number;
};

export const useGetComments = create((set) => ({
  arrayCommnets: [],

  setGetComments: (arrayCommnets: TComment[]) => set({ arrayCommnets }),

  setAddComment: (comment: TComment) =>
    set((state) => ({
      arrayCommnets: [...state.arrayCommnets, { id: Date.now(), ...comment }],
    })),
}));
