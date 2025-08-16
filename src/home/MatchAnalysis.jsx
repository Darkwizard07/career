function MatchAnalysis({ userSkills, jobs }) {
  // Calculate overall match statistics
  const totalJobs = jobs.length;
  const strongMatches = jobs.filter(job => job.match >= 75).length;
  const mediumMatches = jobs.filter(job => job.match >= 50 && job.match < 75).length;
  const weakMatches = jobs.filter(job => job.match < 50).length;

  // Find most common missing skills
  const missingSkills = {};
  jobs.forEach(job => {
    job.skills.forEach(skill => {
      if (!userSkills.includes(skill)) {
        missingSkills[skill] = (missingSkills[skill] || 0) + 1;
      }
    });
  });

  const topMissingSkills = Object.entries(missingSkills)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(item => item[0]);

  return (
    <div className="match-analysis">
      <h2>Your Match Analysis</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>{totalJobs}</h3>
          <p>Total Jobs Found</p>
        </div>
        <div className="stat-card strong">
          <h3>{strongMatches}</h3>
          <p>Strong Matches (75%+)</p>
        </div>
        <div className="stat-card medium">
          <h3>{mediumMatches}</h3>
          <p>Medium Matches (50-74%)</p>
        </div>
        <div className="stat-card weak">
          <h3>{weakMatches}</h3>
          <p>Weak Matches (&lt;50%)</p>
        </div>
      </div>
      
      {topMissingSkills.length > 0 && (
        <div className="skills-recommendation">
          <h3>Consider Learning:</h3>
          <div className="skills-list">
            {topMissingSkills.map((skill, index) => (
              <span key={index} className="skill-tag recommended">{skill}</span>
            ))}
          </div>
          <p>These skills would increase your match rate for more jobs.</p>
        </div>
      )}
    </div>
  );
}

export default MatchAnalysis;