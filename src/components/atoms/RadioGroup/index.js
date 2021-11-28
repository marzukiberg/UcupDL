import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {apply} from '../../../theme/OsmiProvider';

const RadioGroup = ({items, onSelected}) => {
  const [selected, setSelected] = useState(items[0].value);
  const handlePress = _value => {
    onSelected(_value);
    setSelected(_value);
  };
  return (
    <>
      {items?.map((item, index) => {
        const {label, value} = item;
        return (
          <TouchableOpacity
            style={[apply('row items-center mb-2')]}
            key={`${index}`}
            onPress={() => handlePress(value)}
            activeOpacity={1}>
            <View
              style={[
                apply(
                  'w-20 h-20 bg-white border border-red-500 justify-center items-center rounded-full',
                ),
              ]}>
              {selected === value && (
                <View
                  style={[apply('w-12 h-12 bg-red-500 rounded-full')]}></View>
              )}
            </View>
            <Text style={[apply('ml-2 text-black')]}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </>
  );
};

export default RadioGroup;
