import { Question, useGetAllQuestions } from "../api";
import Header from "../components/Header";
import ProblemsList from "../components/problems/ProblemsList";

const ProblemsPage = () => {
  const { data, isLoading, isError } = useGetAllQuestions({
    page: 0,
    size: 10,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error fetching data</div>;
  }

  const problems = data.content as Question[];

  return (
    <div>
      <Header />
      <ProblemsList questions={problems} />
    </div>
  );
};

export default ProblemsPage;
