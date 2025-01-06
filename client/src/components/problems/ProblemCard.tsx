import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Question, TableEntity, useGetAllQuestions } from "../../api";

type ProblemCardProps = {
  questionID: string;
};

const ProblemCard = ({ questionID }: ProblemCardProps) => {
  const { data, isLoading, isError } = useGetAllQuestions({
    page: 0,
    size: 10,
  });

  if (isLoading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  if (isError || !data) {
    return <div className="text-center text-red-500">Error fetching data</div>;
  }

  const problems = data.content as Question[];
  const question = problems.find((problem) => problem.id === questionID);

  if (!question) {
    return <div className="text-center text-gray-500">Question not found</div>;
  }

  return (
    <Card className="h-full overflow-auto">
      <CardHeader>
        <CardTitle className="text-lg font-bold">{question.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-gray-700">{question.description}</p>
        <div>
          <h3 className="text-xl font-semibold mb-2">Tables</h3>
          {question.tables?.map((table, tableIndex) => (
            <TableDisplay key={tableIndex} table={table} />
          ))}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Output</h3>
          {question.output && <TableDisplay table={question.output} />}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProblemCard;

type TableDisplayProps = {
  table: TableEntity;
};

const TableDisplay = ({ table }: TableDisplayProps) => {
  const columnNames =
    table.rows?.[0].columns?.map((col) => col.columnName) || [];

  return (
    <div className="mb-6">
      <h4 className="text-lg font-medium mb-2">{table.tableName}</h4>
      <table className="table-auto w-full border-collapse border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            {columnNames.map((columnName, colIndex) => (
              <th key={colIndex} className="border border-gray-300 px-4 py-2">
                {columnName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows?.map((row, rowIndex) => (
            <tr key={rowIndex} className="even:bg-gray-50">
              {columnNames.map((columnName, colIndex) => {
                const column = row.columns?.find(
                  (col) => col.columnName === columnName
                );
                return (
                  <td
                    key={colIndex}
                    className="border border-gray-300 px-4 py-2"
                  >
                    {column?.value || "-"}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
