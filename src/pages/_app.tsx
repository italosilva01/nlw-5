import { Header } from "../components/Header";
import { Player } from "../components/Player";

import "../style/global.scss";
import styles from "../style/app.module.scss";
import { PlayerContextProvider } from "../contexts/PlayerContext"; //Usado para o context dos components

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
      {/* //todos os componentes dentro dessa tag tem acesso ao valor de "value" */}
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContextProvider>
  );
}

export default MyApp;
