import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ProblemCard from "../components/problems/ProblemCard";
import EditorCard from "../components/EditorCard";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../components/ui/resizable";
import ResultCard from "../components/ResultCard";

const EditorPage = () => {
  const params = useParams();
  const questionID = params.questionID as string;

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow">
        <ResizablePanelGroup
          direction="horizontal"
          className="w-full rounded-lg border md:min-w-[450px] gap-4 p-4"
        >
          <ResizablePanel defaultSize={40} className="border-none h-full">
            <ProblemCard questionID={questionID} />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={60}>
            <ResizablePanelGroup direction="vertical" className="gap-4">
              <ResizablePanel defaultSize={50} className="overflow-y-auto">
                <EditorCard questionID={questionID} />
                <p>ahsjfosajfjo</p>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={50}>
                <ResultCard />
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default EditorPage;
