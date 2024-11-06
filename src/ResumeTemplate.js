import React, { useState } from 'react'
import "./ResumeTemplate.css"
import {MailOutline,Phone,Place,GitHub,LinkedIn} from '@mui/icons-material';

function ResumeTemplate({data}){


    const [visibleTemplate, setVisibleTemplate] = useState("template-1");

    const changeTemplate = (event) => {
      setVisibleTemplate(event.target.value);
    };



  return (
    <div>
    {/* <!-- Template Selector --> */}
      {/* Template Selector */}
      <div id="template-selector">
        <label htmlFor="template-select">Choose a template:</label>
        <select id="template-select" onChange={changeTemplate}>
          <option value="template-1">Elegant Academic Resume</option>
          <option value="template-2">Professional Resume</option>
        </select>
      </div>

   {/* <!-- Template 1: Elegant Academic Resume --> */}
   {visibleTemplate === "template-1" && (
    <div className="resume-container visible" id="template-1">
        {/* About Section */}
        <section className="about-section">
            <h1 id="name">{data.name}</h1>
            <div className='profile-info'>
                <p><MailOutline/> {data.email}</p>
                <p><Phone/> {data.phone}</p>
                <p><Place/>{data.address}</p>
                <p><GitHub/> {data.github}</p>
                <p><LinkedIn/> {data.linkedIn}</p>
            </div>
            <h3>Profile</h3>
            <p id="about">{data.profileSummary}</p>
        </section>

        {/* Work Experience Section */}
        <section className="experience-section">
            <h3>Work Experience</h3>
            {data.experiences.map((experience, index) => (
                <div className="experience-item" key={index}>
                    <div className='company'>
                        <div className='comp-name'>
                            <h4>{experience.role}</h4>
                            <p>{experience.companyName}</p>
                        </div>
                        <div className='company-date-place'>
                            <p>{experience.place} </p>
                            <p>{experience.startDate} - {experience.endDate}</p>
                        </div>
                    </div>
                    <p className='company-desc'>{experience.description}</p>
                </div>
            ))}
        </section>

        {/* Projects Section */}
        <section className="projects-section">
            <h3>Projects</h3>
            {data.projects.map((project, index) => (
            <div className="project-item" key={index}>
                <div className='proj-name'>
                    <h4>{project.name}</h4>
                    <p>{project.startDate} - {project.endDate}</p>
                </div>
                <p className="project-description">{project.description}</p>
                
            </div>
            ))}
        </section>

        {/* Education Section and Skills Section */}
        <div className='eduCerf'>
            <section className="education-section">
                
                <h3>Education</h3>
                {data.educations.map((education, index) => (
                <div className="education-item" key={index}>
                    <p><strong>{education.course}</strong></p>
                    <p>{education.clgSch} - {education.compDate}</p>
                </div>
                ))}
            </section>

            {/* Certifications Section */}
            <section className="certifications-section">
                <h3>Certifications</h3>
                <ul>
                {data.certifications.map((certificate, index) => (
                    <li key={index} className='certificate-names'>
                        {certificate.certName} {certificate.startDate} to {certificate.endDate}
                    </li>
                ))}
                </ul>
            </section>

            {/* Skills Section */}
           
        </div>
       

        {/* Achievements Section */}
        <section className="achievements-section">
            <h3>Achievements</h3>
            <ul>
            {data.achievements.map((achievement, index) => (
                <li key={index}>{achievement.achieve}  {achievement.achDate}</li>
            ))}
            </ul>
        </section>
        
        <div className='skills'>
            <section className="skills-section">
                    <h3>Skills</h3>
                    <ul>
                    {data.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                    </ul>
            </section>  

            <section className="skills-section">
                    <h3>Soft Skills</h3>
                    <ul>
                    {data.softSkills.map((Softskill, index) => (
                        <li key={index}>{Softskill}</li>
                    ))}
                    </ul>
            </section>  

            <section className="skills-section">
                    <h3>Languages</h3>
                    <ul>
                    {data.Languages.map((lang, index) => (
                        <li key={index}>{lang}</li>
                    ))}
                    </ul>
            </section>  
        </div>
        
    </div>
)}

    {visibleTemplate === "template-2" && (
        <div className="resume-container visible" id="template-2">
          <section className="about-section">
            <h1 id="name">{data.name}</h1>
            <div className="profile-info">
              <p><MailOutline /> {data.email}</p>
              <p><Phone /> {data.phone}</p>
              <p><Place /> {data.address}</p>
              <p><GitHub /> {data.github}</p>
              <p><LinkedIn /> {data.linkedIn}</p>
            </div>
            <h3>Profile</h3>
            <p id="about">{data.profileSummary}</p>
          </section>

          <section className="experience-section">
            <h3>Work Experience</h3>
            {data.experiences.map((experience, index) => (
              <div className="experience-item" key={index}>
                <div className="comp-name">
                  <h4>{experience.role}</h4>
                  <p>{experience.companyName} - {experience.place}</p>
                </div>
                <p className="company-date">{experience.startDate} - {experience.endDate}</p>
                <p className="company-desc">{experience.description}</p>
              </div>
            ))}
          </section>

          <section className="projects-section">
            <h3>Projects</h3>
            {data.projects.map((project, index) => (
              <div className="project-item" key={index}>
                <div className="proj-name">
                  <h4>{project.name}</h4>
                  <p>{project.startDate} - {project.endDate}</p>
                </div>
                <p className="project-description">{project.description}</p>
              </div>
            ))}
          </section>

          <section className="education-section">
            <h3>Education</h3>
            {data.educations.map((education, index) => (
              <div className="education-item" key={index}>
                <p><strong>{education.course}</strong></p>
                <p>{education.clgSch} - {education.compDate}</p>
              </div>
            ))}
          </section>

          <section className="achievements-section">
            <h3>Achievements</h3>
            <ul>
              {data.achievements.map((achievement, index) => (
                <li key={index}>{achievement.achieve} - {achievement.achDate}</li>
              ))}
            </ul>
          </section>

          <section className="skills-section">
            <h3>Skills</h3>
            <ul>
              {data.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>
        </div>
      )}


    
    
    </div>
  )
}

export default ResumeTemplate



 