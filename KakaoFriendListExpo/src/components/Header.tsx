import { StyleSheet, Text, View } from 'react-native';
import IconButton from './IconButton';

export default function Header() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>친구</Text>
			<View style={styles.iconContainer}>
				<IconButton name="search-outline" />
				<IconButton name="person-add-outline" />
				<IconButton name="musical-notes-outline" />
				<IconButton name="settings-outline" />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 10
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold'
	},
	iconContainer: {
		flexDirection: 'row'
	}
});
