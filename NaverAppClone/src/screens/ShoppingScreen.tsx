import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useRef, useState } from 'react';
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import type { ShouldStartLoadRequest } from 'react-native-webview/lib/WebViewTypes';

import { useWebViewContext } from '../contexts/WebViewProvider';
import { ROOT_STACK_NAVIGATOR, RootStackNavigatorParams } from '../navigations/RootStack';
import { ROOT_TAB_NAVIGATOR, RootTabNavigatorParams } from '../navigations/RootTab';

type ShoppingScreenProps = CompositeScreenProps<
	BottomTabScreenProps<RootTabNavigatorParams, typeof ROOT_TAB_NAVIGATOR.SHOPPING>,
	NativeStackScreenProps<RootStackNavigatorParams, typeof ROOT_STACK_NAVIGATOR.ROOT_TAB>
>;

const BASE_URL = 'https://shopping.naver.com/ns/home' as const;

export default function ShoppingScreen({ navigation }: ShoppingScreenProps) {
	const { addWebView } = useWebViewContext();

	const webViewRef = useRef<WebView | null>(null);

	const [refreshing, setRefreshing] = useState(false);

	const callbackWebViewRef = (node: WebView | null) => {
		if (node) {
			webViewRef.current = node;
			addWebView(node);
		}
	};

	const handleRefresh = () => {
		setRefreshing(true);
		webViewRef.current?.reload();
	};

	const handleShouldStartLoadWithRequest = ({ url, mainDocumentURL }: ShouldStartLoadRequest) => {
		if (url.startsWith(BASE_URL) || mainDocumentURL?.startsWith(BASE_URL)) {
			return true;
		}

		if (url !== null && url.startsWith('https://')) {
			navigation.navigate(ROOT_STACK_NAVIGATOR.BROWSER, { initialUrl: url });
			return false;
		}

		return true;
	};

	const handleWebViewLoad = () => {
		setRefreshing(false);
	};

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				contentContainerStyle={styles.scrollView}
				refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
			>
				<WebView
					ref={callbackWebViewRef}
					source={{ uri: BASE_URL }}
					showsHorizontalScrollIndicator={false}
					showsVerticalScrollIndicator={false}
					onShouldStartLoadWithRequest={handleShouldStartLoadWithRequest}
					onLoad={handleWebViewLoad}
					renderLoading={() => <></>}
					startInLoadingState={true}
				/>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	scrollView: {
		flex: 1
	}
});
