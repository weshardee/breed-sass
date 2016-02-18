import sass from 'node-sass';

const CRITTER_SIZE = 50;
const CHARS = ' abcdefghijklmnopqrstuvwxyz0123456789:/{}.#@-'
const NUM_CHARS = CHARS.length;

export function createCritter() {
    let gene = '';

    for (let i = 0; i < CRITTER_SIZE; i++) {
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
