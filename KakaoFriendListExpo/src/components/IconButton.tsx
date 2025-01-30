import { Ionicons } from '@expo/vector-icons';
import { ComponentProps } from 'react';
import { ColorValue, TouchableOpacity, StyleSheet } from 'react-native';

type IconButtonProps = {
	name: ComponentProps<typeof Ionicons>['name'];
	backgroundColor?: ColorValue;
};

export default function IconButton({ name, backgroundColor }: IconButtonProps) {
	return (
		<TouchableOpacity hitSlop={{ top: 15, bottom: 15 }} style={[styles.button, { backgroundColor }]}>
			<Ionicons name={name} size={24} color="black" />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		paddingHorizontal: 6
	}
});
