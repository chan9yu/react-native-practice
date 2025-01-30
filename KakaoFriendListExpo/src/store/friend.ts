import { create } from 'zustand';

type FriendListStore = {
	isOpened: boolean;
	actions: {
		onOpen: () => void;
		onClose: () => void;
		onToggle: () => void;
	};
};

export const useFriendListStore = create<FriendListStore>((set, get) => ({
	isOpened: true,
	actions: {
		onOpen: () => set({ isOpened: true }),
		onClose: () => set({ isOpened: false }),
		onToggle: () => set(state => ({ isOpened: !state.isOpened }))
	}
}));
