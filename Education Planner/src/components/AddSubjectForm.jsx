import React, { useState } from 'react';

const AddSubjectForm = ({ addSubject }) => {
  const [subject, setSubject] = useState('');
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subject.trim() === '') return;

    addSubject({ subject, hours, minutes });
    setSubject('');
    setHours(0);
    setMinutes(0);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-4 p-4 border rounded shadow-md">   
      <input
        type="text"
        placeholder="Subject Name"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="p-2 px-20 border rounded"
      />
      <div className="flex gap-2">
        <input
          type="number"
          placeholder="Hours"
          value={hours}
          min="0"
          onChange={(e) => setHours(Number(e.target.value))}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Minutes"
          value={minutes}
          min="0"
          max="59"
          onChange={(e) => setMinutes(Number(e.target.value))}
          className="p-2 border rounded"
        />
      </div>
      <button type="submit" className="p-2 px-20 bg-blue-500 text-white rounded">Add Subject</button>
    </form>
  );
};

export default AddSubjectForm;
