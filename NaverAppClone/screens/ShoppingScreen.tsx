import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, TouchableOpacity, View } from 'react-native';

import { ROUTER_NAMES, RootStackParamList } from '../routes';

type ShoppingScreenProps = NativeStackScreenProps<RootStackParamList>;

export default function ShoppingScreen({ navigation }: ShoppingScreenProps) {
	return (
		<View>
			<Text>Shopping</Text>
			<TouchableOpacity onPress={() => navigation.navigate(ROUTER_NAMES.BROWSER)}>
				<Text>Go To Browser</Text>
			</TouchableOpacity>
		</View>
	);
}
