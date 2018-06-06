/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import  { createStackNavigator }  from 'react-navigation';
import SearchPage from './component/searchpage';
import SearchResults from './component/searchresults';
import ResultDetails from './component/resultdetails';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
const App = createStackNavigator({
  Home: { screen: SearchPage },
  Results: {screen: SearchResults},
  Details:{screen: ResultDetails}
});
export default App;


