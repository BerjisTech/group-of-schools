import React from 'react'

const SearchResults = ({searchResult}) => {
    return (
        <div className="search-result flex p-5">
            <div className="flex gap-2 flex-grow">
                <div className="w-full flex-grow flex flex-col">
                    <div className="flex gap-2 justify-start items-center w-full">
                        {searchResult.image && (
                            <img src={searchResult.image} className="w-[50px] h-[50px] rounded-full" alt={searchResult.title} />
                        )}
                        <div className="flex flex-col w-full flex-grow">
                            <span className="font-bold">
                                <a href={searchResult.url} target="_BLANK" rel="noopener noreferrer">{searchResult.title}</a>
                            </span>
                            <span className="flex items-start justify-start w-full">
                                <a className="url flex-grow" href={searchResult.url} target="_BLANK" rel="noopener noreferrer">{searchResult.url}</a>
                                <span className="text-slate-500 material-symbols-outlined cursor-pointer">more_vert</span>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                        <p className="description">{searchResult.description.slice(0, 200)}<span className="text-slate-500">...</span></p>
                        <div className="flex w-full">
                            {searchResult.tags && searchResult.tags.length > 0 && (
                                <div className="flex-grow flex items-center justify-start gap-2">
                                    {searchResult.tags.map((tag, index) => (
                                        <span key={index} className="tag flex items-center justify-center gap-2">
                                            <a href={`/s/a?t=${tag}`}>{tag}</a>
                                            <span className="w-[3px] h-[3px] bg-slate-950 rounded-full"></span>
                                        </span>
                                    ))}
                                </div>
                            )}
                            <p className="date">{searchResult.date}</p>
                        </div>
                    </div>
                </div>
                {searchResult.image && (
                    <img src={searchResult.image} className="w-[100px] h-[100px] rounded-md" alt={searchResult.title} />
                )}
            </div>
        </div>
    )
}

export default SearchResults