import { useEffect, useMemo, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import type { WebViewMessageEvent, WebViewSource } from 'react-native-webview/lib/WebViewTypes';

import {
	createYouTubeEmbedHTML,
	PLAYER_STATES,
	WEBVIEW_EVENTS,
	WebViewEventValue,
	YT_SIZES
} from '../libs/youtubePlayer';
import { usePlayerStore } from '../store/player';
import { useWebViewStore } from '../store/webView';

type YoutubeViewProps = {
	youtubeId: string;
};

export default function YoutubeView({ youtubeId }: YoutubeViewProps) {
	const webViewRef = useRef<WebView | null>(null);

	const playing = usePlayerStore(state => state.playing);
	const { setCurrentTimeInSec, setDurationInSec, setPlaying } = usePlayerStore(state => state.actions);
	const { setWebViewRef, postCurrentTimeMessage } = useWebViewStore(state => state.actions);

	const source: WebViewSource = useMemo(
		() => ({
			html: createYouTubeEmbedHTML(youtubeId)
		}),
		[youtubeId]
	);

	const handleWebViewMessage = (event: WebViewMessageEvent) => {
		const { data, type } = JSON.parse(event.nativeEvent.data);

		switch (type as WebViewEventValue) {
			case WEBVIEW_EVENTS.PLAYER_STATE:
				setPlaying(data === PLAYER_STATES.PLAYING);
				break;
			case WEBVIEW_EVENTS.DURATION:
				setDurationInSec(data);
				break;
			case WEBVIEW_EVENTS.CURRENT_TIME:
				setCurrentTimeInSec(data);
				break;
		}
	};

	useEffect(() => {
		setWebViewRef(webViewRef);
	}, [setWebViewRef]);

	useEffect(() => {
		if (playing) {
			const intervalId = setInterval(postCurrentTimeMessage, 50);

			return () => {
				clearInterval(intervalId);
			};
		}
	}, [playing, postCurrentTimeMessage]);

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
