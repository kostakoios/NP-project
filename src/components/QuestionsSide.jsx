import React from 'react'
import AccordionUsage from './AccordionUsage'

const QuestionsSide = () => {
    const questionsAndDescriptions = [
        {
            question: 'What types of cars do you repair?',
            description: 'We repair all makes and models! From vintage classics to modern marvels, we’ve got you covered!' 
        },
        {
            question: 'How long do repairs take?',
            description: 'Most repairs take 1-3 days, depending on the damage. We work fast, but we don’t rush perfection!' 
        },
        {
            question: 'Do you offer warranties?',
            description: 'Absolutely! We stand by our work with a 1-year warranty on all repairs. Your satisfaction is our priority!' 
        },
        {
            question: 'Can I see before and after?',
            description: 'Of course! Check out our gallery for jaw-dropping transformations that will leave you speechless!' 
        },
        {
            question: 'How do I book a service?',
            description: "Simply call us or fill out our online form. We’ll get back to you faster than you can say 'car repair'!"
        }        
    ]
  return (
    <div style={{ background: 'rgba(66,165,245,.1)', border: '5px solid  #0dcaf0', borderRadius: '10px', display: 'flex', justifyContent: 'center' }}>
    <section style={{borderRadius: '10px', width: '70%',  margin: '50px'}}>
        <h1 style={{textAlign: 'center', fontSize: '40px'}}>Got Questions?</h1>
        {questionsAndDescriptions.map((object, index) => {
            return <AccordionUsage key={index} question={object.question} description={object.description} />
        })}
     </section>   
    </div>
  )
}

export default QuestionsSide
