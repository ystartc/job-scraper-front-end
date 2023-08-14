import React, { useState, useEffect } from 'react';
// import SearchResult from '../components/SearchResult';
import JobList from '../components/JobList';
import '../components/styles/SearchResult.css'
import * as api from '../api/apiRequests';
import { IJob } from '../interfaces/job';


const SearchResultPage: React.FC = () => {
  const [jobData, setJobData] = useState<IJob[]>([]);

  const loadJobsRequest = () => {
    api.loadJobs()
    .then((jobs: IJob[]) => {
      setJobData(jobs);
    })
    .catch((error: any) => {
      console.log('Re-attempting due to an error', error);
      api.loadJobs()
      .then((jobs: IJob[])=> {
        setJobData(jobs);
      })
      .catch((error: any) => {
        console.log('error', error);
      });
    })
  };

  useEffect(() => {
    loadJobsRequest();
  }, []);

  return (
    <section className='search-result-page'>
      <p className='title-search'>Found jobs:</p>
      <section>
        <JobList jobs={jobData}/>
      </section>
    </section>
  )
}

export default SearchResultPage;