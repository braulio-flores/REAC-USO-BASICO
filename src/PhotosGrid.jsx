import { PhotoCard } from "./PhotoCard";
import photos from "./photos.json";
import styles from "./PhotosGrid.module.css";

export function PhotosGrid() {
  return (
    <ul className={styles.photosGrid}>
      {photos.map((photo)=>{
        return <PhotoCard key={photo.id} photo={photo}/>;
      })}
    </ul>
  );
}