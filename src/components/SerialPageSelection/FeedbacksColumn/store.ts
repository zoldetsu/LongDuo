import { create } from "zustand";

export type TReview = {
  id?: string;
  nickName: string;
  date?: string;
  nameReviews: string;
  textReviews: string;
  rating?: number;
  type?: string;
};

export const useGetReviews = create((set) => ({
  arrayReviews: [],

  setGetReviews: (arrayReviews: TReview[]) => set({ arrayReviews }),

  setAddReview: (review: TReview) =>
    set((state) => ({
      arrayReviews: [...state.arrayReviews, { id: Date.now(), ...review }],
    })),
}));
