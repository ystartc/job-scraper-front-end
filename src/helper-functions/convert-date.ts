export const daysSinceFetch = (fetchDate: string): number  => {
  // Parse the fetch_date string into a Date object
  const fetchDateObj = new Date(fetchDate);

  // Get the current date
  const currentDate = new Date();

  // Calculate the difference in milliseconds between the two dates
  const timeDiffMs = currentDate.getTime() - fetchDateObj.getTime();
  console.log("curr", currentDate);
  console.log("fetc", fetchDateObj);

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
