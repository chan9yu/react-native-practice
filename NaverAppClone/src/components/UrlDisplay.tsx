import { StyleSheet, Text, View } from 'react-native';

type UrlDisplayProps = {
	urlTitle: string;
};

export default function UrlDisplay({ urlTitle }: UrlDisplayProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{urlTitle}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'black',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 5
	},
	text: {
		color: 'white'
	}
});
