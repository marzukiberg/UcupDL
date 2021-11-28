import RNFetchBlob from 'rn-fetch-blob';
import {PermissionsAndroid, ToastAndroid} from 'react-native';

const toggleNativeDownload = async ({title, container, url}) => {
  const fs = RNFetchBlob.fs;
  const {dirs} = fs;
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  );
  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    RNFetchBlob.config({
      fileCache: true,
      addAndroidDownloads: {
        title: `${title}.${container}`,
        path: dirs.DownloadDir + `/${title}.${container}`,
        notification: true,
        useDownloadManager: true,
      },
    })
      .fetch('GET', url)
      .then(() => {
        ToastAndroid.show('Download dimulai...', ToastAndroid.SHORT);
      });
  } else {
  }
};

export default toggleNativeDownload;
