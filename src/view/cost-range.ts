import { Data } from '../types';
import noUiSlider, { target } from 'nouislider';
import wNumb from 'wnumb';
import updateModel from '../utils/update-model';

function costRange(getData: () => Data) {
  const data = getData();
  const slider = document.querySelector('#slider-cost') as target;

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

  slider.noUiSlider.on('slide', function () {
    // Get slider value
    let sliderValue = slider.noUiSlider.get();
    sliderValue = sliderValue.toString().split('.')[0];
    sliderValue = parseInt(String(sliderValue).replace(/ /g, ''));

    updateModel(slider, { cost: sliderValue, onUpdate: 'costSlider' });
  });

  return slider;
}

export default costRange;
