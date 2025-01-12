import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { ROOT_STACK_NAVIGATOR, RootStackNavigatorParams } from '../navigations/RootStack';

export default function LoginButton() {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigatorParams>>();

	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLogin = () => {
		navigation.navigate(ROOT_STACK_NAVIGATOR.LOGIN);
	};

	const handleLogout = () => {
		navigation.navigate(ROOT_STACK_NAVIGATOR.LOGIN);
	};

	return (
		<TouchableOpacity onPress={isLoggedIn ? handleLogout : handleLogin}>
			<MaterialDesignIcons name={isLoggedIn ? 'logout' : 'login'} color="white" size={24} />
		</TouchableOpacity>
	);
}
