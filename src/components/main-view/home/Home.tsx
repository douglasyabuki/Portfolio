import * as React from 'react';

export interface IHomeProps {
}

export default function Home () {
  return (
    <div className="w-auto h-full py-16 px-4 sm:px-7 md:px-8 lg:px-10 bg-background-black">
      <div className="px-4 h-full sm:px-7 md:px-8 lg:px-10 rounded-xl custom-bg-1">
        <h2>Home works!</h2>
      </div>
    </div>
  );
}
