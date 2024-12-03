import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import type { OnShouldStartLoadWithRequest } from 'react-native-webview/lib/WebViewTypes';

import { ROUTER_NAMES, RootStackParamList } from '../navigations/constants';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList>;

export default function HomeScreen({ navigation }: HomeScreenProps) {
	const handleShouldStartLoadRequest: OnShouldStartLoadWithRequest = request => {
		if (request.url.startsWith('https://m.naver.com') || request.mainDocumentURL?.startsWith('https://m.naver.com')) {
			return true;
		}

		if (request.url !== null && request.url.startsWith('https://')) {
			navigation.navigate(ROUTER_NAMES.BROWSER);
			return false;
		}

		return true;
	};

	return (
		<SafeAreaView style={styles.safearea}>
			<WebView
				source={{ uri: 'https://m.naver.com/' }}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				onShouldStartLoadWithRequest={handleShouldStartLoadRequest}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safearea: {
		flex: 1
	}
});
