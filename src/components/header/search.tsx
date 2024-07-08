/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react-hooks/rules-of-hooks */
// SearchBar.tsx
import React, { FC, useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


// interface SuggestionItem {
//   name: string;
//   // Add other properties if necessary
// }
// function useDebounce(value: any, delay: number) {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [value, delay]);

//   return debouncedValue;
// }
const Search: FC = () => {
  const [query, setQuery] = useState<string>("");
//   const { page, page_size } = useAppSelector((state) => state.paginatedProducts);
//   const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

//   const debouncedQuery = useDebounce(query, 500); // Debounce the query state

//   const { data } = useGetSuggestionsQuery({ page, page_size, search: debouncedQuery }, { skip: !debouncedQuery });

  // useEffect(() => {
  //   if (data) {
  //     const newSuggestions = data.data?.map((item: SuggestionItem) => item.name) || [];
  //     setSuggestions(newSuggestions);
  //     setShowSuggestions(true);
  //   } else {
  //     setSuggestions([]);
  //     setShowSuggestions(false);
  //   }
  // }, [data]);
//   useEffect(() => {
//     if (data && query) {
//       const newSuggestions = data.data?.map((item: SuggestionItem) => item.name) || [];
//       setSuggestions(newSuggestions);
//       setShowSuggestions(true);
//     } else {
//       setSuggestions([]);
//       setShowSuggestions(false);
//     }
//   }, [data, query]); // Include query in the dependency array

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      // Check if the click occurred outside the suggestion box
      if (!event.target || !(event.target as HTMLElement).closest(".absolute.z-50")) {
        setShowSuggestions(false);
      }
    };

    // Attach click event listener to the document
    document.addEventListener("click", handleOutsideClick);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showSuggestions]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
  };

  const navigate = useNavigate();
//   const dispatch = useAppDispatch();
  const handleSearch = () => {
    // Perform search action here, e.g., navigate to '/search'
    if (query.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setShowSuggestions(false);
    }
  };
//   const handleSuggestionClick = (suggestion: string) => {
//     // Find the selected suggestion in the data
//     // dispatch(setSuggestion(suggestion));
//     // const selectedProduct = data?.data?.find((item: SuggestionItem) => item.name === suggestion);

//     // Set the query to the full product name if found, otherwise use the suggestion
//     // const selectedQuery = selectedProduct?.name || suggestion;

//     // setQuery(selectedQuery);
//     setShowSuggestions(false);
//     navigate(`/search?q=${encodeURIComponent(suggestion)}`);
//     setShowSuggestions(false);
//   };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && query.trim() !== "") {
      event.preventDefault(); // Prevent the default "Enter" behavior
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setShowSuggestions(false);
    }
  };

  return (
    <div className="flex items-center bg-light border-2 border-primary w-full rounded-[25px] h-[40px] lg:h-[48px] overflow-hidden">
      <div className="flex w-full h-full relative shadow-sm lg:shadow-none" ref={inputRef}>
        <input
          className="lg:bg-light outline-none placeholder:text-xs pl-4 w-full pb-1 rounded-l-[8px] focus:bg-white duration-300 pr-16 
          rounded-[8px] "
          type="text"
          placeholder="Search Products..."
          // onBlur={handleInputBlur}
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <div
          onClick={handleSearch}
          className="absolute top-0 right-0  bg-primary  w-12 h-full flex items-center justify-center"
        >
          <FiSearch className="text-xl font-bold text-white" />
        </div>
        {showSuggestions && (
          <div className="absolute z-50 left-0 top-[42px] lg:top-12 mt-1 bg-primary rounded shadow-md w-full">
            {/* <Suggestion suggestions={suggestions} query={query} handleSuggestionClick={handleSuggestionClick} handleSearch={handleSearch} /> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
