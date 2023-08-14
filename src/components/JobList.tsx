import Job from './Job';
import { fetched } from '../helper-functions/convert-date';

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

const JobList: React.FC<IJobListProps> = (props) => {
  return (
    <ul className='job-list-component'>
      {props.jobs.map(job => (
        <Job
          key={job.id}
          job={{...job, fetched: fetched(job.fetched)
          }}
        />
      ))}
    </ul>
  )};

export default JobList;