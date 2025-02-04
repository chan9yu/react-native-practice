import { Stack } from 'expo-router/stack';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';

export default function Layout() {
	return (
		<SafeAreaProvider initialMetrics={initialWindowMetrics}>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="index" />
			</Stack>
		</SafeAreaProvider>
	);
}
