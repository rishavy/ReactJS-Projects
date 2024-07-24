import React from "react";
import MarkdownEditor from "@uiw/react-markdown-editor";
import "../components/markdown-editor.css";

const Editor = ({ id, content, onChange, isActive, title }) => {
  return (
    isActive && (
      <div className="mb-4 h-[500px]">
        <h2 className="text-xl font-bold">{title}</h2>
        <MarkdownEditor
          value={content}
          onChange={(value) => onChange(value)}
          height="610px"
        />
      </div>
    )
  );
};

export default Editor;
