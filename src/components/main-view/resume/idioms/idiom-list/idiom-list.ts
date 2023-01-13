// Interface for items of idiom-list.ts
export interface IIdiom {
  id: number,
  idiom: string,
  proficiency: string,
}

export const idiomList = [
  { id: 0, idiom: 'Portuguese - Brazil', proficiency: 'Native' },
  { id: 1, idiom: 'English', proficiency: 'Fluent' },
  { id: 2, idiom: 'French', proficiency: 'Intermediate' },
  { id: 3, idiom: 'Japanese', proficiency: 'Intermediate' },
  { id: 4, idiom: 'Spanish', proficiency: 'Basic' },
]
