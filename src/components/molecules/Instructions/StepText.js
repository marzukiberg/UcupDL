import React from 'react';
import {Text} from 'react-native';
import {apply} from '../../../theme/OsmiProvider';

const StepText = ({children}) => {
  return <Text style={[apply('text-black text-md mb-2')]}>{children}</Text>;
};

export default StepText;
