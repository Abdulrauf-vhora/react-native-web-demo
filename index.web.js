import {AppRegistry} from 'react-native';
import App from './App';
if (module.hot) {
  module.hot.accept();
}
AppRegistry.registerComponent('React Native Web', () => App);
AppRegistry.runApplication('React Native Web', {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});
// https://javascript.plainenglish.io/how-to-integrate-react-native-web-existing-react-native-apps-8e4964ad2f0b
