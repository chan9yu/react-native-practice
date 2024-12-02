export const ROUTER_NAMES = {
	HOME: 'home',
	SHOPPING: 'shopping',
	BROWSER: 'browser',

	HOME_TAB: 'home_tab'
} as const;

export type RootStackParamList = {
	[ROUTER_NAMES.HOME_TAB]: undefined;
	[ROUTER_NAMES.BROWSER]: undefined;
};
