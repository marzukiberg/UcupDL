import React, {useContext} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {AppContext} from '../../../../App';
import {IC_TRANSLATE} from '../../../images';
import {apply} from '../../../theme/OsmiProvider';

const Header = () => {
  const {updateLang} = useContext(AppContext);

  return (
    <View style={[apply('bg-red-500 p-4 row justify-between')]}>
      <Text style={[apply('text-lg text-white font-bold')]}>Ucup DL</Text>
      <TouchableOpacity
        onPress={updateLang}
        style={[apply('w-32 h-32 justify-center items-center')]}>
        <Image
          source={IC_TRANSLATE}
          style={[apply('w-24 h-24')]}
          width={24}
          height={24}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
