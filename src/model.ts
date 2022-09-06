import { Data, Detail } from './types';

let data: Data = {
  selectedProgram: 0.1,
  programs: {
    base: 0.1,
    it: 0.047,
    gov: 0.067,
    zero: 0.12,
  },
};

function getData() {
  return { ...data };
}

function setData(newData: Detail) {
  console.log('New data', newData);

  data = {
    ...data,
    ...newData,
  };

  console.log('Updated data', data);
}

export { getData, setData };
