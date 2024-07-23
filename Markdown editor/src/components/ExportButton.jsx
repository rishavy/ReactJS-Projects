import React from 'react';

const ExportButton = ({ markdown }) => {
  const downloadFile = () => {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'README.md';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={downloadFile}
      className="mt-4 p-2 bg-blue-500 text-white rounded-md"
    >
      Export as README.md
    </button>
  );
};

export default ExportButton;
