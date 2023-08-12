import './styles/Header.css';

const Header: React.FC = () => {
  return (
    <section className='header'>
      <p className='logo'>Logo</p>
      <a className='find-jobs' href='https://job-scraper-api.fly.dev/jobs'>Find jobs</a>
      <p className='sign-in'>Sign In</p>
    </section>
  )
}

export default Header;