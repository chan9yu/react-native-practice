import queryString from 'query-string';
import { useState } from 'react';
import { Alert, Platform, StatusBar, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Controller from '../components/Controller';
import Input from '../components/Input';
import SeekBar from '../components/SeekBar';
import YoutubeView from '../components/YoutubeView';
import { usePlayerStore } from '../store/player';
import { formatTime } from '../utils/format';

export default function HomeScreen() {
	const durationInSec = usePlayerStore(state => state.durationInSec);
	const currentTimeInSec = usePlayerStore(state => state.currentTimeInSec);

	const [url, setUrl] = useState('https://www.youtube.com/watch?v=HfaIcB4Ogxk');
	const [youtubeId, setYoutubeId] = useState('');

	const handlePressOpenLink = () => {
		const parsedUrl = queryString.parseUrl(url);
		const id = parsedUrl.query.v;

		if (typeof id === 'string') {
			setYoutubeId(id);
		} else {
			Alert.alert('잘못된 URL입니다.');
		}
	};

	return (
		<SafeAreaView style={styles.container} edges={['top', 'right', 'bottom', 'left']}>
			<Input
				iconName="add-link"
				onPressIcon={handlePressOpenLink}
				placeholder="클릭하여 링크를 삽입하세요"
				placeholderTextColor="#AEAEB2"
				inputMode="url"
				value={url}
				onChangeText={setUrl}
			/>
			<YoutubeView youtubeId={youtubeId} />
			<SeekBar />
			<Text style={styles.timeText}>
				{formatTime(Math.floor(currentTimeInSec))} / {formatTime(Math.floor(durationInSec))}
			</Text>
			<Controller />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#242424',
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
	},
	timeText: {
		alignSelf: 'flex-end',
		color: '#AEAEB2',
		fontSize: 13,
		marginTop: 15,
		marginRight: 20
	}
});
