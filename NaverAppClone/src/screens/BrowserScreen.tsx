import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from 'react-native';

import { RootStackParamList } from '../navigations/constants';

type ShoppingScreenProps = NativeStackScreenProps<RootStackParamList>;

export default function BrowserScreen({ navigation }: ShoppingScreenProps) {
	return <Text>BrowserScreen</Text>;
}
