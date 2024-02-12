/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import HomePage from './Adish/HomePage';


import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faEyeSlash, faLock, faPhone } from '@fortawesome/free-solid-svg-icons';

library.add(faPhone,faLock,faEye,faEyeSlash)

AppRegistry.registerComponent(appName, () => HomePage);
