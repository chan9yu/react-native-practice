import { NavigationContainer } from '@react-navigation/native';

import WebViewProvider from './contexts/WebViewProvider';
import RootStack from './navigations/RootStack';

export default function App() {
	return (
		<WebViewProvider>
			<NavigationContainer>
				<RootStack />
			</NavigationContainer>
		</WebViewProvider>
	);
}
