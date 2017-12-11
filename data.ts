export interface IPerson {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export const Persons: IPerson[] = [
  {id: 1, firstName: 'Donald', lastName: 'Duck', email: 'd.duck@gmail.com'},
  {id: 2, firstName: 'Mickey', lastName: 'Mouse', email: 'm.mouse@gmail.com'},
  {id: 3, firstName: 'Minnie', lastName: 'Mouse', email: 'minnie.mouse@gmail.com'},
  {id: 4, firstName: 'Scrooge', lastName: 'McDuck', email: 's.mcduck@gmail.com'}
];