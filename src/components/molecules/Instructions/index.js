import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {AppContext} from '../../../../App.js';
import {apply} from '../../../theme/OsmiProvider.js';
import StepText from './StepText';

const Instructions = () => {
  const appCtx = useContext(AppContext);
  const {lang} = appCtx;
  const {title, steps} = lang.dashboard.instructions;

  return (
    <View
      style={apply('p-6 border border-2 border-red-500 border-dashed mb-6')}>
      <Text style={[apply('text-md text-black font-bold mb-3')]}>{title}:</Text>
      {steps.map((item, index) => {
        return (
          <StepText key={index}>
            {index + 1}. {item}
          </StepText>
        );
      })}
    </View>
  );
};

export default Instructions;
