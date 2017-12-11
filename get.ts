import {Request, Response, Next} from 'restify';
import {Persons} from './data';

export function getAll(req: Request, res: Response, next: Next): void {
    res.send(Persons);
    next();
}