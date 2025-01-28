import { SafeAreaView, StyleSheet, Text } from 'react-native';

export default function HomeTab() {
	return (
		<SafeAreaView style={styles.container}>
			<Text>Tab Home</Text>
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
