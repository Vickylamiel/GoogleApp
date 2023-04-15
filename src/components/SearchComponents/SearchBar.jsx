import React from 'react';
import SearchIcon from '../../assets/images/search (1).png';
import VoiceSearch from '../../assets/images/google voice.png';
import ImageSearch from '../../assets/images/search image.svg';
import '../../assets/styles/searchBar.css';

export default function SearchBar() {
  return (
    <div>
      <div className="form_group">
          <span className="search_area">
            <input type="search" />
          </span>
          <div className="search_icon">
            <span className="icon_container">
              <img src={SearchIcon} alt="search icon" className='first_img' />
            </span>
            <span className="icon_container">
              <img src={VoiceSearch} alt="voice icon" className='second_img'/>
            </span>
            <span className="icon_container">
              <img src={ImageSearch} alt="image icon" className='second_img'/>
            </span>
          </div>
      </div>
    </div>
  )
}
