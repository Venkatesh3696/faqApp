// Write your code here.
import {Component} from 'react'
import './index.css'

const minusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
const plusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  toggleBtn = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderButton = () => {
    const {isActive} = this.state
    const imageUrl = isActive ? minusImage : plusImage
    const altText = isActive ? 'minus' : 'plus'
    console.log({imageUrl})
    return (
      <button className="button" type="button" onClick={this.toggleBtn}>
        <img src={imageUrl} alt={altText} />
      </button>
    )
  }

  renderAnswer = () => {
    const {isActive} = this.state
    const {details} = this.props
    const {answerText} = details

    if (isActive) {
      return (
        <div>
          <hr />
          <p>{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    console.log(this.state)
    const {details} = this.props
    const {questionText} = details
    return (
      <li className="list-item">
        <div className="question-container">
          <h1>{questionText}</h1>
          {this.renderButton()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
