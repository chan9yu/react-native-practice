import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, TouchableOpacity, View } from 'react-native';

import { ROUTER_NAMES, RootStackParamList } from '../navigations/constants';

type ShoppingScreenProps = NativeStackScreenProps<RootStackParamList>;

export default function ShoppingScreen({ navigation }: ShoppingScreenProps) {
	const handleMoveToBrowserScreen = () => {
		navigation.navigate(ROUTER_NAMES.BROWSER);
	};

	return (
		<View>
			<Text>Shopping 2</Text>
			<MaterialDesignIcons name="shopping" color="#ff0000" size={200} />
			<TouchableOpacity onPress={handleMoveToBrowserScreen}>
				<Text>Go To Browser</Text>
			</TouchableOpacity>
		</View>
	);
}
