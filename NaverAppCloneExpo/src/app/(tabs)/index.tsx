import { router } from 'expo-router';
import { SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import type { ShouldStartLoadRequest } from 'react-native-webview/lib/WebViewTypes';

import { useWebViewContext } from '../../contexts/WebViewProvider';
import useLogin from '../../hooks/useLogin';

const BASE_URL = 'https://m.naver.com' as const;

export default function HomeScreen() {
	const { addWebView } = useWebViewContext();
	const { loadLoggedIn, onMessage } = useLogin();

	const callbackWebViewRef = (node: WebView | null) => {
		node && addWebView(node);
	};

	const handleShouldStartLoadWithRequest = ({ url, mainDocumentURL }: ShouldStartLoadRequest) => {
		if (url.startsWith(BASE_URL) || mainDocumentURL?.startsWith(BASE_URL)) {
			return true;
		}

		if (url !== null && url.startsWith('https://')) {
			router.navigate({
				pathname: 'browser',
				params: { initialUrl: url }
			});

			return false;
		}

		return true;
	};

	return (
		<SafeAreaView style={styles.container}>
			<WebView
				ref={callbackWebViewRef}
				source={{ uri: BASE_URL }}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				onShouldStartLoadWithRequest={handleShouldStartLoadWithRequest}
				onLoadEnd={() => {
					loadLoggedIn();
				}}
				onMessage={onMessage}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
