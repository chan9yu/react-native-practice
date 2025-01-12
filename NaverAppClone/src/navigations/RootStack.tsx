import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginButton from '../components/LoginButton';
import BrowserScreen from '../screens/BrowserScreen';
import LoginScreen from '../screens/LoginScreen';
import RootTab from './RootTab';

export const ROOT_STACK_NAVIGATOR = {
	ROOT_TAB: 'RootTab',
	BROWSER: 'Browser',
	LOGIN: 'Login'
} as const;

export type RootStackNavigatorParams = {
	[ROOT_STACK_NAVIGATOR.ROOT_TAB]: undefined;
	[ROOT_STACK_NAVIGATOR.BROWSER]: { initialUrl: string };
	[ROOT_STACK_NAVIGATOR.LOGIN]: undefined;
};

const Stack = createNativeStackNavigator<RootStackNavigatorParams>();

export default function RootStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={ROOT_STACK_NAVIGATOR.ROOT_TAB}
				component={RootTab}
				options={{
					title: '',
					headerStyle: { backgroundColor: 'black' },
					headerRight: LoginButton
				}}
			/>
			<Stack.Screen
				name={ROOT_STACK_NAVIGATOR.BROWSER}
				component={BrowserScreen}
				options={{
					headerShown: false
				}}
			/>
			<Stack.Screen
				name={ROOT_STACK_NAVIGATOR.LOGIN}
				component={LoginScreen}
				options={{
					title: '',
					headerStyle: { backgroundColor: 'black' },
					headerTintColor: 'white'
				}}
			/>
		</Stack.Navigator>
	);
}
