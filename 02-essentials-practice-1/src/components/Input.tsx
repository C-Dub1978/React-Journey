/**
 * The input will take its 'type' from props so that it can be either a text field, number, textarea, etc
 */

import { UserInputConfig } from "../util/inputConfig";

export default function Input({
  inputData,
  onInputBlur
}: {
  inputData: UserInputConfig;
  onInputBlur: Function
}): JSX.Element {
    let initialValue;

    function handleInputBlur(value: string): void {
        initialValue = value;
        onInputBlur(initialValue, inputData.inputName);
    }
  return (
    <div>
      <label htmlFor={inputData.inputName}>{inputData.label}</label>
      <input
        id="user-input"
        type={inputData.inputType}
        required={inputData.required}
        name={inputData.inputName}
        onBlur={(event) => onInputBlur(event.target.value)}
        pattern={inputData.pattern || '' }
        value={initialValue}
      />
    </div>
  );
}
