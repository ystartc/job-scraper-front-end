import { Link } from 'react-router-dom';
import logo from '../assets/logo-clear.png';
import './styles/Header.css';

const Header: React.FC = () => {
  return (
    <section className='header'>
      <p className='logo'><Link className='logo'to='/'><img className='logo-icon' alt='logo icon' src={logo}/></Link></p>
      <Link className='find-jobs' to='/search'>Find jobs</Link>
      <p className='sign-in'><Link className='sign-in'to='/sign-in'>Sign In</Link></p>
    </section>
  )
};

export default Header;