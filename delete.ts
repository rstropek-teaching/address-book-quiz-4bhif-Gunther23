import {Next, Request, Response} from 'restify/lib';
import {BadRequestError, NotFoundError} from 'restify-errors';
import {Persons} from './data';

export function deletePerson(req: Request, res: Response, next: Next): void {
  const id = parseInt(req.params.id);
  if (id) {
    const PersonIndex = Persons.findIndex(c => c.id === id);
    if (PersonIndex !== (-1)) {
      Persons.splice(PersonIndex, 1);
      next();
    } else {
      next(new NotFoundError());
    }
  } else {
    next(new BadRequestError('Parameter id must be a number'));
  }
}