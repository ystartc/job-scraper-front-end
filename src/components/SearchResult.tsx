import JobList from './JobList';

const jobs = [
  {
  id: 234,
  jobId: '05f938174d385344',
  dataId: 28,
  title: 'Software Engineer, TikTok Creator',
  location: 'Redmond, WA 98052 (Downtown area)',
  company: 'TikTok',
  about: 'Deliver, collect and label data that meet quality standards set by the feature team. Mentoring, coaching and learning programs. Paid time off and paid holidays.',
  fetched: 'Thu, 10 Aug 2023 00:00:00 GMT'
},
{
  id: 230,
  jobId: '8dd9002550bd7ab8',
  dataId: 28,
  title: 'Associate Software Engineer - Data Collector/ Labeler',
  location: 'Seattle, WA 98052 (Downtown area)',
  company: '',
  about: 'Manipulate data that meet quality standards set by the feature team. Mentoring, coaching and learning programs. Paid time off and paid holidays.',
  fetched: 'Thu, 11 Aug 2023 00:00:00 GMT'
},
{
  id: 210,
  jobId: '8dd9011550bd7ab8',
  dataId: 28,
  title: 'Software Engineer',
  location: 'Bellevue, WA 98052 (Downtown area)',
  company: '',
  about: 'Manipulate data that meet quality standards set by the feature team. Mentoring, coaching and learning programs. Paid time off and paid holidays.',
  fetched: 'Thu, 14 Aug 2023 00:00:00 GMT'
}
];

const SearchResult: React.FC  = () => {
  return (
  <section>
    <JobList jobs={jobs}/>
  </section>
  )
};

export default SearchResult;