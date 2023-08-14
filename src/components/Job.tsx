import { useState } from 'react';
import './styles/Job.css'

interface IJob {
  id: number
  jobId: string
  dataId: number
  title: string
  location: string
  company: string
  salary?: string | undefined
  about: string
  fetched: string/*(?)*/ 
}

interface IProps {
  job: IJob;
}

const Job: React.FC<IProps> = ({job}) => {
  return (
    <li className='job-container'>
      <h2>
        <a 
          href={`https://www.indeed.com/viewjob?jk=${job.jobId}`}
          target='_blank' rel='noopener noreferrer'>
          {job.title}
        </a>
      </h2>
      <p>{job.location}</p>
      <p>{job.company}</p>
      {job.salary ? <p>{job.salary}</p> : null}
      <p>{job.about}</p>
      <h3>{job.fetched}</h3>
    </li>
  )
}

export default Job;