import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ComponentProps } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

type IconButtonProps = {
	iconColor: ComponentProps<typeof MaterialIcons>['color'];
	iconName: ComponentProps<typeof MaterialIcons>['name'];
	iconSize: ComponentProps<typeof MaterialIcons>['size'];
} & TouchableOpacityProps;

export default function IconButton({ iconColor, iconName, iconSize, ...rest }: IconButtonProps) {
	return (
		<TouchableOpacity {...rest}>
			<MaterialIcons name={iconName} size={iconSize} color={iconColor} />
		</TouchableOpacity>
	);
}
