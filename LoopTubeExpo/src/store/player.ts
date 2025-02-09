import { create } from 'zustand';

type PlayerState = {
	playing: boolean;
	durationInSec: number;
	currentTimeInSec: number;
	repeatStartInSec: number | null;
	repeatEndInSec: number | null;
	repeated: boolean;
	actions: {
		setPlaying: (playing: boolean) => void;
		setDurationInSec: (durationInSec: number) => void;
		setCurrentTimeInSec: (currentTimeInSec: number) => void;
		setRepeatStartInSec: (repeatStartInSec: number | null) => void;
		setRepeatEndInSec: (repeatEndInSec: number | null) => void;
		toggleRepeated: () => void;
	};
};

export const usePlayerStore = create<PlayerState>(set => ({
	playing: false,
	durationInSec: 0,
	currentTimeInSec: 0,
	repeatStartInSec: null,
	repeatEndInSec: null,
	repeated: false,
	actions: {
		setPlaying: playing => set({ playing }),
		setDurationInSec: durationInSec => set({ durationInSec }),
		setCurrentTimeInSec: currentTimeInSec => set({ currentTimeInSec }),
		setRepeatStartInSec: repeatStartInSec => set({ repeatStartInSec }),
		setRepeatEndInSec: repeatEndInSec => set({ repeatEndInSec }),
		toggleRepeated: () => set(state => ({ repeated: !state.repeated }))
	}
}));
