type State = {
  name: string;
  abbreviation: string;
};

const stateDataFormat = (stateData: State[]) => {
  return stateData.map(({ name, abbreviation }) => ({
    value: name,
    label: name,
    abbreviation,
  }));
};

export default stateDataFormat;
