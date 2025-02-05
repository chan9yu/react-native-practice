import { StyleSheet, View } from 'react-native';

import { usePlayerStore } from '../store/player';
import { useWebViewStore } from '../store/webView';
import IconButton from './IconButton';

export default function Controller() {
	const { pauseVideo, playVideo } = useWebViewStore(state => state.actions);
	const playing = usePlayerStore(state => state.playing);

	return (
		<View style={styles.container}>
			<IconButton iconName="data-array" iconSize={28} iconColor="#D9D9D9" />
			{playing ? (
				<IconButton
					iconName="pause-circle"
					iconSize={42}
					iconColor="#E5E5EA"
					style={styles.playButton}
					onPress={pauseVideo}
				/>
			) : (
				<IconButton
					iconName="play-circle"
					iconSize={38}
					iconColor="#00DDA8"
					style={styles.playButton}
					onPress={playVideo}
				/>
			)}
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
