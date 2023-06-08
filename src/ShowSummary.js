import React from 'react';

const ShowSummary = ({ selectedShow, onGoBack  }) => {
  return (
    <>
    <div className='container-fluid'>
      <h1>{selectedShow.show.name}</h1> 
      <h5 className='text-warning text-left'>Summary :</h5>
      <p className='text-white pt-3'>{selectedShow.show.summary}</p>
      <h5 className='text-warning pt-4'>genres:</h5>
       <p className='text-white '>{selectedShow.show.genres}</p>
 
      <button class="btn btn-warning mt-5" onClick={onGoBack}>Go Back</button>
    </div>
    </>

  );
};

export default ShowSummary;