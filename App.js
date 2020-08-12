import { createAppContainer } from 'react-navigation';
import SignIn from './Components/SignIn';

const AppNavigator = createStackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      headerShown: false,
    },
  },
}
);

export default createAppContainer(AppNavigator);