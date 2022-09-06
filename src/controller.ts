import * as Model from './model';

import { Detail } from './types';
import constInput from './view/cost-input';
import programs from './view/radio-programs';
import updateResultsView from './view/update-results-view';

window.onload = function () {
  const getData = Model.getData;

  // Init programs
  programs(getData);

  // Init Cost input
  constInput(getData);

  document.addEventListener('updateForm', (e: CustomEvent<Detail>) => {
    Model.setData(e.detail);

    const data = Model.getData();
    const results = Model.getResults();

    // Update results block
    updateResultsView(results);
  });
};
