/**
 * @format
 */

import {AppRegistry} from 'react-native';  
import {name as appName} from './app.json';
import App from './App';
import login from './src/API/login';
import getDestination from './src/API/getDestination';  


AppRegistry.registerComponent(appName, () => login); 
 