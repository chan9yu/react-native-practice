import { router } from 'expo-router';
import { SafeAreaView, StyleSheet } from 'react-native';
import WebView, { WebViewNavigation } from 'react-native-webview';

import { useWebViewContext } from '../contexts/WebViewProvider';

const BASE_URL = 'https://nid.naver.com/nidlogin.login' as const;

export default function Login() {
	const { webViewRefs } = useWebViewContext();

	const handleLoginRedirect = (event: WebViewNavigation) => {
		if (event.url === 'https://m.naver.com/') {
			webViewRefs.current.forEach(webview => webview.reload());
			router.back();
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<WebView source={{ uri: BASE_URL }} onNavigationStateChange={handleLoginRedirect} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
