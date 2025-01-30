import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Division from '../components/Division';
import FriendSection from '../components/FriendSection';
import Header from '../components/Header';
import ProfileBox from '../components/ProfileBox';
import Spacing from '../components/Spacing';
import TabBar from '../components/TabBar';
import { useFriendListStore } from '../store/friend';
import { useProfileStore } from '../store/profile';

export default function HomeScreen() {
	const isOpened = useFriendListStore(state => state.isOpened);
	const myProfile = useProfileStore(state => state.myProfile);
	const friendProfiles = useProfileStore(state => state.friendProfiles);

	return (
		<SafeAreaView style={styles.container} edges={['top', 'right', 'bottom', 'left']}>
			<FlatList
				data={isOpened ? friendProfiles : []}
				contentContainerStyle={{ paddingHorizontal: 15 }}
				keyExtractor={item => item.id}
				stickyHeaderIndices={[0]}
				renderItem={({ item }) => <ProfileBox imageUri={item.uri} introduction={item.introduction} name={item.name} />}
				showsVerticalScrollIndicator={false}
				ItemSeparatorComponent={() => <Spacing height={13} />}
				ListHeaderComponent={() => (
					<View style={styles.listHeader}>
						<Header />
						<Spacing height={10} />
						<ProfileBox imageUri={myProfile.uri} introduction={myProfile.introduction} name={myProfile.name} isMe />
						<Spacing height={15} />
						<Division />
						<Spacing height={12} />
						<FriendSection />
						<Spacing height={5} />
					</View>
				)}
				ListFooterComponent={() => <Spacing height={13} />}
			/>
			<TabBar />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	listHeader: {
		backgroundColor: 'white'
	}
});
