import { Stack } from 'expo-router/stack';

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			<Stack.Screen name="browser" options={{ headerShown: false }} />
		</Stack>
	);
}
