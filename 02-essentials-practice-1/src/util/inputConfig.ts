export type UserInputConfig = {
  inputType: string;
  inputName: InputFieldNames;
  decimalPlaces?: number;
  label: InputFieldLabels;
  required: boolean;
  placeholder?: string | number;
  pattern?: string;
};

export type ParsedInvestmentResult = {
    inputs: {}
}

export enum InputFieldNames {
    INITIAL = 'initial',
    ANNUAL = 'annual',
    RETURN = 'return',
    DURATION = 'duration'
}

export enum InputFieldLabels {
    INITIAL = 'Initial Investment',
    ANNUAL = 'Annual Investment',
    RETURN = 'Expected Return',
    DURATION = 'Duration (per annum)'
}

export const userInputs: UserInputConfig[] = [
    {
      inputType: 'number',
      inputName: InputFieldNames.INITIAL,
      label: InputFieldLabels.INITIAL,
      required: true,
      placeholder: 0
    },
    {
      inputType: 'number',
      inputName: InputFieldNames.ANNUAL,
      label: InputFieldLabels.ANNUAL,
      required: true,
      placeholder: 0
    },
    {
      inputType: 'number',
      inputName: InputFieldNames.RETURN,
      label: InputFieldLabels.RETURN,
      required: true,
      placeholder: 0,
    },
    {
      inputType: 'number',
      inputName: InputFieldNames.DURATION,
      label: InputFieldLabels.DURATION,
      required: true,
      placeholder: 0,
      pattern: "[0-9]"
    },
  ];