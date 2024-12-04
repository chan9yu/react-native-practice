import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import type { ComponentProps } from 'react';
import { ColorValue, TouchableOpacity } from 'react-native';

type NavButtonProps = ComponentProps<typeof TouchableOpacity> & {
	iconName: ComponentProps<typeof MaterialDesignIcons>['name'];
};

export default function NavButton({ iconName, ...rest }: NavButtonProps) {
	const color: ColorValue = rest.disabled ? 'gray' : 'white';

	return (
		<TouchableOpacity {...rest}>
			<MaterialDesignIcons name={iconName} color={color} size={24} />
		</TouchableOpacity>
	);
}
