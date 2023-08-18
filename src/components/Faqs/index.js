// Write your code here.
import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="main-container">
      <div className="inner-container">
        <h1 className="heading">FAQs</h1>
        <ul className="list-container">
          {faqsList.map(faq => (
            <FaqItem key={faq.id} details={faq} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
