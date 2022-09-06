import * as Model from './model';

import { Detail } from './types';
import programs from './view/radio-programs';
import updateResultsView from './utils/update-results-view';

window.onload = function () {
  const getData = Model.getData;

  // Init programs
  programs(getData);

  document.addEventListener('updateForm', (e: CustomEvent<Detail>) => {
    Model.setData(e.detail);

    const data = Model.getData();
    const results = Model.getResults();

    // Update results block
    updateResultsView(results);
  });
};
