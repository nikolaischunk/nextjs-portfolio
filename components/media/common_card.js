/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { SubTitle } from "../items/typography";
const Common_card = ({
  type,
  name,
  tag,
  description,
  path,
  format,
  size,
  pro,
  contra,
}) => {
  return (
    <div className="common_card column card">
      <div className="card-image">
        <figure className="image">
          {type === "video" ? (
            <video width="640" height="240" autoPlay muted loop>
              <source src={path} />
            </video>
          ) : (
            ""
          )}
          {type === "image" ? <img src={path} alt={tag + "_" + format} /> : ""}
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="is-title is-5">{name}</p>
            {/* <span className="tag is-primary is-light is-6">{tag}</span> */}
          </div>
        </div>

        <div className="content pb-1">
          {description}
          <br />
          <SubTitle text="Pro" />
          {pro.map((p) => (
            <div>
              <p key={p}>- {p}</p>
            </div>
          ))}
          <SubTitle text="Contra" />
          {contra.map((c) => (
            <div>
              <p>- {c}</p>
            </div>
          ))}
        </div>
      </div>
      <footer className="card-footer">
        <p className="is-text card-footer-item">{size}</p>
        <p className="is-text card-footer-item">{format}</p>
      </footer>
    </div>
  );
};

export default Common_card;
