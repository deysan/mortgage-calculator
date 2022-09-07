import { Data, Detail, Results } from './types';

let data: Data = {
  selectedProgram: 0.1,
  cost: 12000000,
  minPrice: 375000,
  maxPrice: 100000000,
  programs: {
    base: 0.1,
    it: 0.047,
    gov: 0.067,
    zero: 0.12,
  },
};

let results: Results = {
  rate: data.selectedProgram,
};

function getData() {
  return { ...data };
}

function getResults() {
  return { ...results };
}

function setData(newData: Detail) {
  console.log('New data', newData);

  if (newData.onUpdate === 'inputCost' && newData.cost) {
    // Price update
    // If the cost is less than min price
    if (newData.cost < data.minPrice) newData.cost = data.minPrice;
    // If the cost is more than max price
    if (newData.cost > data.maxPrice) newData.cost = data.maxPrice;
  }

  data = {
    ...data,
    ...newData,
  };

  results = {
    rate: data.selectedProgram,
  };

  console.log('Updated data', data);
  console.log('New results', results);
}

export { getData, setData, getResults };
