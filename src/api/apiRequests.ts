import axios from 'axios';
import { IJob } from '../interfaces/job';

export const loadJobs = () => {
  return (
    axios.get<IJob[]>('https://job-scraper-api.fly.dev/jobs?title=software')
    .then((response: any) => {
      const jobs = response.data.map((job: any) => {
        job.jobId = job.job_id;
        delete job.job_id;
        job.dataId = job.data_id;
        delete job.data_id;
        job.fetched = job.fetch_date;
        delete job.fetch_date;
        return job;
      });
      return jobs;
    })
  );
};
