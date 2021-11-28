import {Picker} from '@react-native-picker/picker';
import pretty from 'prettysize';
import React, {useState} from 'react';
import {View} from 'react-native';
import {apply} from '../../../theme/OsmiProvider';

const ShowQuality = ({type, audioFormats, videoFormats, onQualityPick}) => {
  const [pickerState, setPickerState] = useState(videoFormats[0]);

  const onValueChange = v => {
    setPickerState(v);
    onQualityPick(v);
  };

  if (type === 'audio') {
    return (
      <View style={[apply('bg-white border border-red-500')]}>
        <Picker
          mode="dropdown"
          onValueChange={onValueChange}
          selectedValue={pickerState}>
          {audioFormats.map(item => (
            <Picker.Item
              key={item.itag}
              style={{color: 'black', backgroundColor: 'white'}}
              label={`${item.container}/${item.encoding}, ${pretty(
                item.bitrate,
                {
                  numOnly: true,
                },
              )} kbps`}
              value={item}
            />
          ))}
        </Picker>
      </View>
    );
  }
  return (
    <View style={[apply('bg-white border border-red-500')]}>
      <Picker
        mode="dropdown"
        style={apply('bg-white border border-red-500')}
        onValueChange={onValueChange}
        selectedValue={pickerState}>
        {videoFormats.map(item => (
          <Picker.Item
            key={item.itag}
            style={{color: 'black', backgroundColor: 'white'}}
            label={item.qualityLabel}
            value={item}
          />
        ))}
      </Picker>
    </View>
  );
};

export default ShowQuality;
