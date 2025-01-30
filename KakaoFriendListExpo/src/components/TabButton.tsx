import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ComponentProps } from 'react';
import { GestureResponderEvent, StyleSheet, TouchableOpacity } from 'react-native';

type TabButtonProps = {
	activeIconName: ComponentProps<typeof MaterialCommunityIcons>['name'];
	inactiveIconName: ComponentProps<typeof MaterialCommunityIcons>['name'];
	isSelected: boolean;
	onPress?: (event: GestureResponderEvent) => void;
};

export default function TabButton({ activeIconName, inactiveIconName, isSelected, onPress }: TabButtonProps) {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<MaterialCommunityIcons name={isSelected ? activeIconName : inactiveIconName} size={24} color="black" />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 10
	}
});
