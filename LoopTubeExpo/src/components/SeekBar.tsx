import { useEffect, useRef } from 'react';
import { Animated, PanResponder, StyleSheet, View, ViewStyle } from 'react-native';

import { YT_SIZES } from '../libs/youtubePlayer';
import { usePlayerStore } from '../store/player';
import { useWebViewStore } from '../store/webView';

export default function SeekBar() {
	const { pauseVideo, playVideo, seekTo } = useWebViewStore(state => state.actions);
	const durationInSec = usePlayerStore(state => state.durationInSec);
	const currentTimeInSec = usePlayerStore(state => state.currentTimeInSec);

	const seekBarAnim = useRef(new Animated.Value(0)).current;

	const durationInSecRef = useRef(durationInSec);
	durationInSecRef.current = durationInSec;

	const panResponder = useRef(
		PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onMoveShouldSetPanResponder: () => true,
			onPanResponderGrant: pauseVideo,
			onPanResponderMove: (_, gestureState) => {
				const newTime = (gestureState.moveX / YT_SIZES.WIDTH) * durationInSecRef.current;
				seekBarAnim.setValue(newTime);
			},
			onPanResponderRelease: (_, gestureState) => {
				const newTime = (gestureState.moveX / YT_SIZES.WIDTH) * durationInSecRef.current;
				seekTo(newTime);
				playVideo();
			}
		})
	).current;

	useEffect(() => {
		Animated.timing(seekBarAnim, {
			toValue: currentTimeInSec,
			duration: 50,
			useNativeDriver: false
		}).start();
	}, [currentTimeInSec, seekBarAnim]);

	const seekBarStyle: ViewStyle = {
		width: seekBarAnim.interpolate({
			inputRange: [0, durationInSec],
			outputRange: ['0%', '100%']
		})
	};

	const thumbStyle: ViewStyle = {
		left: seekBarAnim.interpolate({
			inputRange: [0, durationInSec],
			outputRange: ['0%', '100%']
		})
	};

	return (
		<View style={styles.container}>
			<Animated.View style={[styles.progress, seekBarStyle]} />
			<Animated.View style={[styles.thumb, thumbStyle]} {...panResponder.panHandlers} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 3,
		backgroundColor: '#D4D4D4',
		pointerEvents: 'box-none'
	},
	progress: {
		height: 3,
		backgroundColor: '#00DDA8',
		pointerEvents: 'none'
	},
	thumb: {
		width: 14,
		height: 14,
		borderRadius: 7,
		backgroundColor: '#00DDA8',
		position: 'absolute',
		top: -5.5
	}
});
