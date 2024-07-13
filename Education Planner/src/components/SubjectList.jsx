import React, { useState } from 'react';

const SubjectList = ({ subjects, setSubjects }) => {
  const [editIndex, setEditIndex] = useState(-1);
  const [editSubject, setEditSubject] = useState('');
  const [editHours, setEditHours] = useState(0);
  const [editMinutes, setEditMinutes] = useState(0);

  const handleEdit = (index) => {
    const subject = subjects[index];
    setEditIndex(index);
    setEditSubject(subject.subject);
    setEditHours(subject.hours);
    setEditMinutes(subject.minutes);
  };

  const handleSave = (index) => {
    const updatedSubjects = subjects.map((sub, i) =>
      i === index ? { ...sub, subject: editSubject, hours: editHours, minutes: editMinutes } : sub
    );
    setSubjects(updatedSubjects);
    setEditIndex(-1);
  };

  const handleDelete = (index) => {
    const updatedSubjects = subjects.filter((_, i) => i !== index);
    setSubjects(updatedSubjects);
  };

  return (
    <ul className="list-none p-4">
      {subjects.map((sub, index) => (
        <li key={index} className="flex items-center justify-between p-2 border-b">
          {editIndex === index ? (
            <>
              <input
                type="text"
                value={editSubject}
                onChange={(e) => setEditSubject(e.target.value)}
                className="p-2 border rounded"
              />
              <div className="flex gap-2">
                <input
                  type="number"
                  value={editHours}
                  min="0"
                  onChange={(e) => setEditHours(Number(e.target.value))}
                  className="p-2 border rounded"
                />
                <input
                  type="number"
                  value={editMinutes}
                  min="0"
                  max="59"
                  onChange={(e) => setEditMinutes(Number(e.target.value))}
                  className="p-2 border rounded"
                />
              </div>
              <button onClick={() => handleSave(index)} className="p-2 bg-green-500 text-white rounded">Save</button>
            </>
          ) : (
            <>
              <span>{index + 1}. {sub.subject} - {sub.hours}h {sub.minutes}m</span>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(index)} className="p-2 bg-yellow-500 text-white rounded">Edit</button>
                <button onClick={() => handleDelete(index)} className="p-2 bg-red-500 text-white rounded">Delete</button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default SubjectList;
