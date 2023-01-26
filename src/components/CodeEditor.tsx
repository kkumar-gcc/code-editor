// CodeEditorWindow.js

import React, { useState } from "react";
import Editor from "@monaco-editor/react";
interface CodeEditorProps {
    onChange: any,
    language?: string,
    code: string,
    theme?: string;
}
const CodeEditor = ({ onChange, language, code, theme }: CodeEditorProps) => {
    const [value, setValue] = useState(code || "");

    const handleEditorChange = (value: any) => {
        setValue(value);
        onChange("code", value);
    };

    return (
        <div className="overlay overflow-hidden w-full h-full shadow-4xl">
            <Editor
                height={`100%`}
                width={`100%`}
                language={language || "markdown"}
                value={value}
                theme={theme ||"vs-dark"}
                defaultValue="# Start Writing"
                onChange={handleEditorChange}
            />
        </div>
    );
};
export default CodeEditor;
