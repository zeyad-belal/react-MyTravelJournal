
export default function Card(props) {
  return (
    <div className="card--container">
      <div className="card">
        <div className="card-img-container">
          <img src={props.items.imageUrl} className="card-img" />
        </div>
        <div className="card--info">
          <img src="../src/assets/Fill 219.svg" className="location-sign"/>
          <span className="card--location">{props.items.location}</span>
          <a href={props.items.googleMapsUrl} className="maps-link">View on Google Maps</a>
          <h1 className="card--title">{props.items.title}</h1>
          <p className="card--date">{props.items.startDate}-{props.items.endDate}</p>
          <p className="card--description">{props.items.description}</p>
        </div>
      </div>
          <hr />
    </div>
  );
}

