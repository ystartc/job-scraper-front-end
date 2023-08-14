const MainPage: React.FC  = () => {
  return (
    <section className='homepage'>
      <header className='welcome'>
        <h1>Welcome to Job Scraper!</h1>
        <img src='https://www.pharmiweb.jobs/_/jobseekers-frontend/image/77dbe175-0b9c-498b-8d74-c4730262f626' alt='Scraping'></img>
      </header>
      <main className='features'>
        <section className='feature'>
        <p>Find the best job opportunities that match your skills and preferences.</p>
          <h2>Easy Job Search</h2>
          <p>Search and filter job postings from various sources to find the perfect match for you.</p>
        </section>
        <section className='feature'>
          <h2>Stay Updated</h2>
          <p>Get real-time updates on new job postings that match your preferences.</p>
        </section>
      </main>
      <footer className='main-page-footer'>
        <p>Start your job search today and discover exciting opportunities!</p>
      </footer>
    </section>
  )
}
{/* <section>
      <h1>Welcome to JobFinder!</h1>
      <img src='https://www.pharmiweb.jobs/_/jobseekers-frontend/image/77dbe175-0b9c-498b-8d74-c4730262f626' alt='Scraping'></img>
      <h2 className='introduction'></h2>
    </section> */}

export default MainPage;