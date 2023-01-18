import * as React from 'react';

interface Props {
}

export default function GithubBoard (props: Props) {
  return (
    <div className="w-auto space-y-12 px-4 py-20 text-center sm:px-7 md:px-8 lg:px-10">
      <h1 className="w-auto text-3xl font-bold md:text-4xl xl:text-5xl 2xl:text-6xl">Github</h1>
      <h2 className='py-4 text-xl opacity-70 md:text-2xl 2xl:text-4xl'>Want to see more? Visit his Github profile.</h2>
    </div>
  );
}
