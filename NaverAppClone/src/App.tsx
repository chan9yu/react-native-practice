import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootStack from './navigations/RootStack';

export default function App() {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<RootStack />
			</NavigationContainer>
		</SafeAreaProvider>
	);
}
