import { Image, StyleSheet, Text, View } from 'react-native';

type ProfileBoxProps = {
	imageUri: string;
	introduction: string;
	name: string;
	isMe?: boolean;
};

export default function ProfileBox({ imageUri, introduction, name, isMe = false }: ProfileBoxProps) {
	return (
		<View style={styles.container}>
			<Image source={{ uri: imageUri }} style={styles.image} />
			<View style={styles.contents}>
				<Text>{name}</Text>
				<Text>{introduction}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		gap: 10
	},
	image: {
		width: 50,
		height: 50,
		borderRadius: 20
	},
	contents: {
		justifyContent: 'center',
		gap: 6
	},
	name: {
		fontWeight: 'bold',
		fontSize: 16
	},
	introduction: {
		fontSize: 12,
		color: 'grey'
	}
});
