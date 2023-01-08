import * as React from 'react';

export interface IHomeProps {
}

export default function Home () {
  return (
    <div className="w-auto h-full py-16 px-4 sm:px-7 md:px-8 lg:px-10 bg-slate-200">
      <div className="px-4 h-full sm:px-7 md:px-8 lg:px-10 rounded-xl bg-red-700">
        Home works
      </div>
    </div>
  );
}
