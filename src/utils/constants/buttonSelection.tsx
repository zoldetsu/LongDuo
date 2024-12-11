// @ts-ignore
import AllIcon from "../../assets/feedback/all.svg?react";
// @ts-ignore
import PositiveIcon from "../../assets/feedback/positive.svg?react";
// @ts-ignore
import NegativeIcon from "../../assets/feedback/negative.svg?react";
// @ts-ignore
import NeutralIcon from "../../assets/feedback/neutral.svg?react";

export const ButtonSelectionConstation = [
  { name: "description", label: "описание" },
  { name: "titles", label: "серии" },
  { name: "feedback", label: "отзывы" },
  { name: "cards", label: "карты" },
];

export const ButtonCommentsConstation = [
  { name: "news", label: "новые" },
  { name: "popular", label: "популярные" },
];

export const ButtonFeedbacksConstation = [
  { name: "all", label: "Все", icon: <AllIcon />, style: "all" },
  {
    name: "positive",
    label: "Положительные",
    icon: <PositiveIcon />,
    style: "positive",
  },
  {
    name: "negative",
    label: "Отрицательные",
    icon: <NegativeIcon />,
    style: "negative",
  },
  {
    name: "neutral",
    label: "Нейтральные",
    icon: <NeutralIcon />,
    style: "neutral",
  },
];

export const ButtonReviewsConstation = [
  {
    name: "positive",
    label: "Положительные",
    icon: <PositiveIcon />,
    style: "positive",
  },
  {
    name: "negative",
    label: "Отрицательные",
    icon: <NegativeIcon />,
    style: "negative",
  },
  {
    name: "neutral",
    label: "Нейтральные",
    icon: <NeutralIcon />,
    style: "neutral",
  },
];
