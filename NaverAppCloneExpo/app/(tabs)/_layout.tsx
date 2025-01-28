import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarStyle: { backgroundColor: 'black' },
				tabBarActiveTintColor: 'white',
				tabBarInactiveTintColor: 'white',
				headerShown: false
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					tabBarLabel: '홈',
					tabBarIcon: ({ color, focused }) => (
						<MaterialCommunityIcons name={focused ? 'home' : 'home-outline'} color={color} size={24} />
					)
				}}
			/>
			<Tabs.Screen
				name="shopping"
				options={{
					tabBarLabel: '쇼핑',
					tabBarIcon: ({ color, focused }) => (
						<MaterialCommunityIcons name={focused ? 'shopping' : 'shopping-outline'} color={color} size={24} />
					)
				}}
			/>
		</Tabs>
	);
}
