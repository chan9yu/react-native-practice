import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ROOT_STACK_NAVIGATOR, RootStackNavigatorParams } from '../navigations/RootStack';

type BrowserScreenProps = NativeStackScreenProps<RootStackNavigatorParams, typeof ROOT_STACK_NAVIGATOR.BROWSER>;

export default function BrowserScreen({ navigation }: BrowserScreenProps) {
	const handleMoveToBrowserScreen = () => {
		navigation.navigate(ROOT_STACK_NAVIGATOR.ROOT_TAB);
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text>Browser Screen</Text>
			<TouchableOpacity onPress={handleMoveToBrowserScreen}>
				<Text>Go To Home</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
