import './index.css'

const VisitedItem = props => {
  const {visitedItemDetails, onClickRemove} = props
  const {id, imageUrl, name} = visitedItemDetails

  return (
    <li className="visited-item">
      <img className="country-img" src={imageUrl} alt="thumbnail" />
      <div className="name-btn-container">
        <p className="country-name">{name}</p>
        <button
          type="button"
          className="remove-btn"
          onClick={() => onClickRemove(id)}
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedItem
