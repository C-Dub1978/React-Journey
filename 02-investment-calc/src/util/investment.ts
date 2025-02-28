// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return

import { ParsedInvestmentResult } from "./inputConfig";

// - duration: The investment duration (time frame)
export type AnnualDataResult = {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
};
export function calculateInvestmentResults(allData: ParsedInvestmentResult): AnnualDataResult[] {
  const annualData: AnnualDataResult[] = [];
  let investmentValue = allData.initial as number;

  for (let i = 0; i < (allData.duration as number); i++) {
    const interestEarnedInYear = investmentValue * ((allData.expected as number) / 100);
    investmentValue += interestEarnedInYear + (allData.annual as number);
    annualData.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      annualInvestment: allData.annual as number, // investment added in this year
    } as AnnualDataResult);
  }

  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
