import { Image, StyleSheet, Text, View } from 'react-native';
import Spacing from './Spacing';

type ProfileBoxProps = {
	imageUri: string;
	introduction: string;
	name: string;
	isMe?: boolean;
};

export default function ProfileBox({ imageUri, introduction, name, isMe = false }: ProfileBoxProps) {
	const size = isMe ? 50 : 40;
	const dynamicStyles = getDynamicStyles(size);

	return (
		<View style={styles.container}>
			<Image source={{ uri: imageUri }} style={[styles.image, dynamicStyles.image]} />
			<View style={styles.textContainer}>
				<Text style={[styles.name, isMe && styles.myName, dynamicStyles.name]}>{name}</Text>
				{!!introduction && (
					<View>
						<Spacing height={isMe ? 6 : 2} />
						<Text style={[styles.introduction, dynamicStyles.introduction]}>{introduction}</Text>
					</View>
				)}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row'
	},
	image: {
		borderRadius: 20
	},
	textContainer: {
		justifyContent: 'center',
		marginLeft: 10
	},
	name: {
		fontSize: 15
	},
	myName: {
		fontWeight: 'bold'
	},
	introduction: {
		color: 'grey'
	}
});

const getDynamicStyles = (size: number) =>
	StyleSheet.create({
		image: {
			width: size,
			height: size,
			borderRadius: size * 0.4
		},
		name: {
			fontSize: size === 50 ? 16 : 15
		},
		introduction: {
			fontSize: size === 50 ? 12 : 11
		}
	});
