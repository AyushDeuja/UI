/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import LoginPage from './Adish/LoginPage';
import RegisterPage from './Adish/RegisterPage';
import HomePage from './Adish/HomePage';
import ForgotPage from './Adish/ForgotPage';
import MyStack from './Adish/MyStack';


import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faEye, faEyeSlash, faFilePen, faGear, faGreaterThan, faHouse, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

library.add(faPhone,faLock,faEye,faEyeSlash,faUser,faArrowLeft,faFilePen,faGreaterThan,faHouse,faGear)

AppRegistry.registerComponent(appName, () => MyStack);
