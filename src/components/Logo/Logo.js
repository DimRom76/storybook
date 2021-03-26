import s from "./Logo.module.css";

export default function Logo({ imageUrl, alt = "" }) {
  return <img className={s.logo} src={imageUrl} alt={alt} />;
}
