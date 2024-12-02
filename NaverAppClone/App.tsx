import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ROUTER_NAMES, RootStackParamList } from './routes';
import BrowserScreen from './screens/BrowserScreen';
import HomeScreen from './screens/HomeScreen';
import ShoppingScreen from './screens/ShoppingScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeTab = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name={ROUTER_NAMES.HOME} component={HomeScreen} />
			<Tab.Screen name={ROUTER_NAMES.SHOPPING} component={ShoppingScreen} />
		</Tab.Navigator>
	);
};

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name={ROUTER_NAMES.HOME_TAB} component={HomeTab} options={{ headerShown: false }} />
				<Stack.Screen name={ROUTER_NAMES.BROWSER} component={BrowserScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
