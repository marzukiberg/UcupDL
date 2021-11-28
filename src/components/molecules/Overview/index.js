import React, {useContext} from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
import {AppContext} from '../../../../App';
import {IC_YOUTUBE} from '../../../images';
import {apply} from '../../../theme/OsmiProvider';

const {width} = Dimensions.get('screen');
const icYoutubeSize = width / 3;

const Overview = () => {
  const {lang} = useContext(AppContext);
  return (
    <View style={apply('items-center mb-6')}>
      <Image
        source={IC_YOUTUBE}
        width={icYoutubeSize}
        height={icYoutubeSize}
        style={[apply(`w-${icYoutubeSize} h-${icYoutubeSize - 20}`)]}
        resizeMode="contain"
      />

      <Text style={[apply('font-bold text-black text-xl')]}>Ucup DL</Text>
      <Text style={[apply('mx-6 text-lg text-center')]}>
        {lang.dashboard.subtitle}
      </Text>
    </View>
  );
};

export default Overview;
