export interface IProject {
  id: number,
  name: string,
  description: string,
  imageSrc: string,
  imageAlt: string,
  url: string,
  gitUrl: string,
  techs: string[],
}

export const projectList: IProject[] = [
  {
    id: 0,
    name: 'Portfolio',
    description: 'A portfolio website made with React + TypeScript + Tailwind made with Vite and deployed on Vercel',
    imageSrc: '',
    imageAlt: '',
    url: 'https://portfolio-douglasyabuki.vercel.app/',
    gitUrl: 'https://github.com/douglasyabuki/portfolio',
    techs: [''],
  },
]

/*
Netflix clone
https://github.com/douglasyabuki/netflix-clone
https://netflix-clone-pq9zd92oa-douglasyabuki.vercel.app/

Sudoku solver
https://github.com/douglasyabuki/my-sudoku-solver
https://my-sudoku-solver-douglasyabuki.vercel.app/

Memory game
https://github.com/douglasyabuki/react-memory-game
https://react-memory-game-douglasyabuki.vercel.app/

Tic-tac-toe
https://github.com/douglasyabuki/react-tic-tac-toe
https://react-tic-tac-toe-douglasyabuki.vercel.app/

Rock-paper-scissors-lizard-spock
https://github.com/douglasyabuki/rock-paper-scissors
https://douglasyabuki.github.io/rock-paper-scissors/
*/
