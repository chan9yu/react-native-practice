import { create } from 'zustand';

type PlayerState = {
	playing: boolean;
	durationInSec: number;
	currentTimeInSec: number;
	actions: {
		setPlaying: (playing: boolean) => void;
		setDurationInSec: (durationInSec: number) => void;
		setCurrentTimeInSec: (currentTimeInSec: number) => void;
	};
};

export const usePlayerStore = create<PlayerState>(set => ({
	playing: false,
	durationInSec: 0,
	currentTimeInSec: 0,
	actions: {
		setPlaying: playing => set({ playing }),
		setDurationInSec: durationInSec => set({ durationInSec }),
		setCurrentTimeInSec: currentTimeInSec => set({ currentTimeInSec })
	}
}));
