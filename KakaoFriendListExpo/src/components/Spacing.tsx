import { DimensionValue, View } from 'react-native';

type SpacingProps = {
	height: DimensionValue;
};

export default function Spacing({ height }: SpacingProps) {
	return <View style={{ height }} />;
}
