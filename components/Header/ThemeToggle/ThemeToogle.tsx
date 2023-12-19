import React, { useState, useEffect } from 'react';
import { SunIcon } from '@heroicons/react/16/solid';
import { MoonIcon } from '@heroicons/react/16/solid';

type Props = {};

const ThemeToogle = (props: Props) => {
  const [isdark, setIsdark] = useState(JSON.parse('false'));
  useEffect(() => {
    localStorage.setItem('isdark', JSON.stringify(isdark));
  }, [isdark]);

  return (
    <div>
      <label className="swap swap-rotate">
        <input
          type="checkbox"
          className="theme-controller"
          value="dark"
          checked={isdark}
          onChange={() => setIsdark(!isdark)}
        />
        <SunIcon className="swap-on fill-current w-10 h-10" />
        <MoonIcon className="swap-off fill-current w-10 h-10" />
      </label>
    </div>
  );
};

export default ThemeToogle;
