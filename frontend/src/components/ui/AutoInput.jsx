import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { fetchAdvertisements } from '../../api/authApi';



export default function AutoInput({ suggestions, exists, setExists }) {
    
    const [inputText, setInputText] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    
    const sharedState = useContext(AuthContext);
    const { authToken, handleToken, ads, setAds } = sharedState;
    console.log(ads)
    const uniqueRegNum = Array.from(new Set(ads.map((ad) => ad.car.registration_number))).sort();

  const handleInputChange = (event) => {
    console.log(uniqueRegNum)
    const text = event.target.value;
    setInputText(text);
    const filtered = uniqueRegNum.filter((suggestion) =>
      suggestion.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredSuggestions(filtered);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputText(suggestion);
    setShowSuggestions(false);
  };

  useEffect(() => {
    async function handleAdvertisements() {
        const data = await fetchAdvertisements(authToken)
        setAds(data)
      }
      if (authToken) {
        handleAdvertisements()
      }
        }, [authToken])
        
  return (
    <div className="autocomplete">
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type to search..."
      />
      {showSuggestions && (
        inputText !== '' && (
        <div className="suggestions">
          {filteredSuggestions.map((suggestion, index) => (
            <p
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
            >   
              {suggestion}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

