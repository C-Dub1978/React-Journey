import AllInputs from "./components/AllInputs"
import Header from "./components/Header"

export type InputFieldData = {

};

function App(): JSX.Element {
  return (
    <div>
      <Header />
      <AllInputs allInputFieldsData={[]}/>
    </div>
  )
}

export default App
