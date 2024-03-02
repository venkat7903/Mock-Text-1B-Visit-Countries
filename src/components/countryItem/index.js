import './index.css'

const CountryItem = props => {
  const {countryDetails, onClickVisit} = props
  const {id, name, isVisited} = countryDetails
  const btnClassName = isVisited ? 'visit-btn visited' : 'visit-btn'

  return (
    <li className="country-item">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="visited">Visited</p>
      ) : (
        <button
          type="button"
          className={btnClassName}
          onClick={() => onClickVisit(id)}
        >
          Visit
        </button>
      )}
    </li>
  )
}

export default CountryItem
