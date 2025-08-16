import React, { useState } from 'react';

function buildLinkedInJobURL(skills, location) {
  const keyword = encodeURIComponent(skills.join(' '));
  const loc = encodeURIComponent(location);
  return `https://www.linkedin.com/jobs/search/?keywords=${keyword}&location=${loc}`;
}

export default function LinkedInJobSearch() {
  const [skills, setSkills] = useState('');
  const [location, setLocation] = useState('');
  const [searchURL, setSearchURL] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (!skills || !location) return;
    const skillsArr = skills.split(',').map(s => s.trim()).filter(Boolean);
    const url = buildLinkedInJobURL(skillsArr, location);

    // Open LinkedIn job search in a new tab
    window.open(url, "_blank", "noopener,noreferrer");

    // Update state (optional to show the link)
    setSearchURL(url);
  };

  return (
    <div className="centered-container">
      <div className="job-search-card">
        <h2>Search LinkedIn Jobs</h2>
        <form onSubmit={handleSearch}>
          <label htmlFor="skills">Skills (comma separated)</label>
          <input
            id="skills"
            type="text"
            value={skills}
            onChange={e => setSkills(e.target.value)}
            placeholder="React, JavaScript, CSS"
          />
          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={e => setLocation(e.target.value)}
            placeholder="Delhi, India"
          />
          <button type="submit">
            Search on LinkedIn
          </button>
        </form>
        {searchURL && (
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <a
              href={searchURL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0a66c2", fontWeight: 600 }}
            >
              View jobs matching your skills on LinkedIn
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
