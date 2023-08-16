import React, { useState, useEffect } from 'react';
import usePagination from '@mui/material/usePagination';
// import SearchResult from '../components/SearchResult';
import JobList from '../components/JobList';
import '../components/styles/SearchResult.css'
import * as api from '../api/apiRequests';
import { IJob } from '../interfaces/interface';


const SearchResultPage: React.FC = () => {
  const [jobData, setJobData] = useState<IJob[]>([]);

  let query = document.location.search;

  const loadJobsByQueryRequest = (query: string) => {
    api.getJobsByQuery(query)
    .then((jobs: IJob[]) => {
      setJobData(jobs);
    })
    .catch((error: any) => {
      console.log('Re-attempting due to an error', error);
      api.getJobsByQuery(query)
      .then((jobs: IJob[])=> {
        setJobData(jobs);
      })
      .catch((error: any) => {
        console.log('error', error);
      });
    })
  };

  useEffect(() => {
    loadJobsByQueryRequest(query);
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