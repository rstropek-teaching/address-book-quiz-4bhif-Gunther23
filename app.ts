import {createServer, plugins} from 'restify';

import { deletePerson } from './delete';
import { getAll } from './get';
import { addPerson } from './post';

var server = createServer();

// Add bodyParser plugin for parsing JSON in request body
server.use(plugins.bodyParser());

// Add routes
server.get('/api/customers', getAll);
server.post('/api/customers', addPerson);
server.del('/api/customers/:id', deletePerson);

server.listen(8080, () => console.log('API is listening'));