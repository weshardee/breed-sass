import {
    createPopulation,
    breed,
} from './population';

const debug = require('debug')('app:main');
const name = 'SASS Breeder';

debug('booting %s', name);

debug('generation 1');
let pop = createPopulation();

debug('generation 2');
breed(pop);

debug('all done');
