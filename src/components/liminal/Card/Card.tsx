import styles from "./card.module.css";

type CardProps = {
  image?: string;
  title?: string;
  detail?: string;
  meta?: string;
};

const Card = (props: CardProps) => {
  let image, title, detail, meta;
  if (props.image) {
    image = props.image;
  } else {
    image = "https://picsum.photos/seed/picsum/500/500";
  }
  if (props.title) {
    title = props.title;
  } else {
    title = "Card Title";
  }
  if (props.detail) {
    detail = props.detail;
  } else {
    detail = "Detail Text";
  }
  if (props.meta) {
    meta = props.meta;
  } else {
    meta = "yyyy-mm-dd";
  }
  return (
    <article className={styles.article}>
      <div className={styles.thumbnail}>
        <img src={image} />
      </div>
      <div className={styles.cardInfo}>
        <h3>{title}</h3>
        <p>{detail}</p>
        <span>{meta}</span>
      </div>
    </article>
  );
};

export default Card;
