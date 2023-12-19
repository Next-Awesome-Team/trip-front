import React, { useEffect, useState } from 'react';
import ThemeToogle from '../ThemeToggle/ThemeToogle';
import UserMenu from '../UserMenu/UserMenu';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';

type Props = {};

export default function Header({}: Props) {
  const { data: session } = useSession();

  return (
    <div className="navbar bg-base-200 rounded-full px-5 relative top-2 ">
      <div className="flex-1">
        <Link href="/" className=" rounded-full flex items-center justify-center">
          <Image src="/next.svg" alt="" width={90} height={40} />
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
