/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

LogBox.ignoreLogs([
  'new NativeEventEmitter',
  'Require cycle: node_modules/rn-fetch-blob/index.js',
  'Each child in a list should have a unique "key"',
]);
AppRegistry.registerComponent(appName, () => App);
