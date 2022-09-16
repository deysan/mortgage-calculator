import { Data } from '../types';
import noUiSlider from 'nouislider';

function costRange(getData: () => Data) {
  const data = getData();
  const slider = document.querySelector('#slider-cost') as HTMLElement;

  noUiSlider.create(slider, {
    start: data.cost,
    connect: 'lower',
    tooltips: true,
    step: 100000,
    range: {
      max: data.maxPrice,
      '1%': [400000, 100000],
      '50%': [10000000, 500000],
      min: data.minPrice,
    },
  });
}

export default costRange;
