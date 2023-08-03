import './index.css'

const TabList = props => {
  const {tabItem, isActive, setActiveTab} = props
  const {displayText, tabId} = tabItem
  const activeTabClassName = isActive ? 'active-tab' : ''
  const onClickTab = () => {
    setActiveTab(tabId)
  }
  return (
    <li>
      <button
        onClick={onClickTab}
        className={`button ${activeTabClassName}`}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabList
