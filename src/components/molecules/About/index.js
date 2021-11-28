import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {AppContext} from '../../../../App';
import {apply} from '../../../theme/OsmiProvider';

const About = () => {
  const {lang} = useContext(AppContext);

  return (
    <View style={[apply('items-center mb-12')]}>
      <Text style={[apply('text-center text-black mx-12 mb-3')]}>
        {lang.dashboard.about}
      </Text>

      <Text>dev by: @marzukiberg</Text>
    </View>
  );
};

export default About;
