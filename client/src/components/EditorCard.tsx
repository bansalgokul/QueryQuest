import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Editor } from "@monaco-editor/react";

type EditorCardProps = {
  questionID: string;
};

const EditorCard = ({ questionID }: EditorCardProps) => {
  const [code, setCode] = React.useState("");

  const handleRunCode = () => {
    console.log("Running code:", code);
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="text-sm py-2">
        <CardTitle>Code</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        {/* Scrollable Textarea */}
        <Editor
          className="w-full h-full rounded-md overflow-hidden"
          language="sql"
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value || "")}
          options={{
            padding: { top: 16 },
            formatOnType: true,
            autoClosingBrackets: "always",
          }}
        />
        <Button className="mt-4 w-fit" onClick={handleRunCode}>
          Run Code
        </Button>
      </CardContent>
    </Card>
  );
};

export default EditorCard;
