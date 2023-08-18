import { useState } from 'react';
import { useNavigate , useLocation } from 'react-router-dom';
// import { createMemoryHistory } from 'history';
import { Input } from '../interfaces/interface';
import './styles/SearchForm.css'

const defaultInput = {
  job: '',
  company: '',
  location: ''
};

const SearchForm: React.FC = () => {
  const [input, setInput] = useState<Input>(defaultInput);
  const location = useLocation();
  // const history = createMemoryHistory();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({...input, [event.target.name]: event.target.value})
  };

  const navigate = useNavigate();

  const routeChange = (query: string): void => { 
    if (!query) {
      query = 'title=software&days_ago=14'
    };

    if (location.pathname === '/searchResult') {navigate(`${location.pathname}?${query}`)
    window.location.reload();}
  // history.replace(`/searchResult?${query}`)}
    
    else {navigate(`/searchResult?${query}`)}
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  const handleClick = () : void => {
    const queryParams = [
      { name: 'title', value: input.job },
      { name: 'company', value: input.company },
      { name: 'location', value: input.location }
    ];
    
    const params = queryParams.filter(q => q.value.trim() !== '');
    let query = '';
    
    if (params.length) {
      query = params.map(q => (
        `${q.name}=${q.value}`)).join('&');
    };

    const option = document.querySelector('.posted-ago') as HTMLSelectElement;
    if (option!.value) {
      query += `&days_ago=${option.value}`
    };
  
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
      <section className='dropdown-container'>
        <select className='posted-ago'>
          <option value='' selected disabled hidden>Date posted</option>
          <option value='1'>Last 24 hours</option>
          <option value='3'>Last 3 days</option>
          <option value='7'>Last 7 days</option>
          <option value='14'>Last 14 days</option>
          <option value=''>Select All</option>
        </select>
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