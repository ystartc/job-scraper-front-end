export const daysSinceFetch = (fetchDate: string): number  => {
  // Parse the fetch_date string into a Date object
  const fetchDateObj = new Date(fetchDate);

  // Get the current date
  const currentDate = new Date();

  // Set both dates to the same time, but keep the date part
  fetchDateObj.setHours(0, 0, 0, 0);
  currentDate.setHours(0, 0, 0, 0);

  // Calculate the difference in milliseconds between the two dates
  const timeDiffMs = currentDate.getTime() - fetchDateObj.getTime();

  // Convert the difference to days
  const daysDiff = Math.floor(timeDiffMs / (1000 * 60 * 60 * 24));

  return daysDiff;
};

export const fetched = (date: string): string => {
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
  };
