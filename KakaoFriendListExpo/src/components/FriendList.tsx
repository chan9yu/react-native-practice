import { ScrollView, StyleSheet, View } from 'react-native';

import { Profile } from '../services/dummyData';
import ProfileBox from './ProfileBox';

type FriendListProps = {
	friendProfiles: Profile[];
	isOpened: boolean;
};

export default function FriendList({ friendProfiles, isOpened }: FriendListProps) {
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
