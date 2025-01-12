import CookieManager from '@react-native-cookies/cookies';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { useWebViewContext } from '../contexts/WebViewProvider';
import { ROOT_STACK_NAVIGATOR, RootStackNavigatorParams } from '../navigations/RootStack';

export default function LoginButton() {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigatorParams>>();
	const isFocused = useIsFocused();

	const { webViewRefs } = useWebViewContext();

	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const checkLoginStatus = async () => {
		const cookies = await CookieManager.get('https://.naver.com', true);
		setIsLoggedIn(!!cookies.NID_SES);
	};

	const handleLogin = () => {
		navigation.navigate(ROOT_STACK_NAVIGATOR.LOGIN);
	};

	const handleLogout = async () => {
		try {
			await CookieManager.clearAll(true);
			setIsLoggedIn(false);
			webViewRefs.current.forEach(webView => webView.reload());
		} catch (error) {
			console.error('Failed to clear cookies:', error);
		}
	};

	useEffect(() => {
		isFocused && checkLoginStatus();
	}, [isFocused, checkLoginStatus]);

	return (
		<TouchableOpacity style={styles.button} onPress={isLoggedIn ? handleLogout : handleLogin}>
			<MaterialDesignIcons name={isLoggedIn ? 'logout' : 'login'} color="white" size={24} />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		padding: 8
	}
});
