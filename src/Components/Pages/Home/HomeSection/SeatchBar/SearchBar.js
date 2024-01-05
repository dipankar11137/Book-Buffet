import React, { useEffect, useState } from 'react';
import { ImCross, ImSearch } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';
import '../../../../CSS/SearchBarCss.css';
import Novel from '../Novel/Novel';

const SearchBar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const navigation = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    fetch('http://localhost:5000/books')
      .then(res => res.json())
      .then(data => {
        setCards(data);
        setFilteredCards(data);
      });
  }, []);

  const handleSearch = e => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query === '') {
      setSearchOpen(false);
    }
    // Filter cards based on search query
    const filtered = cards.filter(card =>
      card.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCards(filtered);
  };
  const handleBuy = id => {
    navigation(`/buy/${id}`);
    setSearchOpen(false);
  };
  const handleBook = id => {
    navigation(`/bucks/${id}`);
    setSearchOpen(false);
  };

  return (
    <div>
      <div className="flex ml-20">
        <div className="py-2  ml-20 flex">
          <input
            className="w-[500px] border-2 p-2 rounded-l-lg text-black border-blue-200"
            placeholder="Search Hare"
            type="search"
            value={searchQuery}
            onChange={handleSearch}
          />
          {searchOpen ? (
            <button
              onClick={() => setSearchOpen(false)}
              className="px-3 bg-primary pt-[6px] pb-4 rounded-r-lg "
            >
              {' '}
              <ImCross className="text-3xl pt-1 -mb-2 text-red-50 hover:text-red-600" />
            </button>
          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              className="px-3 bg-primary pt-[6px] pb-4 rounded-r-lg "
            >
              {' '}
              <ImSearch className="text-3xl pt-1 -mb-2 text-white hover:text-black" />
            </button>
          )}
        </div>
      </div>
      {/* search div */}
      {searchOpen ? (
        <div className="search-bar grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-3 px-20 pb-10 text-black">
          {filteredCards.map(product => (
            <Novel
              key={product._id}
              title={product.name}
              product={product}
              setSearchOpen={setSearchOpen}
              handleBuy={handleBuy}
              handleBook={handleBook}
            />
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SearchBar;
