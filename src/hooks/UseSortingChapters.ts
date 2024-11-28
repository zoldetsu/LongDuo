import { useState } from "react";
import { chapters } from "../fakeBd/chapters";
import { chapter } from "../types/TypeChapter";

interface ReturnType {
  requiredChapter: string;
  setReverse: React.Dispatch<React.SetStateAction<boolean>>;
  filteredResults: chapter[];
  handleChange: (arg0: string) => void;
}

export function useSortingChapters(data: chapter[]): ReturnType {
  const [reverse, setReverse] = useState(false);
  const [requiredChapter, setRequiredChapter] = useState<string>("");
  const [filteredResults, setFilteredResults] = useState(data);

  let arraySorted = reverse
    ? chapters.sort((a, b) => a.chapter - b.chapter)
    : chapters.sort((a, b) => b.chapter - a.chapter);

  const handleChange = (value: string) => {
    setRequiredChapter(value);
    // Если значение пустое, вернуть весь массив, иначе фильтровать по номеру главы
    const filteredResults = value
      ? arraySorted.filter((item) => item.chapter === Number(value))
      : arraySorted;

    setFilteredResults(filteredResults);
  };
  return {
    requiredChapter,
    filteredResults,
    setReverse,
    handleChange,
  };
}
