import { create } from 'zustand';

type PlayerState = {
	playing: boolean;
	setPlaying: (playing: boolean) => void;
};

export const usePlayerStore = create<PlayerState>(set => ({
	playing: false,
	setPlaying: playing => set({ playing })
}));
