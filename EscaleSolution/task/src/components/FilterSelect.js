import { useRef, useState, useEffect } from "react";

const FilterSelect = ({ options, selectedValues, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filterValue, setFilterValue] = useState("");
  const selectRef = useRef(null);

  useEffect(() => {
    const handleEscapeKeyPress = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscapeKeyPress);

    return () => {
      window.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, []);

  const handleCheckboxChange = (value) => {
    const currentIndex = selectedValues.indexOf(value);
    const newSelectedValues = [...selectedValues];

    if (currentIndex === -1) {
      newSelectedValues.push(value);
    } else {
      newSelectedValues.splice(currentIndex, 1);
    }

    onChange(newSelectedValues);
  };

  const handleTagClose = (value) => {
    const newSelectedValues = selectedValues.filter((val) => val !== value);
    onChange(newSelectedValues);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    event.stopPropagation();
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div className="relative w-full" ref={selectRef}>
      <div
        className="flex items-center flex-wrap p-2 bg-white border border-gray-200 rounded-md cursor-pointer"
        onClick={toggleDropdown}
      >
        {selectedValues.length > 0 ? (
          selectedValues.map((value) => (
            <div
              key={value}
              className="flex items-center justify-center px-2 py-1 m-1 text-sm font-medium text-gray-700 bg-indigo-600 text-white rounded-full"
            >
              {value}
              <button
                className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                onClick={(e) => {
                  e.stopPropagation();
                  handleTagClose(value);
                }}
              >
                <CloseButtonIcon />
              </button>
            </div>
          ))
        ) : (
          <span className="text-gray-400">Select options</span>
        )}
        <div className="absolute place-self-end self-end right-2.5 -translate-y-1">
          <div className="relative h-full ">
            <ChevronDownIcon />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute z-50 w-full py-2 bg-white border border-gray-200 rounded-md shadow-lg">
          <div className="px-4 pb-2">
            <input
              type="text"
              placeholder="Search options"
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              className="block w-full px-3 py-2 mt-1 leading-tight text-gray-700 border border-gray-300 rounded-md appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          {filteredOptions.map((option) => (
            <label
              key={option}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                value={option}
                checked={selectedValues.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              <span className="ml-2 text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterSelect;

const CloseButtonIcon = () => (
  <svg
    className="w-3 h-3 text-white fill-current"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="fill-current"
  >
    <path d="M7.41 12L12 7.41l4.59 4.59a1.002 1.002 0 11-1.42 1.42L12 13.83l-4.59 4.58a1.002 1.002 0 01-1.42-1.42L10.17 12 5.58 7.41A1.002 1.002 0 017.41 5.58L12 10.17l4.59-4.59a1.002 1.002 0 011.42 1.42L13.83 12l4.58 4.59a1.002 1.002 0 11-1.42 1.42L12 14.83l-4.59 4.58a1.002 1.002 0 01-1.42-1.42L10.17 12z" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.0001 15.5858L7.70718 11.2929C7.31663 10.9024 6.68343 10.9024 6.29288 11.2929C5.90233 11.6834 5.90233 12.3166 6.29288 12.7071L11.2929 17.7071C11.6834 18.0976 12.3166 18.0976 12.7072 17.7071L17.7072 12.7071C18.0977 12.3166 18.0977 11.6834 17.7072 11.2929C17.3166 10.9024 16.6834 10.9024 16.2929 11.2929L12.0001 15.5858Z"
    />
  </svg>
);
