import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useMemo, useRef, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView, WebViewNavigation } from 'react-native-webview';
import { WebViewProgressEvent } from 'react-native-webview/lib/WebViewTypes';

import NavButton from '../components/NavButton';
import NaverButton from '../components/NaverButton';
import ProgressBar from '../components/ProgressBar';
import UrlDisplay from '../components/UrlDisplay';
import { ROUTER_NAMES, RootStackParamList } from '../navigations/constants';

type ShoppingScreenProps = NativeStackScreenProps<RootStackParamList, typeof ROUTER_NAMES.BROWSER>;

export default function BrowserScreen({ navigation, route }: ShoppingScreenProps) {
	const { initialUrl } = route.params;

	const [url, setUrl] = useState(initialUrl);
	const [canGoBack, setCanGoBack] = useState(false);
	const [canGoForward, setCanGoForward] = useState(false);

	const urlTitle = useMemo(() => url.replace('https://', '').split('/')[0], [url]);

	const progressAnim = useRef(new Animated.Value(0)).current;
	const webViewRef = useRef<WebView>(null);

	const handleUrlChange = (event: WebViewNavigation) => {
		console.log('### TEST', event);
		setCanGoBack(event.canGoBack);
		setCanGoForward(event.canGoForward);
		setUrl(event.url);
	};

	const handleLoadProgress = (event: WebViewProgressEvent) => {
		progressAnim.setValue(event.nativeEvent.progress);
	};

	const handleLoadEnd = () => {
		progressAnim.setValue(0);
	};

	return (
		<SafeAreaView style={styles.safeArea}>
			<UrlDisplay urlTitle={urlTitle} />
			<ProgressBar progressAnim={progressAnim} />
			<WebView
				ref={webViewRef}
				source={{ uri: initialUrl }}
				onNavigationStateChange={handleUrlChange}
				onLoadProgress={handleLoadProgress}
				onLoadEnd={handleLoadEnd}
			/>
			<View style={styles.navigator}>
				<NaverButton onPress={() => navigation.goBack()} />
				<NavButton iconName="arrow-left" disabled={!canGoBack} onPress={() => webViewRef.current?.goBack()} />
				<NavButton iconName="arrow-right" disabled={!canGoForward} onPress={() => webViewRef.current?.goForward()} />
				<NavButton iconName="refresh" onPress={() => webViewRef.current?.reload()} />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: 'black'
	},
	navigator: {
		backgroundColor: 'black',
		flexDirection: 'row',
		paddingVertical: 10,
		paddingHorizontal: 40,
		justifyContent: 'space-between',
		alignItems: 'center'
	}
});
