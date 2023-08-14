import { useState } from 'react';
import './styles/Job.css'

interface IJob {
  id: number
  job_id: string
  data_id: number
  title: string
  location: string
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
      <h2>{job.title}</h2>
      <p>{job.location}</p>
      {job.salary ? <p>{job.salary}</p> : null}
      <p>{job.about}</p>
      <h3>{job.fetched}</h3>
    </li>
  )
}

export default Job;