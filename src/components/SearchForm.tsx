import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/SearchForm.css'

const defaultInput = {
  query: '',
  location: ''
};

const SearchForm: React.FC = () => {
  const [input, setInput] = useState(defaultInput);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({...input, [event.target.name]: event.target.value})
  };

  const navigate = useNavigate();

  const routeChange = (): void => { 
    navigate('/searchResult');
  };

  const handleClick = (): void => {
    // send search request to db and process tehr response to fit output format
    routeChange();
  };

  return (
    <section className='search-container'>
      <section className='search-input'>
        <section className='query-input-container'>
          <input
            type='text'
            placeholder='Find'
            className='query-input'
            value={input.query}
            onChange={handleChange}
            name='query'
          />
          <img 
          className='search-icon' 
          src="https://www.pngitem.com/pimgs/m/516-5164958_location-symbol-svg-png-download-map-marker-icon.png"
          alt='Location icon'/>
        </section>
        <section className='location-input-container'>
          <input
            type='text'
            placeholder='Location'
            className='location-input'
            value={input.location}
            onChange={handleChange}
            name='location'
          />
          <img 
          className='location-icon'
          src="https://www.pngitem.com/pimgs/m/516-5164958_location-symbol-svg-png-download-map-marker-icon.png"
          alt='Location icon'/>
        </section>
      </section>
      <button 
        className='search-button'
        onClick={handleClick}
      >
        Search</button>
    </section>
  )
}

export default SearchForm;