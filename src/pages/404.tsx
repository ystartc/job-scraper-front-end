import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () =>{
    return (
        <section className='not-found-page'>
          <img className='lost-cat' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvrXLzAcB4RnkqOmm0QimW8iELs6gpbXXtfg&usqp=CAU' alt='404-cat'></img>
          <h1>Oops! You seem to be lost</h1>
          <p>Here are some helpful links:</p>
          <Link to='/'>Home</Link>
        </section>
    )
};

{/* <Link to='/blog'>Blog</Link>
<Link to='/contact'>Contact</Link> */}

export default NotFoundPage;