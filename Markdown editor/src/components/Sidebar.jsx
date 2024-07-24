import React from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Sidebar = ({ editors, activeEditor, setActiveEditor, addEditor, deleteEditor }) => {
  return (
    <div className="w-64 bg-[#e0e0e0] px-0.5">
        <h1 className="text-2xl font-bold mb-3 p-3 bg-white">Markdown Editor</h1>
      <button
        onClick={addEditor}
        className="flex items-center mb-4 p-2 bg-blue-500 text-white rounded"
      >
        <FaPlus className="mr-2" /> Add Editor
      </button>
      <ul>
        {editors.map(editor => (
          <li
            key={editor.id}
            className={`py-2 px-4 mb-2 cursor-pointer ${
              editor.id === activeEditor ? "bg-blue-300" : "bg-[#f7f7f7]"
            }`}
            onClick={() => setActiveEditor(editor.id)}
          >
            <div className="flex justify-between items-center">
              <span>{editor.title}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteEditor(editor.id);
                }}
                className="text-red-500"
              >
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
