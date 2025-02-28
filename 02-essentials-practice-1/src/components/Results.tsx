export default function TableResults({
  resultsData,
}: {
  resultsData: any;
}): JSX.Element {
  return (
    <>
      {resultsData.length > 0 ? (
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
            {resultsData.map((result: any, index: number) => {
              return (
                <tr key={index}>
                  <td>{index + 1}.</td>
                  {result.values.map((value: number, valueIndex: number) => {
                    return <td key={valueIndex}>{value}</td>;
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
