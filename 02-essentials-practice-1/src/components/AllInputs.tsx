
import { useState } from "react";
import { UserInputConfig } from "../util/inputConfig";
import Input from "./Input";

export default function AllInputs({
  allInputFieldsData,
}: {
  allInputFieldsData: UserInputConfig[];
}): JSX.Element {
    const initialInputValues = {};
    const [ allInputs, setAllInputs ] = useState({
        initialInvestment: 1000
    })
    function onInputChange(value: string, inputName: string): any {
        setAllInputs({
            ...allInputs,
            [`${inputName}`]: value
        })
    }

  return (
    <div id="user-input">
      <div className="input-group">
        {[allInputFieldsData[0], allInputFieldsData[1]].map((input: UserInputConfig, index: number) => (
          <Input inputData={input} onInputBlur={(val: string, name: string) => onInputChange(val, name)} key={`${input.label}-${index}`} />
        ))}
      </div>
      <div className="input-group">
        {[allInputFieldsData[2], allInputFieldsData[3]].map((input: UserInputConfig, index: number) => (
          <Input inputData={input} key={`${input.label}-${index}`} onInputBlur={(val: string, name: string) => onInputChange(val, name)} />
        ))}
      </div>
    </div>
  );
}
