import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import TabButton from './TabButton';

export default function TabBar() {
	const [selectedTabIndex, setSelectedTabIndex] = useState(0);

	return (
		<View style={styles.container}>
			<TabButton
				activeIconName="account"
				inactiveIconName="account-outline"
				isSelected={selectedTabIndex === 0}
				onPress={() => setSelectedTabIndex(0)}
			/>
			<TabButton
				activeIconName="chat"
				inactiveIconName="chat-outline"
				isSelected={selectedTabIndex === 1}
				onPress={() => setSelectedTabIndex(1)}
			/>
			<TabButton
				activeIconName="tag"
				inactiveIconName="tag-outline"
				isSelected={selectedTabIndex === 2}
				onPress={() => setSelectedTabIndex(2)}
			/>
			<TabButton
				activeIconName="plus-circle"
				inactiveIconName="plus-circle-outline"
				isSelected={selectedTabIndex === 3}
				onPress={() => setSelectedTabIndex(3)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		borderTopWidth: 0.5,
		borderColor: 'grey'
	}
});
