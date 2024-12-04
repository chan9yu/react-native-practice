import { Animated, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

type ProgressBarProps = {
	progressAnim: Animated.Value;
};

export default function ProgressBar({ progressAnim }: ProgressBarProps) {
	const loadingBarStyle: StyleProp<ViewStyle> = {
		width: progressAnim.interpolate({
			inputRange: [0, 1],
			outputRange: ['0%', '100%']
		})
	};

	return (
		<View style={styles.background}>
			<Animated.View style={[styles.loadingBar, loadingBarStyle]} />
		</View>
	);
}

const styles = StyleSheet.create({
	background: {
		height: 3,
		backgroundColor: 'white'
	},
	loadingBar: {
		width: '50%',
		height: '100%',
		backgroundColor: 'green'
	}
});
