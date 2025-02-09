import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { usePlayerStore } from '../store/player';
import { useWebViewStore } from '../store/webView';
import IconButton from './IconButton';

export default function Controller() {
	const { pauseVideo, playVideo, seekTo } = useWebViewStore(state => state.actions);

	const { setRepeatEndInSec, setRepeatStartInSec, toggleRepeated } = usePlayerStore(state => state.actions);
	const playing = usePlayerStore(state => state.playing);
	const currentTimeInSec = usePlayerStore(state => state.currentTimeInSec);
	const repeatEndInSec = usePlayerStore(state => state.repeatEndInSec);
	const repeatStartInSec = usePlayerStore(state => state.repeatStartInSec);
	const repeated = usePlayerStore(state => state.repeated);

	const handlePressSetRepeatTime = () => {
		if (repeatStartInSec === null) {
			setRepeatStartInSec(currentTimeInSec);
		} else if (repeatEndInSec === null) {
			setRepeatEndInSec(currentTimeInSec);
		} else {
			setRepeatStartInSec(null);
			setRepeatEndInSec(null);
		}
	};

	useEffect(() => {
		if (repeated && repeatStartInSec !== null && repeatEndInSec !== null) {
			if (currentTimeInSec > repeatEndInSec) {
				seekTo(repeatStartInSec);
			}
		}
	}, [currentTimeInSec, repeatEndInSec, repeatStartInSec, repeated, seekTo]);

	return (
		<View style={styles.container}>
			<IconButton iconName="data-array" iconSize={28} iconColor="#D9D9D9" onPress={handlePressSetRepeatTime} />
			<IconButton
				iconName={playing ? 'pause-circle' : 'play-circle'}
				iconSize={playing ? 42 : 38}
				iconColor={playing ? '#E5E5EA' : '#00DDA8'}
				style={styles.playButton}
				onPress={playing ? pauseVideo : playVideo}
			/>
			<IconButton
				iconName="repeat"
				iconSize={28}
				iconColor={repeated ? '#00DDA8' : '#D9D9D9'}
				onPress={toggleRepeated}
			/>
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
