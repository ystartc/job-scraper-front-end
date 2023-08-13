import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header: React.FC = () => {
  return (
    <section className='header'>
      <p className='logo'>Logo</p>
      <Link className='find-jobs' to='/search'>Find jobs</Link>
      <p className='sign-in'>Sign In</p>
    </section>
  )
}

export default Header;