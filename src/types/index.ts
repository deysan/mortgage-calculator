export type Programs = {
  base: number;
  it: number;
  gov: number;
  zero: number;
};

export type Data = {
  selectedProgram: number;
  cost: number;
  minPrice: number;
  maxPrice: number;
  programs: Programs;
  onUpdate?: string;
  id?: string;
};

// export type Detail = {
//   selectedProgram?: number;
//   cost?: number;
// };

export type Results = {
  rate: number;
};
