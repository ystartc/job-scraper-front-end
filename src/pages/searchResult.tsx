import SearchResult from '../components/SearchResult';
import '../components/styles/SearchResult.css'

const SearchResultPage: React.FC  = () => {
  return (
    <section className='search-result-page'>
      <p className='title-search'>Found jobs:</p>
      <SearchResult/>
    </section>
  )
}

export default SearchResultPage;