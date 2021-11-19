import styles from "./PhotoCard.module.css";
// import imagenes from "./img/foto4.JPG";

export function PhotoCard({ photo }) {
  const imgUrl = photo.poster_path; 
  return (
            <li className={styles.movieCard}>
                <img width={322}
                height={215}
                src= {imgUrl}
                alt={photo.description}
                title={photo.description}></img>
                <div>{photo.description} - {photo.category}</div>
            </li>);
}
