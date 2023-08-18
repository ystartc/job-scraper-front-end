import './styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <section className='footer'>
      <p className='project-owner'>©Ystartc</p>
      <a className='linkedin-link' href='https://linkedin.com/in/ystartc' rel='noreferrer' target='_blank'>
        <img className='linkedin-icon' alt='linkedin icon' src='https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png'/>
      </a>
      {/* <p className='linkdin-link'><a href='www.linkedin.com/in/ystartc'>LinkdIn</a></p> */}
      {/* <p className='github-link'><a href='https://github.com/ystartc'>GitHub</a></p> */}
      <a className='github-link' href='https://github.com/ystartc' rel='noreferrer' target='_blank'>
        <section className='github-container'>
          <img className='github-icon' alt='github icon' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAY1BMVEX///8AAAD19fX4+Pje3t6NjY37+/t6enqnp6cmJibV1dXb29tBQUHr6+uenp4tLS1cXFytra24uLiFhYVmZmYXFxfl5eUdHR3GxsZMTEw2NjZUVFRGRkZsbGy/v78QEBCWlpYRqkaxAAACEUlEQVRIib2W15aDIBCGmWjs3SQaU/T9n3IDCAwIaPbs2f9KBj7aFCTk7xUF0bfIqYsL4BoefVcexNonGJqS/bWDs0lx9Sc/V9kxqsWDhambA0hDF5f4MKrWzsV7HEBs4y77HMDllxzAy+QcXtjqrHPv1XydXcAsYumNudNqbAgpq6sFW25qUzgUHqutY62WLz4VxTSwz4qZMzW70CgmHnk7SrJA9EV5si5RGqM+kgGT2/xkngdq82YAnEGlgXLJQloyHyi3CnduuKnLq3yg2hjw1F6U4dgZxQLFsQXxkk/ajGRz8HOETHIobWVHFxSRIW4x0VpeqWukKa3yYr8MyqE0R1Qi7hSyj2oxlKZl8wUoK27zJVjYwf0zzhhUZ/SGOFUgh9Ki1ctWtwcql/cE+9FaNbGU5xKC0p8H0qEjsozcBL1TnRrJHFAbbZdUNkBq7BwmH3hX43hVzgGRzjUDxImE115Fx1PW4THpamy5E8v1nTtv0is0qrucnDaGEiXqEz0tyR1MyT4OoOcBFWvtCjanYR6ZP/8kL95V4I2aL3WN+kJmieWoBIOjAWq5UInNkuwcLyPxgIt+cSwr7+Z1WsDG7J4ss3FlmKu3/eyCHiMNncgJprafOvTvFzrAwoIRfO8aqBy5+VcRelvBUFgdYUwVvCzgWvgv/uqZPYVDdfDhfTqZ8limzbqNAeLdyvkP+gH2gBMOtKPTogAAAABJRU5ErkJggg=='/>
          <p className='github'>GitHub</p>
        </section>
      </a>
    </section>
  )
}

export default Footer;