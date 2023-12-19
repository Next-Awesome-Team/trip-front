import React from 'react';
import { Bars3Icon } from '@heroicons/react/16/solid';
import ThemeToogle from '../ThemeToggle/ThemeToogle';
import UserMenu from '../UserMenu/UserMenu';
import SearchBar from '../SearchBar/SearchBar';

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Logo</a>
      </div>

      <div></div>

      <div className="flex-none gap-2">
        {/* <SearchBar /> */}
        <ThemeToogle />
        <UserMenu />
      </div>
    </div>
  );
}
