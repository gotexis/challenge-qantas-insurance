import React, { ReactNode } from "react";

import { Footer, Header } from "../../components";
import { ErrorBoundary } from "../index";
import styles from "./App.module.scss";

function App({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <div className={styles.page}>{children}</div>
      </ErrorBoundary>
      <Footer />
    </>
  );
}

export default App;
