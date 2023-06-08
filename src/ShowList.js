import React from 'react';

const ShowList = ({ shows, onShowSelected }) => {

  const handleShowSelected  = (showId) => {
    const selectedShow = shows.find((show) => show.show.id === showId)
    onShowSelected(selectedShow)
  }
  return (<>

  {shows ?.length > 0 
  ? (
    <div className='container'>
      {shows.map((show) => (
        <div className="movie" key={show.show.id}>
        <div>
          <img className='rounded-3 mt-4 w-100'
            src={
              show.show.image.medium !== "N/A"
                ? show.show.image.medium
                : "https://static.tvmaze.com/uploads/images/original_untouched/425/1064746.jpg"
            }
            alt={show.show.medium}
          />
          <button
             onClick={() => handleShowSelected (show.show.id)}
            class="btn btn-outline-info position-absolute top-0 end-0 "
          >
          Info
          </button>
        </div>
        <div className="w-50 bg-transparent">
          <h4 className='text-center mb-4'>
            {show.show.name}
          </h4>
        </div>
      </div>
      ))}
    </div>
  ) : (
    <div className="empty">
            <h2>No Movies found</h2>
     </div>
  )}    
  </>
    
  );
};

export default ShowList;



// {
//         movies ?.length > 0 
//         ?(
//           <div className="container">
//           {movies.map((movie) => (
//            <MovieCart movie={movie} />
//           ))}        
//        </div>
//         ) : (
//           <div className="empty">
//            <h2>No Movies found</h2>
//           </div>
//         )
//        }