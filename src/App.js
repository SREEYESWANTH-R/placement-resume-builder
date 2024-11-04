import React, { useState } from 'react';
import './App.css';
import ResumeTemplate from './ResumeTemplate';

function App() {
  const [resumeData, setResumeData] = useState({
    name: '',
    email: '',
    phone: '',
    profileSummary: '',
    skills: [''],
    education: '',
    experiences: [{ companyName: '', role: '', description: '', startDate: '', endDate: '', place: '' }],
    achievements: [''],
    projects: [{ name: '', description: '', startDate: '', endDate: '' }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData({
      ...resumeData,
      [name]: value,
    });
  };

  const handleArrayChange = (e, index, field, section) => {
    const updatedArray = [...resumeData[section]];
    updatedArray[index][field] = e.target.value;
    setResumeData({ ...resumeData, [section]: updatedArray });
  };

  const addItem = (section, defaultItem) => {
    setResumeData({
      ...resumeData,
      [section]: [...resumeData[section], defaultItem],
    });
  };

  return (
    <div className="App">
      <div className="input-form">
        <h2>Enter Resume Details</h2>

        <label>Name:</label>
        <input type="text" name="name" value={resumeData.name} onChange={handleChange} />

        <label>Email:</label>
        <input type="email" name="email" value={resumeData.email} onChange={handleChange} />

        <label>Phone:</label>
        <input type="tel" name="phone" value={resumeData.phone} onChange={handleChange} />

        <label>Profile Summary:</label>
        <textarea name="profileSummary" value={resumeData.profileSummary} onChange={handleChange} />

        <label>Skills:</label>
        {resumeData.skills.map((skill, index) => (
          <div key={index} className="input-group">
            <input
              type="text"
              value={skill}
              onChange={(e) => handleArrayChange(e, index, null, 'skills')}
            />
          </div>
        ))}
        <button onClick={() => addItem('skills', '')}>Add Skill</button>

        <label>Education:</label>
        <textarea name="education" value={resumeData.education} onChange={handleChange} />

        <label>Experiences:</label>
        {resumeData.experiences.map((exp, index) => (
          <div key={index} className="input-group">
            <input
              type="text"
              placeholder="Company Name"
              value={exp.companyName}
              onChange={(e) => handleArrayChange(e, index, 'companyName', 'experiences')}
            />
            <input
              type="text"
              placeholder="Role"
              value={exp.role}
              onChange={(e) => handleArrayChange(e, index, 'role', 'experiences')}
            />
            <input
              type="text"
              placeholder="Place"
              value={exp.place}
              onChange={(e) => handleArrayChange(e, index, 'place', 'experiences')}
            />
            <textarea
              placeholder="Description"
              value={exp.description}
              onChange={(e) => handleArrayChange(e, index, 'description', 'experiences')}
            />
            <input
              type="date"
              placeholder="Start Date"
              value={exp.startDate}
              onChange={(e) => handleArrayChange(e, index, 'startDate', 'experiences')}
            />
            <input
              type="date"
              placeholder="End Date"
              value={exp.endDate}
              onChange={(e) => handleArrayChange(e, index, 'endDate', 'experiences')}
            />
          </div>
        ))}
        <button onClick={() => addItem('experiences', { companyName: '', role: '', description: '', startDate: '', endDate: '', place: '' })}>Add Experience</button>

        <label>Achievements:</label>
        {resumeData.achievements.map((achievement, index) => (
          <div key={index} className="input-group">
            <input
              type="text"
              value={achievement}
              onChange={(e) => handleArrayChange(e, index, null, 'achievements')}
            />
          </div>
        ))}
        <button onClick={() => addItem('achievements', '')}>Add Achievement</button>

        <label>Projects:</label>
        {resumeData.projects.map((project, index) => (
          <div key={index} className="input-group">
            <input
              type="text"
              placeholder="Project Name"
              value={project.name}
              onChange={(e) => handleArrayChange(e, index, 'name', 'projects')}
            />
            <textarea
              placeholder="Description"
              value={project.description}
              onChange={(e) => handleArrayChange(e, index, 'description', 'projects')}
            />
            <input
              type="date"
              placeholder="Start Date"
              value={project.startDate}
              onChange={(e) => handleArrayChange(e, index, 'startDate', 'projects')}
            />
            <input
              type="date"
              placeholder="End Date"
              value={project.endDate}
              onChange={(e) => handleArrayChange(e, index, 'endDate', 'projects')}
            />
          </div>
        ))}
        <button onClick={() => addItem('projects', { name: '', description: '', startDate: '', endDate: '' })}>Add Project</button>
      </div>

      <ResumeTemplate data={resumeData} />
    </div>
  );
}

export default App;
