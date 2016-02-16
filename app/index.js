import { createPopulation } from './population';

const debug = require('debug')('app:main');
const name = 'SASS Breeder';

debug('booting %s', name);

const pop = createPopulation();

debug('made a population: ' + pop);
