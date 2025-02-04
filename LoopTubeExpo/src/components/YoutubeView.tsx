import { useEffect, useMemo, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import type { WebViewMessageEvent, WebViewSource } from 'react-native-webview/lib/WebViewTypes';

import { createYouTubeEmbedHTML, PLAYER_STATES, YT_SIZES } from '../libs/youtubePlayer';
import { usePlayerStore } from '../store/player';
import { useWebViewStore } from '../store/webView';

type YoutubeViewProps = {
	youtubeId: string;
};

export default function YoutubeView({ youtubeId }: YoutubeViewProps) {
	const webViewRef = useRef<WebView | null>(null);

	const setWebViewRef = useWebViewStore(state => state.setWebViewRef);
	const setPlaying = usePlayerStore(state => state.setPlaying);

	useEffect(() => {
		setWebViewRef(webViewRef);
	}, [webViewRef, setWebViewRef]);

	const source: WebViewSource = useMemo(
		() => ({
			html: createYouTubeEmbedHTML(youtubeId)
		}),
		[youtubeId]
	);

	const handleWebViewMessage = (event: WebViewMessageEvent) => {
		const { data, type } = JSON.parse(event.nativeEvent.data);

		if (type === 'player-state') {
			setPlaying(data === PLAYER_STATES.PLAYING);
		}
	};

	return (
		<View style={styles.container}>
			{youtubeId.length > 0 && (
				<WebView
					ref={webViewRef}
					source={source}
					allowsInlineMediaPlayback
					mediaPlaybackRequiresUserAction={false}
					onMessage={handleWebViewMessage}
				/>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: YT_SIZES.WIDTH,
		height: YT_SIZES.HEIGHT,
		backgroundColor: '#4A4A4A'
	}
});
