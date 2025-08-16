function JobResults({ jobs, userSkills }) {
  return (
    <div className="job-results">
      <h2>Job Matches</h2>
      <div className="results-container">
        {jobs.map(job => (
          <div key={job.id} className="job-card">
            <div className="job-header">
              <h3>{job.title}</h3>
              <span className="company">{job.company}</span>
              <span className="location">{job.location}</span>
            </div>
            
            <div className="match-meter">
              <div className="meter-bar" style={{ width: `${job.match}%` }}></div>
              <span>{job.match}% Match</span>
            </div>
            
            <div className="job-skills">
              <h4>Required Skills:</h4>
              <div className="skills-list">
                {job.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className={`skill-tag ${userSkills.includes(skill) ? 'matched' : ''}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <button className="apply-btn">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobResults;