import * as Model from './model';

import { Data } from './types';
import costInput from './view/cost-input';
import costRange from './view/cost-range';
import programs from './view/radio-programs';
import updateResultsView from './view/update-results-view';

window.onload = function () {
  const getData = Model.getData;

  // Init programs
  programs(getData);

  // Init Cost input
  const cleaveCost = costInput(getData);
  const sliderCost = costRange(getData);

  document.addEventListener('updateForm', (e: CustomEvent<Data>) => {
    Model.setData(e.detail);

    const data = Model.getData();
    const results = Model.getResults();

    // Update all form view based on model
    updateFormAndSliders(data);

    // Update results block
    updateResultsView(results);
  });

  function updateFormAndSliders(data: Data) {
    // costInput
    if (data.onUpdate !== 'inputCost') {
      console.log('UPDATE INPUT COST');
      cleaveCost.setRawValue(data.cost.toString());
    }

    // costRange
    if (data.onUpdate !== 'costSlider') {
      console.log('UPDATE COST SLIDER');
      sliderCost.noUiSlider.set(data.cost);
    }
  }
};
