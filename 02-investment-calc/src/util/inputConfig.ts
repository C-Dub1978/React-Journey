export type UserInputConfig = {
  inputType: string;
  inputName: InputFieldNames;
  decimalPlaces?: number;
  label: InputFieldLabels;
  required: boolean;
  placeholder?: string | number;
  pattern?: string;
  currentValue?: number | undefined;
};

export type ParsedInvestmentResult = {
  [key in InputFieldNames]: number | undefined;
}

export enum InputFieldNames {
    INITIAL = 'initial',
    ANNUAL = 'annual',
    EXPECTED = 'expected',
    DURATION = 'duration'
}

export enum InputFieldLabels {
    INITIAL = 'Initial Investment',
    ANNUAL = 'Annual Investment',
    EXPECTED = 'Expected Return',
    DURATION = 'Duration (per annum)'
}

export const userInputs: UserInputConfig[] = [
    {
      inputType: 'number',
      inputName: InputFieldNames.INITIAL,
      label: InputFieldLabels.INITIAL,
      required: true,
      placeholder: 0,
      currentValue: undefined
    },
    {
      inputType: 'number',
      inputName: InputFieldNames.ANNUAL,
      label: InputFieldLabels.ANNUAL,
      required: true,
      placeholder: 0,
      currentValue: undefined
    },
    {
      inputType: 'number',
      inputName: InputFieldNames.EXPECTED,
      label: InputFieldLabels.EXPECTED,
      required: true,
      placeholder: 0,
      currentValue: undefined
    },
    {
      inputType: 'number',
      inputName: InputFieldNames.DURATION,
      label: InputFieldLabels.DURATION,
      required: true,
      placeholder: 0,
      pattern: "[0-9]",
      currentValue: undefined
    },
  ];