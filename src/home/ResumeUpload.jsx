import { useCallback, useState } from 'react';

function ResumeUpload({ onResumeParsed }) {
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a file');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      // Simulate skill extraction
      const mockSkills = ['React', 'JavaScript', 'HTML', 'CSS', 'Redux'];
      onResumeParsed(mockSkills);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <form className="resume-upload" onSubmit={handleSubmit}>
      <h2>Upload Your Resume</h2>
      <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Extracting...' : 'Upload & Extract Skills'}
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default ResumeUpload;
