import {useEffect, useState} from 'react';
import {config} from '../constants';
const {API_BASE_URL} = config;

export const useYoutubeData = videoURL => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async videoID => {
    fetch(`${API_BASE_URL}videos/${videoID}`)
      .then(res => res.json())
      .then(_data => {
        setData(_data);
      })
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const videoID = videoURL.toString().split('/').slice(-1)[0];
    getData(videoID);
  }, [videoURL]);

  return {
    data,
    loading,
    error,
  };
};
