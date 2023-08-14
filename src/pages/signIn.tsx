import { Link } from "react-router-dom";

const SignInPage: React.FC = () =>{
    return (
        <section className='sign-in-page'>
          {/* <img className='silly-sign-in' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvrXLzAcB4RnkqOmm0QimW8iELs6gpbXXtfg&usqp=CAU' alt='silly-sign-in'></img> */}
          <h1>JK! 🤪</h1>
          <p>Feauture is not implemented yet! Feel free to explore website without creating an account 😉</p>
          <Link to='/'>Home</Link>
        </section>
    )
};

{/* <Link to='/blog'>Blog</Link>
<Link to='/contact'>Contact</Link> */}

export default SignInPage;