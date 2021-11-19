import { PhotosGrid } from "./PhotosGrid";
import styles from "./App.module.css";

export function App(){
    return (<div>
              <header>
                <h1>galeria colectiva</h1>
              </header>
              <main>
                    <PhotosGrid />
                  </main>
            </div>);
  }
