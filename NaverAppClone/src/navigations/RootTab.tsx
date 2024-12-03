import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ShoppingScreen from '../screens/ShoppingScreen';
import { ROUTER_NAMES } from './constants';

const Tab = createBottomTabNavigator();

export default function RootTab() {
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
					tabBarLabel: '홈',
					tabBarIcon: ({ color, focused }) => (
						<MaterialDesignIcons name={focused ? 'home' : 'home-outline'} color={color} size={24} />
					)
				}}
			/>
			<Tab.Screen
				name={ROUTER_NAMES.SHOPPING}
				component={ShoppingScreen}
				options={{
					tabBarLabel: '쇼핑',
					tabBarIcon: ({ color, focused }) => (
						<MaterialDesignIcons name={focused ? 'shopping' : 'shopping-outline'} color={color} size={24} />
					)
				}}
			/>
		</Tab.Navigator>
	);
}
