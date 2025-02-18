import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ComponentProps } from 'react';
import { StyleSheet, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';

type InputProps = {
	iconName?: ComponentProps<typeof MaterialIcons>['name'];
	onPressIcon?: ComponentProps<typeof TouchableOpacity>['onPress'];
} & TextInputProps;

export default function Input({ iconName, onPressIcon, ...rest }: InputProps) {
	return (
		<View style={styles.container}>
			<TextInput style={styles.input} {...rest} />
			{iconName && (
				<TouchableOpacity hitSlop={10} onPress={onPressIcon}>
					<MaterialIcons name={iconName} size={24} color="#AEAEB2" />
				</TouchableOpacity>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#1A1A1A',
		paddingVertical: 12,
		paddingHorizontal: 16,
		marginVertical: 16,
		marginHorizontal: 16,
		borderRadius: 10,
		flexDirection: 'row',
		alignItems: 'center'
	},
	input: {
		fontSize: 15,
		color: '#AEAEB2',
		flex: 1,
		marginRight: 4
	}
});
