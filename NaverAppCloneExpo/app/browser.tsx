import { SafeAreaView, StyleSheet, Text } from 'react-native';

export default function BrowserScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<Text>Browser Screen</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
