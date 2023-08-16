import { IJob, IProps } from '../interfaces/interface';
import './styles/Job.css'


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