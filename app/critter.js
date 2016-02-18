import sass from 'node-sass';

const log = require('debug')('app:critter');

const CRITTER_SIZE = 50;
const CHARS = ' abcdefghijklmnopqrstuvwxyz0123456789:/{}.#@-'
const NUM_CHARS = CHARS.length;

export function createCritter(gene = '') {
    while (gene.length < CRITTER_SIZE) {
        gene += CHARS.charAt(Math.floor(Math.random() * NUM_CHARS));
    }

    const score = calcFitness(gene);

    return { gene, score };
}

export function compareCritters(a, b) {
    return a.score - b.score;
}

function calcFitness(data) {
    try {
        return sass.renderSync({ data });
    } catch(e) {
        return 0;
    }
}

export function mate(a, b) {
    log('mating', a, b);
    // using 2 point crossover, swap some data
    let point1 = Math.floor(Math.random() * CRITTER_SIZE);
    let point2 = Math.floor(Math.random() * CRITTER_SIZE);

    // order the points
    if (point1 > point2) {
        const temp = point1;
        point1 = point2;
        point2 = temp;
    }

    const fragA1 = a.substring(0, point1);
    const fragB1 = b.substring(0, point1);
    const fragA2 = a.substring(point1, point2);
    const fragB2 = b.substring(point1, point2);
    const fragA3 = a.substring(point2);
    const fragB3 = b.substring(point2);

    const childA = fragA1 + fragB2 + fragA3;
    const childB = fragB1 + fragA2 + fragB3;

    return [ childA, childB ].map(createCritter);
}
