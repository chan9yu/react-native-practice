import { MaterialIcons } from '@expo/vector-icons';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type FriendSectionProps = {
	friendProfileLen: number;
	isOpened: boolean;
	onPressArrow: (event: GestureResponderEvent) => void;
};

export default function FriendSection({ friendProfileLen, isOpened, onPressArrow }: FriendSectionProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>친구 {friendProfileLen}</Text>
			<TouchableOpacity onPress={onPressArrow}>
				<MaterialIcons name={isOpened ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={24} color="lightgrey" />
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	text: {
		color: 'grey'
	}
});
