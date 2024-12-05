import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RefreshControl, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import { OnShouldStartLoadWithRequest } from 'react-native-webview/lib/WebViewTypes';

import { ROUTER_NAMES, RootStackParamList } from '../navigations/constants';
import { useRef, useState } from 'react';

const SHOPPING_URL = 'https://shopping.naver.com/ns/home' as const;

type ShoppingScreenProps = NativeStackScreenProps<RootStackParamList>;

export default function ShoppingScreen({ navigation }: ShoppingScreenProps) {
	const [refreshing, setRefreshing] = useState(false);

	const webViewRef = useRef<WebView>(null);

	const handleRefresh = () => {
		setRefreshing(true);
		webViewRef.current?.reload();
	};

	const handleWebViewLoad = () => {
		setRefreshing(false);
	};

	const handleShouldStartLoadRequest: OnShouldStartLoadWithRequest = request => {
		if (request.url.startsWith(SHOPPING_URL) || request.mainDocumentURL?.startsWith(SHOPPING_URL)) {
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
			<ScrollView
				contentContainerStyle={styles.scrollView}
				refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
			>
				<WebView
					ref={webViewRef}
					source={{ uri: SHOPPING_URL }}
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
					renderLoading={() => <></>}
					startInLoadingState={true}
					onShouldStartLoadWithRequest={handleShouldStartLoadRequest}
					onLoad={handleWebViewLoad}
				/>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1
	},
	scrollView: {
		flex: 1
	}
});
