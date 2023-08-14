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
