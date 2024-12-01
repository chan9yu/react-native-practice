import WebView from 'react-native-webview';

export default function App() {
  return (
    <div>
      <WebView source={{uri: 'https://fastcampus.co.kr/'}} />
    </div>
  );
}
