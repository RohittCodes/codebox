"use client";

import Editor from "@monaco-editor/react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  Select,
  SelectLabel,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { Play, Rocket, RocketIcon } from "lucide-react";

export const EditorComponent = () => {
  const [language, setLanguage] = useState("javascript");
  const { theme } = useTheme();

  const [editorInstance, setEditorInstance] = useState(null);
  const [monacoInstance, setMonacoInstance] = useState(null);

  const handleEditorChange = (value, event) => {
    // here is the current value
  };

  const handleEditorDidMount = (editor, monaco) => {
    // console.log("onMount: the editor instance:", editor);
    // console.log("onMount: the monaco instance:", monaco);

    setEditorInstance(editor);
    setMonacoInstance(monaco);

    monaco.editor.defineTheme("darkTheme", {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#09090bb9",
        "editorGutter.background": "#09090bb9",
        "editorLineNumber.foreground": "#fff",
        "editorCursor.foreground": "#ffffff",
        "editor.foreground": "#ffffff",
      },
    });

    monaco.editor.defineTheme("lightTheme", {
      base: "vs",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#EDF1F7",
        "editorGutter.background": "#EDF1F7",
        "editorLineNumber.foreground": "#333",
        "editorCursor.foreground": "#000000",
        "editor.foreground": "#000000",
      },
    });

    monaco.editor.setTheme(theme === "dark" ? "darkTheme" : "lightTheme");
  };

  useEffect(() => {
    if (monacoInstance) {
      monacoInstance.editor.setTheme(
        theme === "dark" ? "darkTheme" : "lightTheme"
      );
    }
  }, [theme, monacoInstance]);

  const handleEditorWillMount = (monaco) => {
    // console.log("beforeMount: the monaco instance:", monaco);
  };

  const handleEditorValidation = (markers) => {
    // model markers
    // markers.forEach(marker => console.log('onValidate:', marker.message));
  };

  const handleLanguageChange = (value) => {
    setLanguage(value);
    editorInstance.getModel().updateOptions({ language: value });
  };

  return (
    <div className="h-full w-3/4 flex flex-col gap-2">
      <div className="min-h-[48px] w-full flex justify-between items-center px-4 pt-2">
        <Select onValueChange={handleLanguageChange}>
          <SelectTrigger className="w-1/4">
            <SelectValue placeholder={language} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="javascript">JavaScript</SelectItem>
            <SelectItem value="typescript">TypeScript</SelectItem>
            <SelectItem value="python">Python</SelectItem>
            <SelectItem value="java">Java</SelectItem>
            <SelectItem value="csharp">C#</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" className="w-28">
          Run
        </Button>
      </div>
      <div className="h-full w-full">
        <Editor
          options={{
            minimap: { enabled: false },
            fontSize: 16,
            wordWrap: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            renderLineHighlight: "gutter",
          }}
          onChange={handleEditorChange}
          onMount={handleEditorDidMount}
          beforeMount={handleEditorWillMount}
          onValidate={handleEditorValidation}
          language={language}
          defaultValue="// some comment"
          className="h-full w-full mx-2 border border-border bg-background"
        />
      </div>
    </div>
  );
};
