import { useState } from 'react';
import { Platform, StatusBar, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Input from '../components/Input';

export default function HomeScreen() {
	const [url, setUrl] = useState('');

	return (
		<SafeAreaView style={styles.container} edges={['top', 'right', 'bottom', 'left']}>
			<Input
				iconName="add-link"
				placeholder="클릭하여 링크를 삽입하세요"
				placeholderTextColor="#AEAEB2"
				inputMode="url"
				value={url}
				onChangeText={setUrl}
			/>
			<Text>Loop Tube App</Text>
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
