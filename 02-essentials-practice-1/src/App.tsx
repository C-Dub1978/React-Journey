import { useState } from "react"
import AllInputs from "./components/AllInputs"
import Header from "./components/Header"
import TableResults from "./components/Results"
import { userInputs, ParsedInvestmentResult } from "./util/inputConfig"

function App(): JSX.Element {
  const [ parsedResults, setParsedResults ] = useState([]);

  return (
    <div>
      <Header />
      <AllInputs allInputFieldsData={userInputs} />
      <TableResults resultsData={[]} />
    </div>
  )
}

export default App
