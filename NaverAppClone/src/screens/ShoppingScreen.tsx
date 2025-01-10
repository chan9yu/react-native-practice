import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useRef, useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView, WebViewProps } from 'react-native-webview';

import { ROOT_STACK_NAVIGATOR, RootStackNavigatorParams } from '../navigations/RootStack';
import { ROOT_TAB_NAVIGATOR, RootTabNavigatorParams } from '../navigations/RootTab';

type ShoppingScreenProps = CompositeScreenProps<
	BottomTabScreenProps<RootTabNavigatorParams, typeof ROOT_TAB_NAVIGATOR.SHOPPING>,
	NativeStackScreenProps<RootStackNavigatorParams, typeof ROOT_STACK_NAVIGATOR.ROOT_TAB>
>;

const BASE_URL = 'https://shopping.naver.com/ns/home' as const;

export default function ShoppingScreen({ navigation }: ShoppingScreenProps) {
	const webViewRef = useRef<WebView>(null);

	const [refreshing, setRefreshing] = useState(false);

	const handleRefresh = () => {
		setRefreshing(true);
		webViewRef.current?.reload();
	};

	const handleShouldStartLoadWithRequest: WebViewProps['onShouldStartLoadWithRequest'] = ({ url, mainDocumentURL }) => {
		if (url.startsWith(BASE_URL) || mainDocumentURL?.startsWith(BASE_URL)) {
			return true;
		}

		if (url !== null && url.startsWith('https://')) {
			navigation.navigate(ROOT_STACK_NAVIGATOR.BROWSER, { initialUrl: url });
			return false;
		}

		return true;
	};

	const handleWebViewLoad: WebViewProps['onLoad'] = () => {
		setRefreshing(false);
	};

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				contentContainerStyle={styles.scrollView}
				refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
			>
				<WebView
					ref={webViewRef}
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
