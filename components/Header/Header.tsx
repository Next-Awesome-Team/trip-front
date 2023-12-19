import React, { useEffect, useState } from 'react';
import ThemeToogle from '../ThemeToggle/ThemeToogle';
import UserMenu from '../UserMenu/UserMenu';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import cx from 'classnames';

type Props = {
  className?: string;
};

export default function Header({ className }: Props) {
  const { data: session } = useSession();

  const navbarClassName = cx({
    ['navbar bg-base-200 rounded-full px-5 relative top-2 ']: true,
    [className as any]: className,
  });

  return (
    <div className={navbarClassName}>
      <div className="flex-1">
        <Link href="/" className=" text-2xl bold rounded-full flex items-center justify-center">
          NEXT
        </Link>
      </div>

      <div></div>

      <div className="flex-none gap-4">
        <ThemeToogle />
        {session ? (
          <UserMenu />
        ) : (
          <div>
            <button className="btn btn-glass rounded-full">
              <Link href="/auth/signup">Sign Up</Link>
            </button>
            <button className="btn btn-glass rounded-full">
              <Link href="/auth/signin">Sign In</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

