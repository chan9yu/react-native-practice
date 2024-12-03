import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

import { ROUTER_NAMES, RootStackParamList } from '../routes';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList>;

export default function HomeScreen({ navigation }: HomeScreenProps) {
	return (
		<SafeAreaView style={styles.safearea}>
			<WebView
				source={{ uri: 'https://m.naver.com/' }}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				onShouldStartLoadWithRequest={request => {
					if (
						request.url.startsWith('https://m.naver.com') ||
						request.mainDocumentURL?.startsWith('https://m.naver.com')
					) {
						return true;
					}

					if (request.url !== null && request.url.startsWith('https://')) {
						navigation.navigate(ROUTER_NAMES.BROWSER);
						return false;
					}

					return true;
				}}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safearea: {
		flex: 1
	}
});
