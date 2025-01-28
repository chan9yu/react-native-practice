import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { router } from 'expo-router';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ShoppingScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<Text>Tab Shopping</Text>
			<TouchableOpacity onPress={() => router.navigate({ pathname: 'browser' })}>
				<Text>Go To Browser</Text>
			</TouchableOpacity>
			<MaterialCommunityIcons name="shopping" size={50} color={'red'} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
