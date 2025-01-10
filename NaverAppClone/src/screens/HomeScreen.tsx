import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView, WebViewProps } from 'react-native-webview';

import { ROOT_STACK_NAVIGATOR, RootStackNavigatorParams } from '../navigations/RootStack';
import { ROOT_TAB_NAVIGATOR, RootTabNavigatorParams } from '../navigations/RootTab';

type HomeScreenProps = CompositeScreenProps<
	BottomTabScreenProps<RootTabNavigatorParams, typeof ROOT_TAB_NAVIGATOR.HOME>,
	NativeStackScreenProps<RootStackNavigatorParams, typeof ROOT_STACK_NAVIGATOR.ROOT_TAB>
>;

const BASE_URL = 'https://m.naver.com' as const;

export default function HomeScreen({ navigation }: HomeScreenProps) {
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

	return (
		<SafeAreaView style={styles.container}>
			<WebView
				source={{ uri: BASE_URL }}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				onShouldStartLoadWithRequest={handleShouldStartLoadWithRequest}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
