import { Header } from "../components/Header";
import { Player } from "../components/Player";

import "../style/global.scss";
import styles from "../style/app.module.scss";
import { PlayerContext } from "../contexts/PlayerContext"; //Usado para o context dos components
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  function play(episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  function togglePlayer() {
    setIsPlaying(!isPlaying);
  }

  return (
    <PlayerContext.Provider
      value={{
        episodeList,
        currentEpisodeIndex,
        play,
        isPlaying,
        togglePlayer,
      }}
    >
      {/* //todos os componentes dentro dessa tag tem acesso ao valor de "value" */}
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContext.Provider>
  );
}

export default MyApp;
