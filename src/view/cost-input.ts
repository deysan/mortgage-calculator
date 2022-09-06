import Cleave from 'cleave.js';
import { CleaveOptions } from 'cleave.js/options';
import { Data } from '../types';

function constInput(getData: () => Data) {
  const input = document.querySelector('#input-cost') as HTMLInputElement;

  const settings = {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand',
    delimiter: ' ',
  } as CleaveOptions;

  new Cleave(input, settings);
}

export default constInput;
