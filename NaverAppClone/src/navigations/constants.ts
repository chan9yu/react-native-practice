export const ROUTER_NAMES = {
	HOME: 'Home',
	SHOPPING: 'Shopping',
	BROWSER: 'Browser',
	ROOT_TAB: 'RootTab'
} as const;

export type RootStackParamList = {
	[ROUTER_NAMES.ROOT_TAB]: undefined;
	[ROUTER_NAMES.BROWSER]: {
		initialUrl: string;
	};
};
