type State = {
  name: string;
  abbreviation: string;
};

const stateDataFormat = (stateData: State[]) => {
  return stateData.map(({ name, abbreviation }) => ({
    value: abbreviation,
    label: name,
  }));
};

export default stateDataFormat;
