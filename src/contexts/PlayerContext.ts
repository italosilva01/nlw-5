import { title } from "node:process";
import { createContext } from "react";

interface Episode {
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  url: string;
}

interface PlayerContextData {
  episodeList: Episode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  togglePlayer: () => void;
  play: (episode: Episode) => void;
}

export const PlayerContext = createContext({} as PlayerContextData); //defini o tipo de dados que o contexto irá usar
