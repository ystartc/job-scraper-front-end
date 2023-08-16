import SearchForm from '../components/SearchForm';

const SearchPage: React.FC = () => {

  return (
    <section className='search-page'>
      <h1 className='title-search'>What are you looking for?</h1>
      <SearchForm />
      <section className='project-warning'>
        <h2>OnGoing project!!!</h2>
        <p>In light of the ongoing development work on the project, it is strongly recommend to use the search button without providing any input in the search field.</p>
        <p>Serch button prompts to Software Engineer jobs in Seattle area within 50 miles</p>
        <p>Have fun! 😉</p>
      </section>
    </section>
  )
}

export default SearchPage;