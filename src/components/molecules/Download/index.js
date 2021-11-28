import React, {useContext} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import {AppContext} from '../../../../App';
import {useYoutubeData} from '../../../hooks/useYoutubeData';
import {apply} from '../../../theme/OsmiProvider';
import VideoInfo from './VideoInfo';

const Loading = ({loadingText}) => {
  return (
    <View style={[apply('m-6')]}>
      <ActivityIndicator size={'large'} color="red" />
      <Text style={[apply('text-black text-center')]}>{loadingText}</Text>
    </View>
  );
};

const Download = ({videoURL, setUrl}) => {
  const appCtx = useContext(AppContext);
  const {lang} = appCtx;
  const {loadingText, panelTitle} = lang.dashboard.downloads;
  const {loading, data} = useYoutubeData(videoURL);
  const closeDialog = () => setUrl(null);

  return (
    <View
      style={apply('bg-white border border-red-500 border-opacity-20 mb-6')}>
      <View style={[apply('row p-4 justify-between items-center bg-red-500')]}>
        <Text style={[apply('text-white text-md font-bold')]}>
          {panelTitle}
        </Text>
        <TouchableOpacity
          style={[
            apply(
              'w-32 h-32 border border-2 border-white rounded-full justify-center items-center',
            ),
          ]}
          onPress={closeDialog}>
          <Text style={[apply('text-white text-xl font-bold leading-6')]}>
            ✕
          </Text>
        </TouchableOpacity>
      </View>
      {loading ? (
        <Loading loadingText={loadingText} />
      ) : (
        <VideoInfo data={data} />
      )}
    </View>
  );
};

export default Download;
