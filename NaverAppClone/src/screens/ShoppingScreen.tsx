import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ROOT_STACK_NAVIGATOR, RootStackNavigatorParams } from '../navigations/RootStack';
import { ROOT_TAB_NAVIGATOR, RootTabNavigatorParams } from '../navigations/RootTab';

type ShoppingScreenProps = CompositeScreenProps<
	BottomTabScreenProps<RootTabNavigatorParams, typeof ROOT_TAB_NAVIGATOR.SHOPPING>,
	NativeStackScreenProps<RootStackNavigatorParams, typeof ROOT_STACK_NAVIGATOR.ROOT_TAB>
>;

export default function ShoppingScreen({ navigation }: ShoppingScreenProps) {
	const handleMoveToBrowserScreen = () => {
		navigation.navigate(ROOT_STACK_NAVIGATOR.BROWSER);
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text>Shopping Screen</Text>
			<TouchableOpacity onPress={handleMoveToBrowserScreen}>
				<Text>Go To Brower</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
