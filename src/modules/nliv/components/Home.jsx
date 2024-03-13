import React, { useState } from 'react'



const Home = () => {

  const [hasSuggestions, setHasSuggestions] = useState(false);
  const [suggestedStrings, setSuggestedStrings] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const pathIconMapping = {
    '/ai': 'chat',
    '/suppliers': 'shopping_cart',
    '/courses': 'auto_stories',
    '/forums': 'group',
    '/library': 'stadia_controller',
    '/videos': 'tv',
    '/map': 'map'
  };

  const onSuggestionClick = (suggestion) => {
    // Redirect to /search?s=suggestion
    window.location.href = `/search?s=${suggestion}`;
    console.log(suggestion); // Placeholder action
  };

  const onSearchInput = (event) => {
    const inputValue = event.target.value;
    setHasSuggestions(inputValue ? true : false);
    setSearchInput(inputValue);
    // Add inputValue to the suggestedStrings array
    setSuggestedStrings([inputValue, 'suggestion 1', 'suggestion 2', 'suggestion 3']);
  };
  return (
    <div className="w-screen h-[71vh]" style={{ backgroundImage: "url('/assets/images/brwein.webp')" }}>
      <div className="w-full h-full flex flex-col items-center justify-center gap-7 bg-slate-950 bg-opacity-70">
        <div className="flex-grow"></div>
        <div className={`flex items-center justify-center font-black text-slate-50 text-[50px] ${hasSuggestions ? 'hidden' : ''}`}>
          Brwein
        </div>
        <form className={`relative border-1 border-solid flex items-center justify-center min-w-[60%] max-w-full bg-slate-50 ${hasSuggestions ? 'rounded-t-xl border-slate-200' : 'rounded-full border-slate-800'
          }`} onSubmit={onSuggestionClick}>
          <input
            value={searchInput}
            onChange={onSearchInput}
            placeholder="Search anything"
            className="rounded-s-full w-full h-full flex-grow py-2 px-4 outline-none"
          />
          <span className="p-2 h-full flex items-center justify-center" role="button">
            <span className="material-symbols-outlined">search</span>
          </span>

          {hasSuggestions && (
            <div className="absolute left-0 right-0 top-[100%] p-3 shadow-md rounded-b-xl h-[40vh] bg-white border-slate-200 border-1 w-full overflow-y-auto">
              {suggestedStrings.map((suggestion, index) => (
                <span key={index} className="block p-2 hover:bg-slate-100 cursor-pointer" onClick={() => onSuggestionClick(suggestion)}>
                  {suggestion}
                </span>
              ))}
            </div>
          )}
        </form>
        <div className={`flex items-center justify-center ${hasSuggestions ? 'mt-[-110px]' : ''}`}>
          {Object.entries(pathIconMapping).map(([path, icon], index) => (
            <a key={index} href={path}
              className="text-decoration-none text-slate-50 hover:text-orange-500 p-2 h-full flex items-center justify-center material-symbols-outlined"
              role="button">
              {icon}
            </a>
          ))}
        </div>
        <div className="flex-grow"></div>
      </div>
    </div>
  )
}

export default Home