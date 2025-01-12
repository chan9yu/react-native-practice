import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet } from 'react-native';
import { WebView, WebViewNavigation } from 'react-native-webview';

import { useWebViewContext } from '../contexts/WebViewProvider';
import { RootStackNavigatorParams } from '../navigations/RootStack';

const BASE_URL = 'https://nid.naver.com/nidlogin.login';

export default function LoginScreen() {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigatorParams>>();
	const { webViewRefs } = useWebViewContext();

	const handleLoginRedirect = (event: WebViewNavigation) => {
		if (event.url === 'https://www.naver.com/') {
			webViewRefs.current.forEach(webview => webview.reload());
			navigation.goBack();
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
		flex: 1,
		backgroundColor: 'black'
	}
});
