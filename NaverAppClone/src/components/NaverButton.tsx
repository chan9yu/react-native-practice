import { ComponentProps } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type NaverButtonProps = Omit<ComponentProps<typeof TouchableOpacity>, 'style'>;

export default function NaverButton(props: NaverButtonProps) {
	return (
		<TouchableOpacity style={styles.button} {...props}>
			<View style={styles.outline}>
				<Text style={styles.text}>N</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		width: 30,
		height: 30,
		padding: 4,
		justifyContent: 'center',
		alignItems: 'center'
	},
	outline: {
		borderWidth: 1,
		borderColor: 'white',
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		color: 'white'
	}
});
