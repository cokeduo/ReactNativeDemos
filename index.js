/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import QQLogin from './ReactNativeDemo/QQLogin';
import {name as appName} from './app.json';
import HelloWorld from './ReactNativeDemo/HelloWorld';
import CustomLabel from './ReactNativeDemo/CustomLabel';
import BlinkApp from './ReactNativeDemo/intervalUpdateState';
import TextInputDemo from './ReactNativeDemo/TextInputDemo';
import ScrollViewDemo from './ReactNativeDemo/ScrollViewDemo';
import ListViewDemo from './ReactNativeDemo/ListViewDemo';
import RequestDemo from './ReactNativeDemo/RequestDemo';
import CallMethodDemo from './ReactNativeDemo/MethodCallDemo';

// AppRegistry.registerComponent(appName, () => App);

// AppRegistry.registerComponent(appName, () => QQLogin)

// AppRegistry.registerComponent(appName, () => HelloWorld)

// AppRegistry.registerComponent(appName, ()=> CustomLabel)

// AppRegistry.registerComponent(appName, ()=> BlinkApp)

// AppRegistry.registerComponent(appName, ()=> TextInputDemo)

// AppRegistry.registerComponent(appName, ()=> ScrollViewDemo)

// AppRegistry.registerComponent(appName, ()=> ListViewDemo)

// AppRegistry.registerComponent(appName,()=> RequestDemo)

AppRegistry.registerComponent(appName, ()=> CallMethodDemo)
