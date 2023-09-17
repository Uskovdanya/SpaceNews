function Search({ query, setQuery, onSearchNews, hidden }) {
  return (
    <div className={`${hidden} group relative justify-end gap-[30px]`}>
      <form action="#" className=" " onSubmit={onSearchNews}>
        <input
          type="text"
          className="text-md  h-[30px]active:outline-none w-0 cursor-pointer rounded-[30px] border-none bg-gray-100 px-0 py-1 font-Roboto font-normal leading-[18px] outline-none transition-all duration-200 ease-linear focus:bg-gray-200 focus:outline-none group-hover:w-[180px] group-hover:px-6 xs:group-hover:w-[250px] md:group-hover:w-[400px]"
          placeholder="Search news"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      <button className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.1415 4.5623C15.5924 7.01317 15.5924 10.9868 13.1415 13.4377C10.6907 15.8886 6.71701 15.8886 4.26613 13.4377C1.81526 10.9868 1.81526 7.01317 4.26613 4.5623C6.71701 2.11142 10.6907 2.11142 13.1415 4.5623ZM15.2195 14.1039C17.77 10.8563 17.5488 6.1411 14.5558 3.14808C11.3238 -0.0838428 6.08384 -0.0838427 2.85192 3.14808C-0.380007 6.38001 -0.380007 11.62 2.85192 14.8519C5.84494 17.8449 10.5601 18.0662 13.8077 15.5156C13.8209 15.5304 13.8345 15.5449 13.8486 15.559L18.5302 20.2406C18.9207 20.6311 19.5539 20.6311 19.9444 20.2406C20.3349 19.85 20.3349 19.2169 19.9444 18.8263L15.2629 14.1448C15.2487 14.1307 15.2342 14.117 15.2195 14.1039Z"
            fill="#444444"
          />
        </svg>
      </button>
    </div>
  );
}

export default Search;
