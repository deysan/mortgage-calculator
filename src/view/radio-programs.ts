import { Data } from '../types';
import updateModel from '../utils/update-model';

function radioPrograms(getData: () => Data) {
  const radioButtons: NodeListOf<HTMLInputElement> =
    document.querySelectorAll('input[name="program"]');
  const { base, it, gov, zero } = getData().programs;

  // Set program rates in radio buttons
  (document.querySelector('#base-value') as HTMLInputElement).value = `${base}`;
  (document.querySelector('#it-value') as HTMLInputElement).value = `${it}`;
  (document.querySelector('#gov-value') as HTMLInputElement).value = `${gov}`;
  (document.querySelector('#zero-value') as HTMLInputElement).value = `${zero}`;

  // Show program rates on page
  (document.querySelector('#base-text') as HTMLElement).innerText = `${base * 100}%`;
  (document.querySelector('#it-text') as HTMLElement).innerText = `${it * 100}%`;
  (document.querySelector('#gov-text') as HTMLElement).innerText = `${gov * 100}%`;
  (document.querySelector('#zero-text') as HTMLElement).innerText = `${zero * 100}%`;

  radioButtons.forEach(function (radioBtn) {
    radioBtn.addEventListener('change', function () {
      updateModel(this, {
        onUpdate: 'radioProgram',
        selectedProgram: parseFloat(this.value),
        id: this.id,
      });
    });
  });
}

export default radioPrograms;
