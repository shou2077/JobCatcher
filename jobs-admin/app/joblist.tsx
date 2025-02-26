import React, { useState, useEffect } from 'react';
import { AlertCircle, Briefcase, ChevronRight, FileText, Home, Settings, User, Bell } from 'lucide-react';

const AdminDashboard = () => {
  // Sample job data - in a real app, this would come from an API
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeMenu, setActiveMenu] = useState('jobs');

  useEffect(() => {
    // Simulate API call to fetch jobs
    setTimeout(() => {
      setJobs([
        {
          id: 1,
          title: "Senior Frontend Developer",
          company: "TechCorp Inc.",
          location: "San Francisco, CA",
          type: "Full-time",
          salary: "$120,000 - $150,000",
          posted: "2025-02-24T08:30:00",
          platform: "LinkedIn",
          matchScore: 92,
          isNew: true,
        },
        {
          id: 2,
          title: "Backend Engineer",
          company: "DataFlow Systems",
          location: "Remote",
          type: "Full-time",
          salary: "$115,000 - $135,000",
          posted: "2025-02-24T10:15:00",
          platform: "Indeed",
          matchScore: 87,
          isNew: true,
        },
        {
          id: 3,
          title: "Full Stack Developer",
          company: "Innovate Solutions",
          location: "New York, NY",
          type: "Full-time",
          salary: "$110,000 - $140,000",
          posted: "2025-02-23T14:45:00",
          platform: "Glassdoor",
          matchScore: 78,
          isNew: false,
        },
        {
          id: 4,
          title: "DevOps Engineer",
          company: "Cloud Systems Ltd",
          location: "Chicago, IL",
          type: "Full-time",
          salary: "$125,000 - $145,000",
          posted: "2025-02-23T09:30:00",
          platform: "LinkedIn",
          matchScore: 65,
          isNew: false,
        },
        {
          id: 5,
          title: "Machine Learning Engineer",
          company: "AI Innovations",
          location: "Remote",
          type: "Full-time",
          salary: "$130,000 - $160,000",
          posted: "2025-02-22T16:20:00",
          platform: "Indeed",
          matchScore: 71,
          isNew: false,
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  // Format date to relative time (e.g., "2 hours ago")
  const formatRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
  };

  // Get platform badge color
  const getPlatformColor = (platform) => {
    switch (platform) {
      case 'LinkedIn':
        return 'bg-blue-100 text-blue-800';
      case 'Indeed':
        return 'bg-blue-50 text-blue-600';
      case 'Glassdoor':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Get match score color
  const getScoreColor = (score) => {
    if (score >= 90) return 'bg-green-100 text-green-800';
    if (score >= 70) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <h1 className="text-xl font-semibold text-gray-800">Job Auto-Apply</h1>
          <p className="text-sm text-gray-500">Admin Dashboard</p>
        </div>
        
        <nav className="mt-4">
          <div 
            className={`flex items-center px-4 py-3 cursor-pointer ${activeMenu === 'dashboard' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
            onClick={() => setActiveMenu('dashboard')}
          >
            <Home className="w-5 h-5 mr-3" />
            <span>Dashboard</span>
          </div>
          
          <div 
            className={`flex items-center px-4 py-3 cursor-pointer ${activeMenu === 'jobs' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
            onClick={() => setActiveMenu('jobs')}
          >
            <Briefcase className="w-5 h-5 mr-3" />
            <span>Job Listings</span>
          </div>

          <div 
            className={`flex items-center px-4 py-3 cursor-pointer ${activeMenu === 'resume' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
            onClick={() => setActiveMenu('resume')}
          >
            <FileText className="w-5 h-5 mr-3" />
            <span>CV Management</span>
          </div>

          <div 
            className={`flex items-center px-4 py-3 cursor-pointer ${activeMenu === 'notifications' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
            onClick={() => setActiveMenu('notifications')}
          >
            <Bell className="w-5 h-5 mr-3" />
            <span>Notifications</span>
          </div>
          
          <div 
            className={`flex items-center px-4 py-3 cursor-pointer ${activeMenu === 'settings' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
            onClick={() => setActiveMenu('settings')}
          >
            <Settings className="w-5 h-5 mr-3" />
            <span>Settings</span>
          </div>
          
          <div 
            className={`flex items-center px-4 py-3 cursor-pointer ${activeMenu === 'profile' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
            onClick={() => setActiveMenu('profile')}
          >
            <User className="w-5 h-5 mr-3" />
            <span>Profile</span>
          </div>
        </nav>
      </div>
      
      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-700">
            {activeMenu === 'jobs' ? 'Job Listings' : 'Dashboard'}
          </h2>
          
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Refresh Jobs
            </button>
          </div>
        </header>
        
        <main className="p-6">
          {activeMenu === 'jobs' && (
            <>
              <div className="mb-6 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Latest Jobs</h3>
                  <p className="text-sm text-gray-500">Showing recently posted jobs from multiple platforms</p>
                </div>
                
                <div className="flex space-x-2">
                  <select className="border rounded px-3 py-2 text-sm text-gray-700">
                    <option>All Platforms</option>
                    <option>LinkedIn</option>
                    <option>Indeed</option>
                    <option>Glassdoor</option>
                  </select>
                  
                  <select className="border rounded px-3 py-2 text-sm text-gray-700">
                    <option>All Job Types</option>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                  </select>
                  
                  <select className="border rounded px-3 py-2 text-sm text-gray-700">
                    <option>Sort by Latest</option>
                    <option>Sort by Match Score</option>
                    <option>Sort by Salary</option>
                  </select>
                </div>
              </div>
              
              {loading ? (
                <div className="flex justify-center py-10">
                  <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-500"></div>
                </div>
              ) : (
                <div className="bg-white shadow rounded-lg overflow-hidden">
                  {jobs.map((job) => (
                    <div key={job.id} className="p-4 hover:bg-gray-50 border-b last:border-b-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center mb-1">
                            <h4 className="text-lg font-medium text-gray-800">{job.title}</h4>
                            {job.isNew && (
                              <span className="ml-2 px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                                New
                              </span>
                            )}
                          </div>
                          
                          <p className="text-gray-600">{job.company} • {job.location}</p>
                          
                          <div className="mt-2 flex flex-wrap gap-2">
                            <span className="px-2 py-1 text-xs font-medium rounded bg-gray-100 text-gray-800">
                              {job.type}
                            </span>
                            <span className={`px-2 py-1 text-xs font-medium rounded ${getPlatformColor(job.platform)}`}>
                              {job.platform}
                            </span>
                            <span className="px-2 py-1 text-xs font-medium rounded bg-gray-100 text-gray-800">
                              {job.salary}
                            </span>
                            <span className={`px-2 py-1 text-xs font-medium rounded ${getScoreColor(job.matchScore)}`}>
                              Match: {job.matchScore}%
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end">
                          <span className="text-sm text-gray-500">{formatRelativeTime(job.posted)}</span>
                          <button className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                            View Details <ChevronRight className="w-4 h-4 ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {!loading && jobs.length === 0 && (
                <div className="bg-white shadow rounded-lg p-8 text-center">
                  <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-800 mb-2">No jobs found</h3>
                  <p className="text-gray-500">Try adjusting your search filters or refreshing the job listings.</p>
                </div>
              )}
            </>
          )}
          
          {activeMenu !== 'jobs' && (
            <div className="bg-white shadow rounded-lg p-8 text-center">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                {activeMenu.charAt(0).toUpperCase() + activeMenu.slice(1)} Section
              </h3>
              <p className="text-gray-500">This section is under development.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;