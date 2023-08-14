import JobList from './JobList';
import { IJob } from '../interfaces/job';

// const jobs = [
//   {
//   id: 234,
//   jobId: '05f938174d385344',
//   dataId: 28,
//   title: 'Software Engineer, TikTok Creator',
//   location: 'Redmond, WA 98052 (Downtown area)',
//   company: 'TikTok',
//   about: 'Deliver, collect and label data that meet quality standards set by the feature team. Mentoring, coaching and learning programs. Paid time off and paid holidays.',
//   fetched: 'Thu, 10 Aug 2023 00:00:00 GMT'
// },
// {
//   id: 230,
//   jobId: '8dd9002550bd7ab8',
//   dataId: 28,
//   title: 'Associate Software Engineer - Data Collector/ Labeler',
//   location: 'Seattle, WA 98052 (Downtown area)',
//   company: '',
//   about: 'Manipulate data that meet quality standards set by the feature team. Mentoring, coaching and learning programs. Paid time off and paid holidays.',
//   fetched: 'Thu, 11 Aug 2023 00:00:00 GMT'
// },
// {
//   id: 210,
//   jobId: '8dd9011550bd7ab8',
//   dataId: 28,
//   title: 'Software Engineer',
//   location: 'Bellevue, WA 98052 (Downtown area)',
//   company: '',
//   about: 'Manipulate data that meet quality standards set by the feature team. Mentoring, coaching and learning programs. Paid time off and paid holidays.',
//   fetched: 'Thu, 14 Aug 2023 00:00:00 GMT'
// }
// ];
interface  ISearchResultsProps {
  jobData: IJob[]
};

const SearchResult: React.FC<ISearchResultsProps>  = (props) => {
  return (
  <section>
    <JobList jobs={props.jobData}/>
  </section>
  )
};

export default SearchResult;