import React from 'react'

export default function About({ colStyle }) {


    return (
        <>
            <h2 className='container'>About Us</h2>
        <div className="container  " style={colStyle }>
            <div className="accordion accordion-flush my-1 " id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Analyze Your Text
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse " aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className=" accordion-body " style={colStyle}>
                            Text analysis involves the examination of written or verbal content to extract valuable insights and patterns. By utilizing various techniques such as natural language processing, sentiment analysis, and topic modeling, it enables researchers and businesses to gain a deeper understanding of the text's meaning, sentiment, and key themes, facilitating informed decision-making and valuable information extraction.</div>
                    </div>
                </div>
                <div className="accordion-item my-1">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" style={colStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Free To Use
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="  accordion-body">"Free to use" refers to the availability of a product or service without any cost or payment required, allowing users to access and utilize it without any financial obligations.
                        </div>
                    </div>
                </div>
                <div className="accordion-item my-1 ">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" style={colStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Browser Compatible
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="  accordion-body" style={colStyle}>"Browser compatible" refers to the ability of a website, web application, or digital content to function correctly and display properly across different web browsers, ensuring a consistent user experience regardless of the browser being used.</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
