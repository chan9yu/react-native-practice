import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useFriendListStore } from '../store/friend';
import { useProfileStore } from '../store/profile';

export default function FriendSection() {
	const isOpened = useFriendListStore(state => state.isOpened);
	const onToggle = useFriendListStore(state => state.actions.onToggle);
	const friendCount = useProfileStore(state => state.actions.getFriendCount)();

	return (
		<View style={styles.container}>
			<Text style={styles.text}>친구 {friendCount}</Text>
			<TouchableOpacity hitSlop={{ top: 15, bottom: 15 }} onPress={onToggle}>
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
