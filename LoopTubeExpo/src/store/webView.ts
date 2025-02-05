import { RefObject } from 'react';
import { WebView } from 'react-native-webview';
import { create } from 'zustand';

import { WEBVIEW_EVENTS } from '../libs/youtubePlayer';

type WebViewStore = {
	webViewRef: RefObject<WebView> | null;
	actions: {
		setWebViewRef: (ref: RefObject<WebView>) => void;
		playVideo: () => void;
		pauseVideo: () => void;
		postCurrentTimeMessage: (event: string, data?: any) => void;
	};
};

export const useWebViewStore = create<WebViewStore>((set, get) => ({
	webViewRef: null,
	actions: {
		setWebViewRef: ref => set({ webViewRef: ref }),
		playVideo: () => {
			const webView = get().webViewRef?.current;
			webView && webView.injectJavaScript('player.playVideo();');
		},
		pauseVideo: () => {
			const webView = get().webViewRef?.current;
			webView && webView.injectJavaScript('player.pauseVideo();');
		},
		postCurrentTimeMessage: () => {
			const webView = get().webViewRef?.current;
			const script = `postMessageToRN('${WEBVIEW_EVENTS.CURRENT_TIME}', player.getCurrentTime());`;
			webView && webView.injectJavaScript(script);
		}
	}
}));
