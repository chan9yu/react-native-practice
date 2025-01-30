import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Division from '../components/Division';
import FriendList from '../components/FriendList';
import FriendSection from '../components/FriendSection';
import Header from '../components/Header';
import ProfileBox from '../components/ProfileBox';
import Spacing from '../components/Spacing';
import TabBar from '../components/TabBar';
import { useProfileStore } from '../store/profile';

export default function HomeScreen() {
	const myProfile = useProfileStore(state => state.myProfile);

	return (
		<SafeAreaView style={styles.container} edges={['top', 'right', 'bottom', 'left']}>
			<View style={styles.main}>
				<Header />
				<Spacing height={10} />
				<ProfileBox imageUri={myProfile.uri} introduction={myProfile.introduction} name={myProfile.name} isMe />
				<Spacing height={15} />
				<Division />
				<Spacing height={12} />
				<FriendSection />
				<FriendList />
			</View>
			<TabBar />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	main: {
		flex: 1,
		paddingHorizontal: 15
	}
});
