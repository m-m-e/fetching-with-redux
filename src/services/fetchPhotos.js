const fetchPhotos = endpoint => {
  return (
    fetch(endpoint)
      .then(response => response.json())
      .then(data => data)
      .catch(error => console.error(error))
  )
};

export { fetchPhotos };