import { ScrollView, StyleSheet, View } from 'react-native';

import { useFriendListStore } from '../store/friend';
import { useProfileStore } from '../store/profile';
import ProfileBox from './ProfileBox';

export default function FriendList() {
	const isOpened = useFriendListStore(state => state.isOpened);
	const friendProfiles = useProfileStore(state => state.friendProfiles);

	if (!isOpened) {
		return null;
	}

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			{friendProfiles.map(({ introduction, name, uri }, index) => (
				<View key={index} style={styles.item}>
					<ProfileBox imageUri={uri} introduction={introduction} name={name} />
				</View>
			))}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	item: {
		marginBottom: 13
	}
});
