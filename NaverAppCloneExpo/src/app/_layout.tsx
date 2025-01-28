import { Stack } from 'expo-router/stack';

import LoginButton from '../components/LoginButton';
import WebViewProvider from '../contexts/WebViewProvider';

export default function RootLayout() {
	return (
		<WebViewProvider>
			<Stack>
				<Stack.Screen
					name="(tabs)"
					options={{
						title: '',
						headerStyle: { backgroundColor: 'black' },
						headerRight: LoginButton
					}}
				/>
				<Stack.Screen
					name="browser"
					options={{
						headerShown: false
					}}
				/>
				<Stack.Screen
					name="login"
					options={{
						title: '',
						headerStyle: { backgroundColor: 'black' },
						headerTintColor: 'white'
					}}
				/>
			</Stack>
		</WebViewProvider>
	);
}
