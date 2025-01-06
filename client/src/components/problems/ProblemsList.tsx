import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";
import { Question } from "../../services";

type ProblemsListProps = {
  questions: Question[];
};

const ProblemsList = ({ questions }: ProblemsListProps) => {
  const navigate = useNavigate();
  return (
    <Card className="w-full max-w-4xl mx-auto mt-4">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Problems
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Question</TableHead>
              <TableHead className="w-[150px]">Category</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {questions.map((question) => (
              <TableRow
                className=""
                onClick={() => navigate(`/problems/${question.id}`)}
              >
                <TableCell className="font-medium">{question.id}</TableCell>
                <TableCell>{question.title}</TableCell>
                <TableCell>{question.difficulty}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ProblemsList;
