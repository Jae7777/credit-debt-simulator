
interface IOutputField {
  futureCombinedCollegeExpense: number,
  presentCombinedCollegeExpense: number,
  presentAmountNeedToSave: number,
  presentAmountNeedToSavePerMonth: number,
}

const OutputField: React.FC<IOutputField> = ({
  futureCombinedCollegeExpense,
  presentCombinedCollegeExpense,
  presentAmountNeedToSave,
  presentAmountNeedToSavePerMonth
}) => {
  return (
    <div>
      <h1>Output Field</h1>
      <p>Future Combined College Expense: {futureCombinedCollegeExpense}</p>
      <p>Present Combined College Expense: {presentCombinedCollegeExpense}</p>
      <p>Present Amount Need To Save: {presentAmountNeedToSave}</p>
      <p>Present Amount Need To Save Per Month: {presentAmountNeedToSavePerMonth}</p>
    </div>
  )
}

export default OutputField;