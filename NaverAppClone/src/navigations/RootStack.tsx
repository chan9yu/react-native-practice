import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BrowserScreen from '../screens/BrowserScreen';
import RootTab from './RootTab';

export const ROOT_STACK_NAVIGATOR = {
	ROOT_TAB: 'RootTab',
	BROWSER: 'Browser'
} as const;

export type RootStackNavigatorParams = {
	[ROOT_STACK_NAVIGATOR.ROOT_TAB]: undefined;
	[ROOT_STACK_NAVIGATOR.BROWSER]: undefined;
};

const Stack = createNativeStackNavigator<RootStackNavigatorParams>();

export default function RootStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name={ROOT_STACK_NAVIGATOR.ROOT_TAB} component={RootTab} options={{ headerShown: false }} />
			<Stack.Screen name={ROOT_STACK_NAVIGATOR.BROWSER} component={BrowserScreen} />
		</Stack.Navigator>
	);
}
