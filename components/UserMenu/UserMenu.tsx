import React from 'react';
import Image from 'next/image';

type Props = {};

const UserMenu = (props: Props) => {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <Image
          src="/Avatar.png"
          alt="Avatar"
          width={50}
          height={50}
          className="rounded-full w-10"
        />
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
      >
        <li>
          <a className=" justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
