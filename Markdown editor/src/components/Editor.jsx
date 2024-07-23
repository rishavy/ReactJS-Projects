import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import ExportButton from './ExportButton';

const Editor = () => {
  const [markdown, setMarkdown] = useState('');

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Editor */}
      <div className="flex-1 p-4 border-r border-gray-300">
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          className="w-full h-full p-2 border border-gray-300 rounded-md"
          placeholder="Write your Markdown here..."
        />
        <ExportButton markdown={markdown} />
      </div>
      {/* Preview */}
      <div className="flex-1 p-4">
        <ReactMarkdown className="prose lg:prose-xl">{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Editor;
