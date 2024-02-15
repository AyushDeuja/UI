/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import LoginPage from './Adish/LoginPage';
import RegisterPage from './Adish/RegisterPage';


import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faEyeSlash, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

library.add(faPhone,faLock,faEye,faEyeSlash,faUser)

AppRegistry.registerComponent(appName, () => RegisterPage);
