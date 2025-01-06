import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const ResultCard = () => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="text-sm py-2">
        <CardTitle>Results</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col"></CardContent>
    </Card>
  );
};

export default ResultCard;
