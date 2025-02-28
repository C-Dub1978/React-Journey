import { useState } from "react"
import AllInputs from "./components/AllInputs"
import Header from "./components/Header"
import TableResults from "./components/Results"
import { userInputs, ParsedInvestmentResult, UserInputConfig, InputFieldNames } from "./util/inputConfig"

function App(): JSX.Element {
  const [ userInputValues, setUserInputValues ] = useState(userInputs);

  function handleInvestmentCalc(value: number, inputName: InputFieldNames): void {
    const index = userInputValues.findIndex((value: UserInputConfig) => value.inputName === inputName);
    let currentInputConfig = userInputValues[index];
    currentInputConfig = {
      ...currentInputConfig,
      currentValue: value
    }
    setUserInputValues((existingInputs) => {
      existingInputs[index] = currentInputConfig;
      return [...existingInputs];
    });   
  }

  return (
    <div>
      <Header />
      <AllInputs allInputFieldsData={userInputValues} inputChangeCallback={(value: number, inputName: InputFieldNames) => handleInvestmentCalc(value, inputName)} />
      <TableResults inputData={userInputValues} />
    </div>
  )
}

export default App
