import '../App.css'
import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuBar from '../Components/MenuBar';
export default function CV() {


    return(
        <>
            <MenuBar></MenuBar>
            <Paper
            style={{
              display: 'flex',
              padding: 100,
              paddingBottom:0 ,
              height: '90vh'
            }}
            >
              <div className="cv-container">
                <h1 className="cv-heading">CURRICULUM VITAE</h1>
                <div className="cv-section">
                  <h2 className="cv-section-heading">PERSONAL</h2>
                  <ul className="cv-details">
                    <li><strong>Name:</strong> Caleb Eardley</li>
                    <li><strong>Address:</strong> 904 1/2 W Lamme St, Bozeman MT, 59715</li>
                    <li><strong>Phone Number:</strong> +1(208)-369-7573</li>
                    <li><strong>Email:</strong> calebtheeardley@gmail.com</li>
                    <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/caleb-eardley-b10045234/">Caleb Eardley's LinkedIn</a></li>
                  </ul>
                </div>
                <div className="cv-section">
                  <h2 className="cv-section-heading">SUMMARY</h2>
                  <p>
                    I am currently a graduate student at Montana State University pursuing a Master's Degree in Computer
                    Science, and working as a graduate research assistant under Dr. Sean Yaw. I recieved my B.S. in Computer
                    Science from Idaho State University in 2022.
                  </p>
                </div>
                <div className="cv-section">
                  <h2 className="cv-section-heading">WORK EXPERIENCE</h2>
                  <p>
                    <strong>May 2022 – Aug 2022</strong><br />
                    <em>Software Engineer Intern</em><br />
                    Polly Insurance Company, Williston VT<br />
                    Worked in a scrum team implementing features in a react front
                    end, and a .NET back end. Attended daily scrum stand-ups,
                    retrospectives, and other standard scrum ceremonies.
                  </p>
                  <p>
                    <strong>Jan 2021 – June 2023</strong><br />
                    <em>Research Assistant</em><br />
                    Idaho State University, Pocatello ID<br />
                    Worked on a research project to study transitive relationships
                    between NP-Complete problems and their solutions through
                    reductions, and building an open-source tool to collect,
                    visualize, and approximate solutions to NP-Complete problems
                    and their reductions.
                  </p>
                  <p>
                    <strong>Jan 2021 – June 2023</strong><br />
                    <em>Graduate Research Assistant</em><br />
                    Montana State University, Bozeman MT<br />
                    Currently working with Dr. Shawn Yaw looking at network flow optimization and its applications in regard to carbon capture systems and optimization
                  </p>
                </div>
                <div className="cv-section">
                  <h2 className="cv-section-heading">EDUCATION</h2>
                  <p>
                    <strong>Jan 2020 – Dec 2022</strong><br />
                    <em>Bachelor of Science in Computer Science</em><br />
                    Idaho State University, Pocatello ID<br />
                    <strong>GPA:</strong> 3.2
                  </p>
                  <p>
                    <strong>August 2023 – Current</strong><br />
                    <em>Masters of Science in Computer Science (Pursueing)</em><br />
                    Montana State University, Bozeman MT<br />
                  </p>
                </div>
              </div>
            </Paper>
        </>
    )
}