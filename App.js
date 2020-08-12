import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignIn from './Components/SignIn';

const AppNavigator = createStackNavigator(
  {
    SignIn: SignIn,
  }
);

export default createAppContainer(AppNavigator);