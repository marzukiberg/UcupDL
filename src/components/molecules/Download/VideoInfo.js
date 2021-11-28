import Clipboard from '@react-native-clipboard/clipboard';
import React, {useContext, useState} from 'react';
import {Text, ToastAndroid, TouchableOpacity, View} from 'react-native';
import {AppContext} from '../../../../App';
import {apply} from '../../../theme/OsmiProvider';
import toggleNativeDownload from '../../../utils/toggle-native-download';
import RadioGroup from '../../atoms/RadioGroup';
import ShowQuality from './ShowQuality';

const RadioGroupItems = [
  {
    label: 'Video',
    value: 'video',
  },
  {
    label: 'Audio',
    value: 'audio',
  },
];

const VideoInfo = ({data}) => {
  const appCtx = useContext(AppContext);
  const {lang} = appCtx;
  const {
    title: videoTitleLabel,
    mediaType,
    quality,
    btnCopy,
    btnDownload,
  } = lang.dashboard.downloads;

  const {title, adaptiveFormats, formatStreams} = data;
  const [state, setState] = useState({
    type: 'video',
    downloadInfo: formatStreams[0],
  });
  const {url, container} = state.downloadInfo;
  const audioFormats = adaptiveFormats?.filter(item =>
    item.type.includes('audio'),
  );
  const videoFormats = formatStreams;

  const onTipeSelected = value => {
    setState({
      type: value,
      downloadInfo: value === 'audio' ? audioFormats[0] : videoFormats[0],
    });
  };
  const onQualityPick = v => {
    setState({...state, downloadInfo: v});
  };
  const toggleCopyLink = () => {
    Clipboard.setString(url);
    ToastAndroid.show('Link disalin ke papan klip', ToastAndroid.SHORT);
  };

  return (
    <View style={[apply('p-3')]}>
      <Text
        style={[apply('text-md text-black font-bold mb-2')]}
        numberOfLines={3}>
        {videoTitleLabel}:
      </Text>
      <View style={[apply('p-3 border border-red-500 mb-3 text-black')]}>
        <Text style={[apply('text-black text-md')]}>{title}</Text>
      </View>

      <View style={[apply('row mb-6')]}>
        <View style={[apply('flex')]}>
          <Text style={[apply('text-md text-black font-bold mb-2')]}>
            {mediaType}:
          </Text>
          <View>
            <RadioGroup items={RadioGroupItems} onSelected={onTipeSelected} />
          </View>
        </View>
        <View style={[apply('flex')]}>
          <Text style={[apply('text-md text-black font-bold mb-2')]}>
            {quality}:
          </Text>
          <ShowQuality
            type={state.type}
            audioFormats={audioFormats}
            videoFormats={videoFormats}
            onQualityPick={onQualityPick}
          />
        </View>
      </View>

      <View style={[apply('row justify-between')]}>
        <View style={[apply('flex')]}>
          <TouchableOpacity
            style={[apply('px-4 py-2 bg-red-500')]}
            onPress={toggleCopyLink}>
            <Text style={[apply('text-white text-center flex')]}>
              {btnCopy}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[apply('flex ml-3')]}>
          <TouchableOpacity
            style={[apply('px-4 py-2 bg-red-500')]}
            onPress={() =>
              toggleNativeDownload({
                title,
                container,
                url,
              })
            }>
            <Text style={[apply('text-white text-center')]}>{btnDownload}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default VideoInfo;
