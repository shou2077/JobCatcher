export const mockJobs = [
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
  // ... other jobs
];

export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  platform: string;
  matchScore: number;
  isNew: boolean;
}; 