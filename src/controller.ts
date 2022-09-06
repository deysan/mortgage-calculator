import * as Model from './model';

import { Detail } from './types';
import programs from './view/radio-programs';

window.onload = function () {
  const getData = Model.getData;

  // Init programs
  programs(getData);

  document.addEventListener('updateForm', (e: CustomEvent<Detail>) => {
    console.log('FIRED!!!!');
    console.log(e.detail);

    Model.setData(e.detail);
  });
};
