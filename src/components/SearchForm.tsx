import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../interfaces/interface';
import './styles/SearchForm.css'

const defaultInput = {
  job: '',
  company: '',
  location: ''
};

const SearchForm: React.FC = () => {
  const [input, setInput] = useState<Input>(defaultInput);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({...input, [event.target.name]: event.target.value})
  };

  const navigate = useNavigate();

  const routeChange = (query: string): void => { 
    if (!query) {
      query = 'title=software'
    };
    navigate(`/searchResult?${query}`);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  const handleClick = () : void => {
    // send search request to db and process tehr response to fit output format
    const queryParams = [
      { name: 'title', value: input.job },
      { name: 'company', value: input.company },
      { name: 'location', value: input.location }
    ];
    
    const params = queryParams.filter(q => q.value.trim() !== '');
    let query = ''; // Initialize query
  
    if (params.length) {
      query = params.map(q => (
        `${q.name}=${q.value}`)).join('&');
    }
  
    routeChange(query);
  };

  return (
    <section className='search-container'>
      <section className='search-input'>
        <section className='job-input-container'>
          <input
            type='text'
            placeholder='Job'
            className='job-input'
            value={input.job}
            onChange={handleChange}
            onKeyUp={handleKeyPress}
            name='job'
          />
          <img 
          className='search-icon' 
          src="https://icon-library.com/images/search-icon-html/search-icon-html-22.jpg"
          alt='Search icon'/>
        </section>
        <section className='company-input-container'>
          <input
            type='text'
            placeholder='Company'
            className='company-input'
            value={input.company}
            onChange={handleChange}
            onKeyUp={handleKeyPress}
            name='company'
          />
          <img 
          className='company-icon' 
          src="https://icons.veryicon.com/png/o/miscellaneous/zr_icon/company-23.png"
          alt='Company icon'/>
        </section>
        <section className='location-input-container'>
          <input
            type='text'
            placeholder='Location'
            className='location-input'
            value={input.location}
            onChange={handleChange}
            onKeyUp={handleKeyPress}
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