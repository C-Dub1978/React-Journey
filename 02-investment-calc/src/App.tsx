import { useState } from "react"
import AllInputs from "./components/AllInputs"
import Header from "./components/Header"
import TableResults from "./components/Results"
import { userInputs, ParsedInvestmentResult, UserInputConfig } from "./util/inputConfig"

function App(): JSX.Element {
  const [ userInputValues, setUserInputValues ] = useState(userInputs);

  function handleInvestmentCalc(userInputs: UserInputConfig[]): void {
    setUserInputValues([...userInputs]);   
  }

  return (
    <div>
      <Header />
      <AllInputs allInputFieldsData={userInputValues} inputChangeCallback={(inputs: UserInputConfig[]) => handleInvestmentCalc(inputs)} />
      <TableResults inputData={userInputValues} />
    </div>
  )
}

export default App
