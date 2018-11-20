import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
    var data;
  //TODO:  Write an asynchronous action to handle a video search!
  searchYouTube({YOUTUBE_API_KEY, q}, (results) => data = results);
  changeVideoList(data);
  changeVideo(data);


};

export default handleVideoSearch;
