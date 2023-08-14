import React, { useState, useEffect } from 'react';
import SearchResult from '../components/SearchResult';
import '../components/styles/SearchResult.css'
import * as api from '../api/apiRequests';

interface IJob {
  id: number
  jobId: string
  dataId: number
  title: string
  location: string
  company: string
  salary?: string | undefined
  about: string
  fetched: string
};

interface IJobListProps {
  jobs: IJob[];
};

const SearchResultPage: React.FC = () => {
  const [jobData, setJobData] = useState<IJobListProps>({jobs: []});

  const loadJobsRequest = () => {
    api.loadJobs()
    .then(jobs => {
      setJobData(jobs);
    })
    .catch(error => {
      console.log('Re-attempting due to an error', error);
      api.loadJobs()
      .then(jobs => {
        setJobData(jobs);
      })
      .catch(error => {
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
      <SearchResult jobData={jobData}/>
    </section>
  )
}

export default SearchResultPage;