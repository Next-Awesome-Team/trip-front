import React from 'react';
import { SunIcon } from '@heroicons/react/16/solid';
import { MoonIcon } from '@heroicons/react/16/solid';
import exp from 'constants';

type Props = {};

const ThemeToogle = (props: Props) => {
  return (
    <div>
      <label className="swap swap-rotate">
        <input type="checkbox" className="theme-controller" value="synthwave" />
        <SunIcon className="swap-on fill-current w-10 h-10" />
        <MoonIcon className="swap-off fill-current w-10 h-10" />
      </label>
    </div>
  );
};

export default ThemeToogle;
