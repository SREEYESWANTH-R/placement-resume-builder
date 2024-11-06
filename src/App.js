import React, { useState } from 'react';
import './App.css';
import ResumeTemplate from './ResumeTemplate';

function App() {
  const [resumeData, setResumeData] = useState({
    name: '',
    email: '',
    phone: '',
    address:'',
    github:'',
    linkedIn:'',
    profileSummary: '',
    skills: [''],
    softSkills:[''],
    Languages:[''],
    educations: [{course:'',clgSch:'',compDate:''}],
    experiences: [{ companyName: '', role: '', description: '', startDate: '', endDate: '', place: '' }],
    achievements: [{achieve:'', achDate:''}],
    projects: [{ name: '', description: '', startDate: '', endDate: '' }],
    certifications:[{certName:'', startDate:'',endDate:''}]
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
  
    if (field) {
      updatedArray[index][field] = e.target.value;
    } else {
      // Directly assign the value for simple arrays like `skills`
      updatedArray[index] = e.target.value;
    }
  
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
        <label>Profile / Objective:</label>
        <div className='input-group'>
         
          <input type="text" name="name" value={resumeData.name} onChange={handleChange} placeholder='Name'/>

          <input type="email" name="email" value={resumeData.email} onChange={handleChange} placeholder='Email' />

          <input type="tel" name="phone" value={resumeData.phone} onChange={handleChange} placeholder='Phone'/>

          <input type="text" name="github" value={resumeData.github} onChange={handleChange} placeholder='Github'/>

          <input type="text" name="linkedIn" value={resumeData.linkedIn} onChange={handleChange} placeholder='LinkedIn'/>

          <input type="text" name="address" value={resumeData.address} onChange={handleChange} placeholder='Address'/>

          <textarea name="profileSummary" value={resumeData.profileSummary} onChange={handleChange} placeholder='Profile Summary'/>
        </div>

        <label>Work Experiences / Internships:</label>
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

        <label>Education:</label>
        {resumeData.educations.map((edu, index) => (
          <div key={index} className="input-group">
            <input
              type="text"
              placeholder="Course"
              value={edu.course}
              onChange={(e) => handleArrayChange(e, index, 'course', 'educations')}
            />
            <input
              type="text"
              placeholder="College/School"
              value={edu.clgSch}
              onChange={(e) => handleArrayChange(e, index, 'clgSch', 'educations')}
            />
            <input
              type="date"
              placeholder="Completed Date"
              value={edu.compDate}
              onChange={(e) => handleArrayChange(e, index, 'compDate', 'educations')}
            />
           
          </div>
        ))}
        <button onClick={() => addItem('educations', { course: '', clgSch: '', compDate: ''})}>Add Education</button>

        <label>Technical Skills:</label>
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

        <label>Soft Skills:</label>
        {resumeData.softSkills.map((softskill, index) => (
          <div key={index} className="input-group">
            <input
              type="text"
              value={softskill}
              onChange={(e) => handleArrayChange(e, index, null, 'softSkills')}
            />
          </div>
        ))}
        <button onClick={() => addItem('softSkills', '')}>Add Soft Skill</button>

        <label>Languages:</label>
        {resumeData.Languages.map((language, index) => (
          <div key={index} className="input-group">
            <input
              type="text"
              value={language}
              onChange={(e) => handleArrayChange(e, index, null, 'Languages')}
            />
          </div>
        ))}
        <button onClick={() => addItem('Languages', '')}>Add Soft Skill</button>

        <label>Certifications:</label>
        {resumeData.certifications.map((certificate,index)=>(
          <div key={index} className='input-group'>
            <input 
              type='text' 
              placeholder='Certification' 
              name='certName' 
              value={certificate.certName}
              onChange={(e) => handleArrayChange(e, index, 'certName', 'certifications')}
            />
            <input 
              type='date' 
              placeholder='Start Date' 
              name='startDate' 
              value={certificate.startDate}
              onChange={(e) => handleArrayChange(e, index, 'startDate', 'certifications')}
            />
            <input 
              type='date' 
              placeholder='End Date' 
              name='endDate' 
              value={certificate.endDate}
              onChange={(e) => handleArrayChange(e, index, 'endDate', 'certifications')}
            />
          </div>
        ))}
        <button onClick={() => addItem('certifications', { certName:'', startDate:'',endDate:'' })}>Add Certificates</button>

        <label>Achievements:</label>
        {resumeData.achievements.map((ach, index) => (
          <div key={index} className="input-group">
            <input
              type="text"
              placeholder="Achievement"
              value={ach.achieve}
              onChange={(e) => handleArrayChange(e, index, 'achieve', 'achievements')}
            />
            <input
              type="date"
              placeholder="Date"
              value={ach.achDate}
              onChange={(e) => handleArrayChange(e, index, 'achDate', 'achievements')}
            />
          </div>
        ))}
        <button onClick={() => addItem('achievements', { achieve: '', achDate: '' })}>Add Achievement</button>

      </div>

      <ResumeTemplate data={resumeData} />
    </div>
  );
}

export default App;
