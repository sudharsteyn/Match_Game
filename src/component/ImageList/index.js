import './index.css'

const ImageList = props => {
  const {imageInfo, checkImageMatch} = props
  const {thumbnailUrl, id} = imageInfo
  const onImageClick = () => {
    checkImageMatch(id)
  }
  return (
    <li className="img-item">
      <button onClick={onImageClick} className="thumb-btn" type="button">
        <img className="thumb-img" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImageList
