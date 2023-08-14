import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header: React.FC = () => {
  return (
    <section className='header'>
      <p className='logo'><Link className='logo'to='/'>Logo</Link></p>
      <Link className='find-jobs' to='/search'>Find jobs</Link>
      <p className='sign-in'>Sign In</p>
    </section>
  )
}

export default Header;