import React from "react";
import { RiSearchLine } from 'react-icons/ri';

interface SearchProps {}

const Search = ({}: SearchProps) => {
  return (
    <div className="flex items-center gap-2 py-2 px-3 rounded-full bg-[var(--color-background)]">
      <RiSearchLine size={15} />
      <input type="text" className="p-1" />
    </div>
  )
};

export default Search;
