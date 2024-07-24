import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import { v4 as uuidv4 } from "uuid";
import { FaTrash } from "react-icons/fa";

const App = () => {
  const [editors, setEditors] = useState([
    { id: uuidv4(), content: "# New Editor", title: "Editor 1" }
  ]);
  const [activeEditor, setActiveEditor] = useState(editors[0].id);

  const addEditor = () => {
    const newEditor = {
      id: uuidv4(),
      content: "# New Editor",
      title: `Editor ${editors.length + 1}`
    };
    setEditors([...editors, newEditor]);
    setActiveEditor(newEditor.id);
  };

  const deleteEditor = (id) => {
    setEditors(editors.filter(editor => editor.id !== id));
    if (activeEditor === id && editors.length > 1) {
      setActiveEditor(editors[0].id);
    }
  };

  const handleChangeContent = (id, newContent) => {
    setEditors(editors.map(editor =>
      editor.id === id ? { ...editor, content: newContent } : editor
    ));
  };

  return (
    <div className="flex h-screen">
      <Sidebar
        editors={editors}
        activeEditor={activeEditor}
        setActiveEditor={setActiveEditor}
        addEditor={addEditor}
        deleteEditor={deleteEditor}
      />
      <div className="flex-1 p-4">
        {editors.map(editor => (
          <Editor
            key={editor.id}
            id={editor.id}
            content={editor.content}
            onChange={(content) => handleChangeContent(editor.id, content)}
            isActive={editor.id === activeEditor}
            title={editor.title}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
