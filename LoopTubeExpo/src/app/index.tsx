import queryString from 'query-string';
import { useState } from 'react';
import { Alert, Platform, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Controller from '../components/Controller';
import Input from '../components/Input';
import YoutubeView from '../components/YoutubeView';

export default function HomeScreen() {
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
			<Controller />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#242424',
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
	}
});
