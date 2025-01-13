import { useBackHandler } from '@react-native-community/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useMemo, useRef, useState } from 'react';
import { Animated, SafeAreaView, Share, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import type { WebViewNavigation, WebViewProgressEvent } from 'react-native-webview/lib/WebViewTypes';

import NavButton from '../components/NavButton';
import NaverButton from '../components/NaverButton';
import ProgressBar from '../components/ProgressBar';
import UrlDisplay from '../components/UrlDisplay';
import { useWebViewContext } from '../contexts/WebViewProvider';
import { ROOT_STACK_NAVIGATOR, RootStackNavigatorParams } from '../navigations/RootStack';

const DISABLE_PINCH_ZOOM = `(function () {
	const meta = document.createElement('meta');
	meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no');
	meta.setAttribute('name', 'viewport');
	document.getElementsByTagName('head')[0].appendChild(meta);

	document.body.style['user-select'] = 'none';
	document.body.style['-webkit-user-select'] = 'none';
})();`;

type BrowserScreenProps = NativeStackScreenProps<RootStackNavigatorParams, typeof ROOT_STACK_NAVIGATOR.BROWSER>;

export default function BrowserScreen({ navigation, route }: BrowserScreenProps) {
	const { initialUrl } = route.params;
	const { addWebView } = useWebViewContext();

	const progressAnim = useRef(new Animated.Value(0)).current;
	const webViewRef = useRef<WebView | null>(null);

	const [url, setUrl] = useState(initialUrl);
	const [canGoBack, setCanGoBack] = useState(false);
	const [canGoForward, setCanGoForward] = useState(false);

	useBackHandler(() => {
		if (canGoBack) {
			webViewRef.current?.goBack();
			return true;
		}

		return false;
	});

	const urlTitle = useMemo(() => url.replace('https://', '').split('/')[0], [url]);

	const callbackWebViewRef = (node: WebView | null) => {
		if (node) {
			webViewRef.current = node;
			addWebView(node);
		}
	};

	const handleUrlChange = (event: WebViewNavigation) => {
		setUrl(event.url);
		setCanGoBack(event.canGoBack);
		setCanGoForward(event.canGoForward);
	};

	const handleLoadProgress = (event: WebViewProgressEvent) => {
		progressAnim.setValue(event.nativeEvent.progress);
	};

	const handleLoadEnd = () => {
		progressAnim.setValue(0);
	};

	const handleShareUrl = async () => {
		try {
			await Share.share({ message: url });
		} catch (error) {
			console.error('Error sharing URL:', error);
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<UrlDisplay urlTitle={urlTitle} />
			<ProgressBar progressAnim={progressAnim} />
			<WebView
				ref={callbackWebViewRef}
				source={{ uri: initialUrl }}
				onNavigationStateChange={handleUrlChange}
				onLoadProgress={handleLoadProgress}
				onLoadEnd={handleLoadEnd}
				injectedJavaScript={DISABLE_PINCH_ZOOM}
				onMessage={() => {}}
				allowsLinkPreview={false}
			/>
			<View style={styles.navigator}>
				<NaverButton onPress={navigation.goBack} />
				<NavButton iconName="arrow-left" disabled={!canGoBack} onPress={webViewRef.current?.goBack} />
				<NavButton iconName="arrow-right" disabled={!canGoForward} onPress={webViewRef.current?.goForward} />
				<NavButton iconName="refresh" onPress={webViewRef.current?.reload} />
				<NavButton iconName="share-outline" onPress={handleShareUrl} />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black'
	},
	navigator: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: 'black',
		paddingVertical: 10,
		paddingHorizontal: 40
	}
});
