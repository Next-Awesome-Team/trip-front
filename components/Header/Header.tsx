import React from 'react';
import ThemeToogle from '../ThemeToggle/ThemeToogle';
import UserMenu from '../UserMenu/UserMenu';
import { useSession } from 'next-auth/react';

type Props = {};

export default function Header({}: Props) {
  const { data: session } = useSession();

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Logo</a>
      </div>

      <div></div>

      <div className="flex-none gap-4">
        {/* <SearchBar /> */}
        <ThemeToogle />
        {session ? (
          <UserMenu />
        ) : (
          <div>
            <button className="btn btn-ghost">Sign Up</button>
            <button className="btn btn-ghost">Sign In</button>
          </div>
        )}
      </div>
    </div>
  );
}
