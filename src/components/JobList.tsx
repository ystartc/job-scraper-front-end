import Job from './Job';
import { IJobListProps } from '../interfaces/interface';
import { fetched } from '../helper-functions/convert-date';


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