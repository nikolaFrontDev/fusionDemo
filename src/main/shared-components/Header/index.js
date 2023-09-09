export default function Header({ style, image, imageStyle, title }) {
  return (
    <div>
      <div className={style}>
        {image ? <img src={image} className={imageStyle} alt="" /> : null}
        <h3>{title}</h3>
      </div>
    </div>
  );
}
