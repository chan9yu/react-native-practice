import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BrowserScreen from '../screens/BrowserScreen';
import RootTab from './RootTab';
import { ROUTER_NAMES, RootStackParamList } from './constants';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name={ROUTER_NAMES.ROOT_TAB} component={RootTab} options={{ headerShown: false }} />
			<Stack.Screen name={ROUTER_NAMES.BROWSER} component={BrowserScreen} />
		</Stack.Navigator>
	);
}
