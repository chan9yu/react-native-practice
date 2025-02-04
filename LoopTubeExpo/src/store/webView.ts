import { RefObject } from 'react';
import { WebView } from 'react-native-webview';
import { create } from 'zustand';

type WebViewStore = {
	webViewRef: RefObject<WebView> | null;
	setWebViewRef: (ref: RefObject<WebView>) => void;
};

export const useWebViewStore = create<WebViewStore>(set => ({
	webViewRef: null,
	setWebViewRef: ref => set({ webViewRef: ref })
}));
