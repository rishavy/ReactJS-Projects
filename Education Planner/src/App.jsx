import React from 'react';
import AddSubjectForm from './components/AddSubjectForm';
import SubjectList from './components/SubjectList';
import localStorage from './utils/localStorage';

const App = () => {
  const [subjects, setSubjects] = localStorage('subjects', []);

  const addSubject = (subject) => {
    setSubjects([...subjects, subject]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Education Planner</h1>
      <AddSubjectForm addSubject={addSubject} />
      <SubjectList subjects={subjects} setSubjects={setSubjects} />
    </div>
  );
};

export default App;
