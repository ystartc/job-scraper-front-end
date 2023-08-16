export interface IJob {
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

export interface IProps {
  job: IJob;
};

export interface IJobListProps {
  jobs: IJob[];
};

export interface Input {
  job: string;
  company: string;
  location: string;
};
