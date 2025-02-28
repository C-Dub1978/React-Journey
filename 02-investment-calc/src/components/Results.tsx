import { ParsedInvestmentResult, UserInputConfig } from "../util/inputConfig";
import { AnnualDataResult, calculateInvestmentResults } from "../util/investment";

function hasAllValues(results: UserInputConfig[]): boolean {
  return results.some((userInput: UserInputConfig) => {
    return userInput.currentValue !== undefined && userInput.currentValue > 0;
  })
}

function deriveInvestmentObject(userInputs: UserInputConfig[]): ParsedInvestmentResult {
  return userInputs.reduce((accum: Partial<ParsedInvestmentResult>, curr: UserInputConfig) => {
    accum = {
      ...accum,
      [`${curr.inputName}`]: curr.currentValue
    }
    return accum;
  }, {}) as ParsedInvestmentResult;
}

export default function TableResults({
  inputData,
}: {
  inputData: UserInputConfig[];
}): JSX.Element {
  const calculatedValues = !!hasAllValues(inputData) ? calculateInvestmentResults(deriveInvestmentObject(inputData)) : [];
  console.log('Results component :: calculatedValue :: ', calculatedValues);
  return (
    <>
      { calculatedValues.length > 0 ? (
        <table id="result">
          <thead>
            <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>Interest (Per Annum)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            { calculatedValues.map((annualResult: AnnualDataResult, index: number) => {
              return (
                <tr key={index}>
                  <td>{index + 1}.</td>
                  {Object.values(annualResult).map((result: number, valueIndex: number) => {
                    return <td key={result}>{result}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="empty-result">No results found</div>
      )}
    </>
  );
}
