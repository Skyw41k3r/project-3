// gather saved art from the local db
const getSavedArtIds = () => {
    const savedArtIds = localStorage.getItem('saved_art')
      ? JSON.parse(localStorage.getItem('saved_art'))
      : [];
  
    return savedArtIds;
  };
// 
   const saveArtIds = (artIdArr) => {
    if (artIdArr.length) {
      localStorage.setItem('saved_art', JSON.stringify(artIdArr));
    } else {
      localStorage.removeItem('saved_art');
    }
  };
  
   const removeArtId = (bookId) => {
    const savedArtIds = localStorage.getItem('saved_art')
      ? JSON.parse(localStorage.getItem('saved_art'))
      : null;
  
    if (!savedArtIds) {
      return false;
    }
  
    const updatedSavedArtIds = savedArtIds.filter((savedBookId) => savedBookId !== artId);
    localStorage.setItem('saved_art', JSON.stringify(updatedSavedArtIds));
  
    return true;
  };
  
  module.exports = { getSavedArtIds, saveArtIds, removeArtId }