import Cleave from 'cleave.js';
import { CleaveOptions } from 'cleave.js/options';
import { Data } from '../types';
import updateModel from '../utils/update-model';

function costInput(getData: () => Data) {
  const data = getData();
  const input = document.querySelector('#input-cost') as HTMLInputElement;

  const settings: CleaveOptions = {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand',
    delimiter: ' ',
  };

  const cleaveInput = new Cleave(input, settings);
  cleaveInput.setRawValue(data.cost.toString());

  // Checking for min and max price
  input.addEventListener('input', function () {
    const value = +cleaveInput.getRawValue();

    if (value < data.minPrice || value > data.maxPrice) {
      input.closest('.param__details')?.classList.add('param__details--error');
    }

    if (value >= data.minPrice && value <= data.maxPrice) {
      input.closest('.param__details')?.classList.remove('param__details--error');
    }

    // Update model
    updateModel(input, { cost: value, onUpdate: 'inputCost' });
  });

  input.addEventListener('change', function () {
    const value = +cleaveInput.getRawValue();

    if (value > data.maxPrice) {
      input.closest('.param__details')?.classList.remove('param__details--error');
      cleaveInput.setRawValue(data.maxPrice.toString());
    }

    if (value < data.minPrice) {
      input.closest('.param__details')?.classList.remove('param__details--error');
      cleaveInput.setRawValue(data.minPrice.toString());
    }

    // Update model
    updateModel(input, {
      cost: +cleaveInput.getRawValue(),
      onUpdate: 'inputCost',
    });
  });

  return cleaveInput;
}

export default costInput;
