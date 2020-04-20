import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ColorScreen from "./src/screens/ColorScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ImageScreen from "./src/screens/ImageScreen";
import ListScreenComponent from "./src/screens/ListScreenComponent";
import SquareScreen from './src/screens/SquareScreen';

const App = createStackNavigator(
  {
    Home: HomeScreen,
    colorScreen:ColorScreen,
    componentScreen:ComponentScreen,
    counterScreen:CounterScreen,
    imageScreen:ImageScreen,
    listScreenComponent:ListScreenComponent,
    squareScreen:SquareScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(App);
