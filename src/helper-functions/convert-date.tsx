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
}

// Example usage:
const fetchDate = "Thu, 10 Aug 2023 00:00:00 GMT";
const daysSincePosted = daysSinceFetch(fetchDate);
console.log(`Days since posted: ${daysSincePosted}`);
