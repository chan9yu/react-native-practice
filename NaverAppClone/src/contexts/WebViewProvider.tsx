import { MutableRefObject, PropsWithChildren, createContext, useCallback, useContext, useMemo, useRef } from 'react';
import WebView from 'react-native-webview';

type WebViewContextType = {
	addWebView: (webview: WebView) => void;
	webViewRefs: MutableRefObject<WebView[]>;
};

const WebViewContext = createContext<WebViewContextType | undefined>(undefined);

export const useWebViewContext = () => {
	const context = useContext(WebViewContext);
	if (!context) {
		throw new Error('useWebViewContext must be used within a WebViewProvider');
	}

	return context;
};

export default function WebViewProvider({ children }: PropsWithChildren) {
	const webViewRefs = useRef<WebView[]>([]);

	const addWebView = useCallback((webview: WebView) => {
		webViewRefs.current.push(webview);
	}, []);

	const value: WebViewContextType = useMemo(
		() => ({
			addWebView,
			webViewRefs
		}),
		[]
	);

	return <WebViewContext.Provider value={value}>{children}</WebViewContext.Provider>;
}
