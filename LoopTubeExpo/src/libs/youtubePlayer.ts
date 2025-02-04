import { Dimensions } from 'react-native';

/** 📌 YouTube Player의 상태 값 정의 */
export const PLAYER_STATES = {
	UNSTARTED: -1,
	ENDED: 0,
	PLAYING: 1,
	PAUSED: 2,
	BUFFERING: 3,
	VIDEO_CUED: 5
} as const;

export type PlayerStateKey = keyof typeof PLAYER_STATES;
export type PlayerStateValue = (typeof PLAYER_STATES)[PlayerStateKey];

/** 📌 YouTube Player의 가로/세로 크기 설정 (16:9 비율 유지) */
export const YT_SIZES = {
	WIDTH: Dimensions.get('window').width,
	HEIGHT: Dimensions.get('window').width * (9 / 16)
} as const;

export type YTSizesKey = keyof typeof YT_SIZES;
export type YTSizesValue = (typeof YT_SIZES)[YTSizesKey];

/** 📌 YouTube 플레이어를 포함한 HTML을 생성하는 함수 */
export const createYouTubeEmbedHTML = (videoId: string) => `
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
            width: '${YT_SIZES.WIDTH}',
            height: '${YT_SIZES.HEIGHT}',
            videoId: '${videoId}',
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
