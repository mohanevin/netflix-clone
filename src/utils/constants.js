export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer'+ process.env.REACT_APP_TMDB_KEY
    }
  };

export const CDN_IMG="https://image.tmdb.org/t/p/w500"
