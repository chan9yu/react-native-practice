import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ShoppingScreen from '../screens/ShoppingScreen';

export const ROOT_TAB_NAVIGATOR = {
	HOME: 'Home',
	SHOPPING: 'Shopping'
} as const;

export type RootTabNavigatorParams = {
	[ROOT_TAB_NAVIGATOR.HOME]: undefined;
	[ROOT_TAB_NAVIGATOR.SHOPPING]: undefined;
};

const Tab = createBottomTabNavigator<RootTabNavigatorParams>();

export default function RootTabNavigator() {
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
				name={ROOT_TAB_NAVIGATOR.HOME}
				component={HomeScreen}
				options={{
					tabBarLabel: '홈',
					tabBarIcon: ({ color, focused }) => (
						<MaterialDesignIcons name={focused ? 'home' : 'home-outline'} color={color} size={24} />
					)
				}}
			/>
			<Tab.Screen
				name={ROOT_TAB_NAVIGATOR.SHOPPING}
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
