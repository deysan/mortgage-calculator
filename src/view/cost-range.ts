import { Data } from '../types';
import noUiSlider from 'nouislider';
import wNumb from 'wnumb';

function costRange(getData: () => Data) {
  const data = getData();
  const slider = document.querySelector('#slider-cost') as HTMLElement;

  noUiSlider.create(slider, {
    start: data.cost,
    connect: 'lower',
    tooltips: true,
    step: 100000,
    range: {
      min: data.minPrice,
      '1%': [400000, 100000],
      '50%': [10000000, 500000],
      max: data.maxPrice,
    },
    format: wNumb({
      decimals: 0,
      thousand: ' ',
      suffix: '',
    }),
  });
}

export default costRange;
