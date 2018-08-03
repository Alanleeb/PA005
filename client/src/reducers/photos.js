import { setFlash } from './flash';
import axios from 'axios';

const addPhoto = (photo) => {
  return { type: 'ADD_PHOTO', photo }
}

const setPhotos = (photos) => {
  return { type: 'SET_PHOTOS', photos }
}

export const fetchPhotos = () => {
  // where our superagent get request happens
  // dispatch the setPhotos action
  return(dispatch) => {
    axios.get('/api/photos').
      then( res => {
        dispatch(setPhotos(res.data));
      })
      .catch( res => {
        dispatch(setFlash('Error fetching all photos.', 'error'));
    });
  }
}

export const handleUpload = (photo, callback) => {
  // where our axios post request to create a new photo
  // dispatch addPhoto action
  return(dispatch) => {
    let data = new FormData();
    data.append(photo.name, photo);
    axios.post('/api/photos', data)
      .then( res => {
        dispatch(addPhoto(res.data));
        callback();
      })
      .catch( res => {
        dispatch(setFlash('Error uploading file. Please try again!', 'error'));
    });
  }
}



const photos = ( state = [], action ) => {
    switch ( action.type ) {
      case 'ADD_PHOTO':
        return [...state, action.photo]
      case 'SET_PHOTOS':
        return action.photos;
      default:
        return state;
    }
  }
  
  export default photos;