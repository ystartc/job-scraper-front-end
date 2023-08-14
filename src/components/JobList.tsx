import Job from './Job'; // Import the Job component
import { daysSinceFetch } from '../helper-functions/convert-date';

interface IJob {
  id: number
  job_id: string
  data_id: number
  title: string
  location: string
  salary?: string | undefined
  about: string
  fetch_date: string/*(?)*/ 
};

interface IProps {
  jobs: IJob[];
};

const jobs = [
  {
  id: 234,
  job_id: '8dd9002450bd7ab8',
  data_id: 28,
  title: 'Associate Software Engineer - Data Collector/ Labeler',
  location: 'Redmond, WA 98052 (Downtown area)',
  about: 'Deliver, collect and label data that meet quality standards set by the feature team. Mentoring, coaching and learning programs. Paid time off and paid holidays.',
  fetch_date: 'Thu, 10 Aug 2023 00:00:00 GMT'
},
{
  id: 230,
  job_id: '8dd9002550bd7ab8',
  data_id: 28,
  title: 'Associate Software Engineer - Data Collector/ Labeler',
  location: 'Seattle, WA 98052 (Downtown area)',
  about: 'Manipulate data that meet quality standards set by the feature team. Mentoring, coaching and learning programs. Paid time off and paid holidays.',
  fetch_date: 'Thu, 11 Aug 2023 00:00:00 GMT'
},
{
  id: 210,
  job_id: '8dd9011550bd7ab8',
  data_id: 28,
  title: 'Software Engineer',
  location: 'Bellevue, WA 98052 (Downtown area)',
  about: 'Manipulate data that meet quality standards set by the feature team. Mentoring, coaching and learning programs. Paid time off and paid holidays.',
  fetch_date: 'Thu, 14 Aug 2023 00:00:00 GMT'
}
];

const fetched = (date: string): string => {
  const number = daysSinceFetch(date)
  let fetched: string;
  if (number === 0) {
    fetched = 'Posted today'
  }
  else if (number === 1) {
    fetched = `Posted ${number} day ago`
  }
  else {
    fetched = `Posted ${number} days ago`
  }
  return fetched;
  }

const JobList: React.FC<IProps[]> = jobs => {
  return (
    <ul className='job-list-component'>
      {jobs.map(job => (
        <Job 
          key={job.id}
          id={job.id}
          job_id={job.job_id}
          data_id={job.data_id}
          title={job.title}
          location={job.location}
          salary={job.salary ? job.salary : undefined}
          about={job.about}
          fetch_date={fetched(job.fetch_date)}
        />
      ))};
    </ul>
  )};

export default JobList;