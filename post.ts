import {Next, Request, Response} from 'restify';
import {Persons, IPerson} from './data';

export function addPerson(req: Request, res: Response, next: Next): void {
    const newPersonId = parseInt(req.body.id);
      const newPerson: IPerson = { id: newPersonId,
        firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email };
      Persons.push(newPerson);
      res.send(newPerson, {Location: `${req.path()}/${req.body.id}`});
    }