import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { router, useFocusEffect } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import useLogin from '../hooks/useLogin';

export default function LoginButton() {
	const { isLoggedIn, loadLoggedIn, logout } = useLogin();

	const [isFocused, setIsFocused] = useState(false);

	const handleLogout = () => {
		logout();
	};

	const handleLogin = () => {
		router.navigate({ pathname: 'login' });
	};

	useFocusEffect(() => {
		setIsFocused(true);

		return () => {
			setIsFocused(false);
		};
	});

	useEffect(() => {
		if (isFocused) {
			loadLoggedIn();
		}
	}, [isFocused, loadLoggedIn]);

	return (
		<TouchableOpacity style={styles.button} onPress={isLoggedIn ? handleLogout : handleLogin}>
			<MaterialCommunityIcons name={isLoggedIn ? 'logout' : 'login'} color="white" size={24} />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		padding: 8
	}
});
