import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Button from './Button';
import LanguageLink from './LanguageLink';

export default function SearchSection() {
  return (
    <div>
      <div>
        <Logo />
        <SearchBar/>
        <Button />
        <LanguageLink />
      </div>
    </div>
  )
}
