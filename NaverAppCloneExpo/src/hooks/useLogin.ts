import { WebViewMessageEvent } from 'react-native-webview';
import { useWebViewContext } from '../contexts/WebViewProvider';

const LOGIN_SCRIPT = `
  (function () {
    const cookie = document.cookie;
    window.ReactNativeWebView.postMessage(cookie);
  })();
`;

const LOGOUT_SCRIPT = `
	(function() {
		document.cookie = 'NID_SES=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.naver.com';
		window.ReactNativeWebView.postMessage(document.cookie);
	})();
`;

export default function useLogin() {
	const { setIsLoggedIn, webViewRefs, isLoggedIn } = useWebViewContext();

	const loadLoggedIn = () => {
		webViewRefs.current.forEach(webView => webView.injectJavaScript(LOGIN_SCRIPT));
	};

	const logout = () => {
		webViewRefs.current.forEach(webView => webView.injectJavaScript(LOGOUT_SCRIPT));
		setIsLoggedIn(false);
		webViewRefs.current.forEach(webView => webView.reload());
	};

	const onMessage = (event: WebViewMessageEvent) => {
		const cookieString = event.nativeEvent.data;
		setIsLoggedIn(cookieString.includes('NID_SES'));
	};

	return {
		isLoggedIn,
		loadLoggedIn,
		logout,
		onMessage
	};
}
