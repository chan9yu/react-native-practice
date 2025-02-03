import { useMemo } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import WebView from 'react-native-webview';

const YT_WIDTH = Dimensions.get('window').width;
const YT_HEIGHT = YT_WIDTH * (9 / 16);

type YoutubeViewProps = {
	youtubeId: string;
};

export default function YoutubeView({ youtubeId }: YoutubeViewProps) {
	const source = useMemo(() => {
		const html = `
			<!DOCTYPE html>
			<html>
				<head>
					<meta name="viewport" content="width=device-width, initial-scale=1">
				</head>
			
				<body style="margin: 0; padding: 0;">
					<div id="player"></div>
			
					<script>
						var tag = document.createElement('script');
			
						tag.src = 'https://www.youtube.com/iframe_api';
						var firstScriptTag = document.getElementsByTagName('script')[0];
						firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
			
						var player;
						function onYouTubeIframeAPIReady() {
							player = new YT.Player('player', {
								height: '${YT_HEIGHT}',
								width: '${YT_WIDTH}',
								videoId: '${youtubeId}',
								events: {
									onReady: onPlayerReady,
									onStateChange: onPlayerStateChange
								}
							});
						}
			
						function postMessageToRN(type, data) {
							const message = JSON.stringify({ type, data });
							window.ReactNativeWebView.postMessage(message);
						}
			
						function onPlayerReady(event) {
							postMessageToRN('duration', player.getDuration());
						}
			
						function onPlayerStateChange(event) {
							postMessageToRN('player-state', event.data);
						}				
					</script>
				</body>
			</html>
    `;

		return {
			html
		};
	}, [youtubeId]);

	return (
		<View style={styles.container}>
			{youtubeId.length > 0 && (
				<WebView source={source} allowsInlineMediaPlayback mediaPlaybackRequiresUserAction={false} />
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: YT_WIDTH,
		height: YT_HEIGHT,
		backgroundColor: '#4A4A4A'
	}
});
