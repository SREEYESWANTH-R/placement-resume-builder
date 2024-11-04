import React, { useState } from 'react'
import "./ResumeTemplate.css"

function ResumeTemplate({data}){


    const [visibleTemplate, setVisibleTemplate] = useState("template-1");

    const changeTemplate = (event) => {
      setVisibleTemplate(event.target.value);
    };



  return (
    <div>
    {/* <!-- Template Selector --> */}
    <div id="template-selector">
        <label for="template-select">Choose a template:</label>
        <select id="template-select" onchange={changeTemplate}>
            <option value="template-1">Elegant Academic Resume</option>
            <option value="template-2">Minimalistic Modern Resume</option>
            <option value="template-3">Classic Resume with Columns</option>
            <option value="template-4">Bold and Vibrant Resume</option>
            <option value="template-5">Clean & Professional Resume</option>
        </select>
    </div>

    {/* <!-- Template 1: Elegant Academic Resume --> */}
    <div className={`resume-container ${visibleTemplate === "template-1" ? "visible" : "hidden"}`} id="template-1">
      {/* About Section */}
      <section className="about-section">
        <h1 id="name">{data.name}</h1>
        <p id="about">{data.profileSummary}</p>
      </section>

      {/* Work Experience Section */}
      <section className="experience-section">
        <h3>Work Experience</h3>
        {data.experiences.map((experience, index) => (
          <div className="experience-item" key={index}>
            <h4>{experience.role}</h4>
            <p className="company">
              {experience.companyName} - {experience.startDate} to {experience.endDate}
            </p>
            <p>{experience.description}</p>
          </div>
        ))}
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h3>Projects</h3>
        {data.projects.map((project, index) => (
          <div className="project-item" key={index}>
            <h4>{project.name}</h4>
            <p className="project-description">{project.description}</p>
            <p>{project.startDate} to {project.endDate}</p>
          </div>
        ))}
      </section>

      {/* Education Section */}
      <section className="education-section">
        <h3>Education</h3>
        <div className="education-item">
          <p>{data.education}</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h3>Skills</h3>
        <ul>
          {data.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <h3>Achievements</h3>
        <ul>
          {data.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </section>
    </div>

    {/* <!-- Template 2: Minimalistic Modern Resume --> */}
    <div  className={`resume-container ${visibleTemplate === "template-1" ? "visible" : "hidden"}`} id="template-2" >
        {/* <!-- About Section --> */}
        <section className="about-section">
            <h1 id="name">Jane Smith</h1>
            <h2 id="title">Data Science Enthusiast</h2>
            <p id="about">A results-driven data science student with a focus on machine learning and data analysis. Dedicated to leveraging data to solve real-world problems.</p>
        </section>

        {/* <!-- Work Experience Section --> */}
        <section className="experience-section">
            <h3>Experience</h3>
            <div className="experience-item">
                <h4>Data Analyst Intern</h4>
                <p className="company">XYZ Analytics - Jan 2023 to May 2023</p>
                <ul>
                    <li>Developed data visualizations that supported key business decisions.</li>
                    <li>Assisted in developing machine learning models for data prediction.</li>
                </ul>
            </div>
        </section>

        {/* <!-- Projects Section --> */}
        <section className="projects-section">
            <h3>Projects</h3>
            <div className="project-item">
                <h4>Customer Sentiment Analysis</h4>
                <p className="project-description">Analyzed customer reviews to gauge satisfaction and product feedback using Python and NLP libraries.</p>
            </div>
        </section>

        {/* <!-- Skills Section --> */}
        <section className="skills-section">
            <h3>Skills</h3>
            <p>Python, SQL, Data Visualization, Machine Learning, Tableau</p>
        </section>

        {/* <!-- Achievements Section --> */}
        <section className="achievements-section">
            <h3>Achievements</h3>
            <ul>
                <li>Received the Outstanding Intern Award at XYZ Analytics.</li>
                <li>Published a research paper on data ethics in AI.</li>
            </ul>
        </section>
    </div>

    {/* <!-- Template 3: classNameic Resume with Columns --> */}
    <div  className={`resume-container ${visibleTemplate === "template-1" ? "visible" : "hidden"}`} id="template-3" >
         {/* <!-- Sidebar Section --> */}
         <aside className="sidebar">
            <h1 id="name">Alex Brown</h1>
            <p id="title">Software Developer</p>
            <p id="about">Passionate software developer skilled in front-end and back-end development, with experience in building efficient, scalable applications.</p>

            {/* <!-- Skills --> */}
            <h3>Skills</h3>
            <ul>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>MySQL</li>
            </ul>
        </aside>

        {/* <!-- Main Content Section --> */}
        <main className="content">
            {/* <!-- Work Experience --> */}
            <section className="experience-section">
                <h3>Work Experience</h3>
                <div className="experience-item">
                    <h4>Full-Stack Developer</h4>
                    <p className="company">Tech Solutions Inc - Mar 2021 to Present</p>
                    <ul>
                        <li>Built and maintained web applications using MERN stack.</li>
                        <li>Collaborated with designers and product managers to create efficient solutions.</li>
                    </ul>
                </div>
            </section>

            {/* <!-- Education --> */}
            <section className="education-section">
                <h3>Education</h3>
                <div className="education-item">
                    <h4>Bachelor of Science in Computer Science</h4>
                    <p className="institution">State University - Graduated May 2020</p>
                </div>
            </section>
        </main>
    </div>


    {/* <!-- Template 4: Bold and Vibrant Resume --> */}
<div  className={`resume-container ${visibleTemplate === "template-1" ? "visible" : "hidden"}`} id="template-4" >
    <header className="header-section">
        <h1 id="name">Taylor White</h1>
        <h2 id="title">Software Engineer</h2>
        <p id="about">Creative and analytical software engineer with expertise in full-stack development. Passionate about technology, coding, and creating seamless user experiences.</p>
    </header>

    <div className="content-wrapper">
        {/* <!-- Left Column --> */}
        <div className="left-column">
            {/* <!-- Skills Section --> */}
            <section className="skills-section">
                <h3>Skills</h3>
                <ul style={{color: "white"}}>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>React & Node.js</li>
                    <li>Cloud Computing</li>
                </ul>
            </section>

            {/* <!-- Achievements Section --> */}
            <section className="achievements-section">
                <h3>Achievements</h3>
                <ul style={{color: "white"}}>
                    <li>Best Developer Award - 2023</li>
                    <li>Top 10 in Hackathon X</li>
                </ul>
            </section>
        </div>

        {/* <!-- Right Column --> */}
        <div className="right-column">
            {/* <!-- Work Experience Section --> */}
            <section className="experience-section">
                <h3>Work Experience</h3>
                <div className="experience-item">
                    <h4>Software Engineer</h4>
                    <p className="company">Tech Labs - Jan 2021 to Present</p>
                    <ul style={{color: "white"}}>
                        <li>Implemented features that improved user retention by 25%.</li>
                        <li>Led a team to develop a cross-platform mobile app.</li>
                    </ul>
                </div>
            </section>

            {/* <!-- Projects Section --> */}
            <section className="projects-section">
                <h3>Projects</h3>
                <div className="project-item">
                    <h4>Real-Time Chat App</h4>
                    <p className="project-description">Built a scalable chat application using React, Node.js, and WebSocket.</p>
                </div>
            </section>

            {/* <!-- Education Section --> */}
            <section className="education-section">
                <h3>Education</h3>
                <div className="education-item">
                    <h4>Bachelor of Science in Computer Science</h4>
                    <p className="institution">Tech University - Graduated 2020</p>
                </div>
            </section>
        </div>
        </div>
    </div>

    {/* <!-- Template 5: Clean & Professional Resume --> */}
<div  className={`resume-container ${visibleTemplate === "template-1" ? "visible" : "hidden"}`} id="template-5" >
    <div className="sidebar">
        <h1 id="name">Jordan Lee</h1>
        <h2 id="title">Data Scientist</h2>
        <p id="about">Dedicated data scientist with a strong background in machine learning, statistical analysis, and a passion for uncovering insights from complex datasets.</p>

        {/* <!-- Skills Section --> */}
        <section className="skills-section">
            <h3>Skills</h3>
            <ul>
                <li>Python</li>
                <li>Machine Learning</li>
                <li>Data Visualization</li>
                <li>SQL</li>
            </ul>
        </section>

        {/* <!-- Achievements Section --> */}
        <section className="achievements-section">
            <h3>Achievements</h3>
            <ul style={{color: "white"}}>
                <li>Published Research in ML Journal</li>
                <li>Data Science Certification - 2023</li>
            </ul>
        </section>
    </div>

    <div className="main-content">
        {/* <!-- Work Experience Section --> */}
        <section className="experience-section">
            <h3>Work Experience</h3>
            <div className="experience-item">
                <h4>Data Scientist</h4>
                <p className="company">Insight Analytics - March 2021 to Present</p>
                <ul>
                    <li>Developed predictive models that increased revenue by 15%.</li>
                    <li>Created data pipelines for data ingestion and processing.</li>
                </ul>
            </div>
        </section>

        {/* <!-- Projects Section --> */}
        <section className="projects-section">
            <h3>Projects</h3>
            <div className="project-item">
                <h4>Customer Churn Prediction Model</h4>
                <p className="project-description">Built and deployed a model using Python to predict customer churn, improving retention by 12%.</p>
            </div>
        </section>

        {/* <!-- Education Section --> */}
        <section className="education-section">
            <h3>Education</h3>
            <div className="education-item">
                <h4>Master's in Data Science</h4>
                <p className="institution">University of Data Science - Graduated 2020</p>
            </div>
        </section>
    </div>
    </div>
    </div>
  )
}

export default ResumeTemplate