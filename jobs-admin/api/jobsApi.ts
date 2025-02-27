import type { Job } from './mockData';

const API_URL = 'https://evfr2tkrjl.execute-api.us-west-2.amazonaws.com/default/fetchJobsFromDB';

export const jobsApi = {
  getJobs: async (): Promise<Job[]> => {
    try {
      const response = await fetch(API_URL);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data as Job[];
    } catch (error) {
      console.error('Error fetching jobs:', error);
      throw new Error('Failed to fetch jobs from server');
    }
  },
  
  // Add other job-related API methods here
  refreshJobs: async (): Promise<Job[]> => {
    // For now, refreshJobs uses the same endpoint as getJobs
    // You may want to add a different endpoint or query parameter later
    return jobsApi.getJobs();
  }
}; 