import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Search = () => {
  const [query, setQuery] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [medias, setMedias] = useState([]);
  const data = useSelector((store) => store.data);
  useEffect(() => {
    const delay = setTimeout(search, 500); // Delay in milliseconds before performing search
    return () => clearTimeout(delay); // Cleanup function to clear the timeout on unmount or query change
  }, [query, yearFilter, countryFilter]);
  
  const search = () => {
    if (query === "" && yearFilter === "" && countryFilter === "") {
      setMedias([]); // Clear the medias when all filters are empty
    } else {
      const filteredMedias = data.filter((item) => {
        const titleMatch = item.title.toLowerCase().includes(query.toLowerCase());
        const yearMatch = yearFilter === "" || item.year === parseInt(yearFilter);
        const countryMatch = countryFilter === "" || item.country.toLowerCase() === countryFilter.toLowerCase();
        return titleMatch && yearMatch && countryMatch;
      });
      setMedias(filteredMedias);
    }
  };
  
  const onQueryChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
  };
  
  const onYearFilterChange = (e) => {
    const newYearFilter = e.target.value;
    setYearFilter(newYearFilter);
  };
  
  const onCountryFilterChange = (e) => {
    const newCountryFilter = e.target.value;
    setCountryFilter(newCountryFilter);
  };
  
  return (
    <section className="container section section__height" id="skills">
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search MoonFlix"
          autoFocus
          onChange={onQueryChange}
          value={query}
        />
        <input
          type="text"
          placeholder="Filter by Year"
          onChange={onYearFilterChange}
          value={yearFilter}
        />
        <input
          type="text"
          placeholder="Filter by Country"
          onChange={onCountryFilterChange}
          value={countryFilter}
        />
  
        {medias.length === 0 ? (
          <div>No results found.</div>
        ) : (
          <div>
            {medias.map((media) => (
              <div style={{display:"flex",width:"100%",height:"110px",gap:"5%"}} key={media.imdb_title_id}>
                <div style={{ width: "80px",height:"100px" }}>
                  <img
                    src="https://img.freepik.com/free-vector/happy-maha-shivratri-indian-traditional-festival-background-vector_1055-12420.jpg?w=740&t=st=1688035068~exp=1688035668~hmac=4b12cafeb0831ae486ff5ba8a7d67e1453c4d732f26839d2a02a9ed089322bbe"
                    alt="Poster"
                    style={{ width: "80px", height: "100px", overflow: "hidden" }}
                  />
                </div>
                <div>
                  <h4>{media.title}</h4>
                  {/* <p style={{height:"50px"}}>{media.description}</p> */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Search;

