import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SearchResults from './SearchResults'; // Assume this is the React version of `app-global-search-results`

const initialSearchResults = [
    {
        title: 'Title 1',
        icon: 'https://picsum.photos/200',
        url: 'https://www.example.com',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et luctus enim urna non dui. Nullam sit amet lectus augue. Donec et ligula.',
        type: 'Type 1',
        date: 'Date 1',
        tags: ['tag1', 'tag2'],
        image: 'https://picsum.photos/200'
    },
    {
        title: 'Title 2',
        icon: 'https://picsum.photos/200',
        url: 'https://www.example.com',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et luctus enim urna non dui. Nullam sit amet lectus augue. Donec et ligula.',
        type: 'Type 2',
        date: 'Date 2',
        tags: ['tag3', 'tag4'],
        image: 'https://picsum.photos/200'
    },
    {
        title: 'Title 3',
        icon: 'https://picsum.photos/200',
        url: 'https://www.example.com',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et luctus enim urna non dui. Nullam sit amet lectus augue. Donec et ligula.',
        type: 'Type 3',
        date: 'Date 3',
        tags: ['tag5', 'tag6'],
        image: 'https://picsum.photos/200'
    },
    {
        title: 'Title 1',
        icon: 'https://picsum.photos/200',
        url: 'https://www.example.com',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et luctus enim urna non dui. Nullam sit amet lectus augue. Donec et ligula.',
        type: 'Type 1',
        date: 'Date 1',
        tags: ['tag1', 'tag2'],
        image: 'https://picsum.photos/200'
    },
    {
        title: 'Title 2',
        icon: 'https://picsum.photos/200',
        url: 'https://www.example.com',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et luctus enim urna non dui. Nullam sit amet lectus augue. Donec et ligula.',
        type: 'Type 2',
        date: 'Date 2',
        tags: ['tag3', 'tag4'],
        image: 'https://picsum.photos/200'
    },
    {
        title: 'Title 3',
        icon: 'https://picsum.photos/200',
        url: 'https://www.example.com',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et luctus enim urna non dui. Nullam sit amet lectus augue. Donec et ligula.',
        type: 'Type 3',
        date: 'Date 3',
        tags: ['tag5', 'tag6'],
        image: 'https://picsum.photos/200'
    },
    {
        title: 'Title 1',
        icon: 'https://picsum.photos/200',
        url: 'https://www.example.com',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et luctus enim urna non dui. Nullam sit amet lectus augue. Donec et ligula.',
        type: 'Type 1',
        date: 'Date 1',
        tags: ['tag1', 'tag2'],
        image: 'https://picsum.photos/200'
    },
    {
        title: 'Title 2',
        icon: 'https://picsum.photos/200',
        url: 'https://www.example.com',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et luctus enim urna non dui. Nullam sit amet lectus augue. Donec et ligula.',
        type: 'Type 2',
        date: 'Date 2',
        tags: ['tag3', 'tag4'],
        image: 'https://picsum.photos/200'
    },
    {
        title: 'Title 3',
        icon: 'https://picsum.photos/200',
        url: 'https://www.example.com',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et luctus enim urna non dui. Nullam sit amet lectus augue. Donec et ligula.',
        type: 'Type 3',
        date: 'Date 3',
        tags: ['tag5', 'tag6'],
        image: 'https://picsum.photos/200'
    },
    {
        title: 'Title 1',
        icon: 'https://picsum.photos/200',
        url: 'https://www.example.com',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et luctus enim urna non dui. Nullam sit amet lectus augue. Donec et ligula.',
        type: 'Type 1',
        date: 'Date 1',
        tags: ['tag1', 'tag2'],
        image: 'https://picsum.photos/200'
    }
];


function Search() {
    const [searchResults, setSearchResults] = useState(initialSearchResults);
    const [searchTerm, setSearchTerm] = useState('');
    const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * 2) + 1);
    const { searchTermParam } = useParams(); // This assumes you have a route parameter named `searchTermParam`

    useEffect(() => {
        // Simulate ngOnInit in React
        setSearchTerm(searchTermParam);
        // If you need to fetch search results based on the searchTerm, do it here
    }, [searchTermParam]);

    const shouldInjectComponent = (index) => {
        return index === randomIndex;
    };

    const getTagClasses = (tags) => {
        return {
            'tag1': tags.includes('tag1'),
            'tag2': tags.includes('tag2'),
            'tag3': tags.includes('tag3'),
            'tag4': tags.includes('tag4'),
            'tag5': tags.includes('tag5'),
            'tag6': tags.includes('tag6')
        };
    };
    return (
        <div className="w-screen flex p-5">
            <div className="flex-grow p-3">
                <div>Your search for <span className="font-bold">{searchTerm}</span> has <span className="font-bold">{searchResults.length}</span> results</div>
                {searchResults.map((result, i) => (
                    <React.Fragment key={i}>
                        <SearchResults searchResult={result} />
                        {shouldInjectComponent(i) && (
                            <div className="w-full h-[200px] bg-green-200 rounded-md p-3">
                                Injected after {i}
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
            <div className="flex-grow bg-slate-200 rounded-md p-3 h-[200vh] min-w-[400px]">
                searchSideBar
            </div>
        </div>
    );
}

export default Search;