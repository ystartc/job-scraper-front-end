import axios from 'axios';

export const loadJobs = () => {
  return axios.get('https://job-scraper-api.fly.dev/jobs').then(response => {
    const jobs = response.data.map(job => {
      job.jobId = job.job_id;
      delete job.job_id;
      job.dataId = job.data_id;
      delete job.data_id;
      job.fetched = job.fetch_date;
      delete job.fetch_date;
      return job;
    });
    return jobs;
  });
};
