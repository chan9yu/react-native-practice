import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ComponentProps } from 'react';
import { ColorValue, TouchableOpacity } from 'react-native';

type NavButtonProps = ComponentProps<typeof TouchableOpacity> & {
	iconName: ComponentProps<typeof MaterialCommunityIcons>['name'];
};

export default function NavButton({ iconName, ...rest }: NavButtonProps) {
	const color: ColorValue = rest.disabled ? 'gray' : 'white';

	return (
		<TouchableOpacity {...rest}>
			<MaterialCommunityIcons name={iconName} color={color} size={24} />
		</TouchableOpacity>
	);
}
