import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import { OnShouldStartLoadWithRequest } from 'react-native-webview/lib/WebViewTypes';

import { ROUTER_NAMES, RootStackParamList } from '../navigations/constants';

const HOME_URL = 'https://m.naver.com' as const;

type HomeScreenProps = NativeStackScreenProps<RootStackParamList>;

export default function HomeScreen({ navigation }: HomeScreenProps) {
	const handleShouldStartLoadRequest: OnShouldStartLoadWithRequest = request => {
		if (request.url.startsWith(HOME_URL) || request.mainDocumentURL?.startsWith(HOME_URL)) {
			return true;
		}

		if (request.url !== null && request.url.startsWith('https://')) {
			navigation.navigate(ROUTER_NAMES.BROWSER, { initialUrl: request.url });
			return false;
		}

		return true;
	};

	return (
		<SafeAreaView style={styles.safeArea}>
			<WebView
				source={{ uri: HOME_URL }}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				onShouldStartLoadWithRequest={handleShouldStartLoadRequest}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1
	}
});
