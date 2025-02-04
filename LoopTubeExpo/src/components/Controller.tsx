import { StyleSheet, View } from 'react-native';
import IconButton from './IconButton';

export default function Controller() {
	return (
		<View style={styles.container}>
			<IconButton iconName="data-array" iconSize={28} iconColor="#D9D9D9" />
			<IconButton iconName="play-circle" iconSize={40} iconColor="#00DDA8" style={styles.playButton} />
			<IconButton iconName="repeat" iconSize={28} iconColor="#D9D9D9" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#1A1A1A',
		borderRadius: 10,
		marginHorizontal: 16,
		marginTop: 20,
		paddingVertical: 12,
		paddingHorizontal: 72,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row'
	},
	playButton: {
		height: 50,
		width: 50,
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: 54
	}
});
