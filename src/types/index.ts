export type Programs = {
  base: number;
  it: number;
  gov: number;
  zero: number;
};

export type Data = {
  selectedProgram: number;
  programs: Programs;
};

export type Detail = {
  selectedProgram: number;
  onUpdate: string;
  id: string;
};
