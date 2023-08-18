import { Link } from "react-router-dom";

const SignInPage: React.FC = () => {
  return (
    <section className='sign-in-page'>
      <h1>JK! 🤪</h1>
      <p>Feauture is not implemented yet! Feel free to explore website without creating an account 😉</p>
      <Link to='/'>Home</Link>
    </section>
  )
};

export default SignInPage;