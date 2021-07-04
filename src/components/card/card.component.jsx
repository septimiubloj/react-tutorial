import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${props.user.id}?set=set5&size=180x180`}
      alt="user"
    />
    <h2>{props.user.name}</h2>
    <p>{props.user.email}</p>
  </div>
);
