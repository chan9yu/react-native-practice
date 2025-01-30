import { create } from 'zustand';
import { Profile, generateProfile, generateProfiles } from '../libs/faker';

type ProfileStore = {
	myProfile: Profile;
	friendProfiles: Profile[];
	actions: {
		getFriendCount: () => number;
		addFriend: () => void;
		removeFriend: (id: string) => void;
	};
};

export const useProfileStore = create<ProfileStore>((set, get) => ({
	myProfile: generateProfile(),
	friendProfiles: generateProfiles(14),
	actions: {
		getFriendCount: () => get().friendProfiles.length,
		addFriend: () => set(state => ({ friendProfiles: [...state.friendProfiles, generateProfile()] })),
		removeFriend: id => set(state => ({ friendProfiles: state.friendProfiles.filter(friend => friend.id !== id) }))
	}
}));
