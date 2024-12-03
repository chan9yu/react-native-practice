import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ROUTER_NAMES, RootStackParamList } from './routes';
import BrowserScreen from './screens/BrowserScreen';
import HomeScreen from './screens/HomeScreen';
import ShoppingScreen from './screens/ShoppingScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeIcon = ({ color, focused }: { color: string; focused: boolean }) => {
	return <MaterialDesignIcons name={focused ? 'home' : 'home-outline'} color={color} size={26} />;
};

const ShoppingIcon = ({ color, focused }: { color: string; focused: boolean }) => {
	return <MaterialDesignIcons name={focused ? 'shopping' : 'shopping-outline'} color={color} size={26} />;
};

const HomeTab = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarStyle: { backgroundColor: 'black' },
				tabBarActiveTintColor: 'white',
				tabBarInactiveTintColor: 'white',
				headerShown: false
			}}
		>
			<Tab.Screen
				name={ROUTER_NAMES.HOME}
				component={HomeScreen}
				options={{
					tabBarIcon: HomeIcon,
					tabBarLabel: '홈'
				}}
			/>
			<Tab.Screen
				name={ROUTER_NAMES.SHOPPING}
				component={ShoppingScreen}
				options={{
					tabBarIcon: ShoppingIcon,
					tabBarLabel: '쇼핑'
				}}
			/>
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
