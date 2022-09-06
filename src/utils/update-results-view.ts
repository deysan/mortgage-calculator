import { Results } from '../types';

function updateResultsView(results: Results) {
  (document.querySelector('#total-percent') as HTMLElement).innerHTML = `${results.rate * 100}%`;
}

export default updateResultsView;
