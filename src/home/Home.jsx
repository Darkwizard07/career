import { useState } from 'react';
import ResumeUpload from './ResumeUpload';
import JobSearch from './JobSearch';
import JobResults from './JobResults';
import MatchAnalysis from './MatchAnalysis';

function Home() {
  const [userSkills, setUserSkills] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [activeTab, setActiveTab] = useState('upload');

  const handleResumeParsed = (skills) => {
    setUserSkills(skills);
    setActiveTab('search');
  };

  const handleJobSearch = (searchResults) => {
    setJobs(searchResults);
    setActiveTab('results');
  };

  return (
    <>
      <header className="app-header">
        <h1>JobMatch</h1>
        <nav className="tabs">
          <button 
            className={activeTab === 'upload' ? 'active' : ''}
            onClick={() => setActiveTab('upload')}
          >
            Upload Resume
          </button>
          <button 
            className={activeTab === 'search' ? 'active' : ''}
            onClick={() => setActiveTab('search')}
            disabled={!userSkills.length}
          >
            Job Search
          </button>
          <button 
            className={activeTab === 'results' ? 'active' : ''}
            onClick={() => setActiveTab('results')}
            disabled={!jobs.length}
          >
            Results
          </button>
        </nav>
      </header>

      <main className="main-content">
        {activeTab === 'upload' && (
          <ResumeUpload onResumeParsed={handleResumeParsed} />
        )}

        {activeTab === 'search' && (
          <JobSearch userSkills={userSkills} onSearchComplete={handleJobSearch} />
        )}

        {activeTab === 'results' && jobs.length > 0 && (
          <>
            <MatchAnalysis userSkills={userSkills} jobs={jobs} />
            <JobResults jobs={jobs} userSkills={userSkills} />
          </>
        )}
      </main>
    </>
  );
}

export default Home;