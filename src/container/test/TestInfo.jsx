import React from 'react'
import '../UI/TestInfo.css'

function TestInfo({title, content}) {
  return (
     <section className="test__info">
    <div className="test__info_wrapper">
        {/* <h1 className="test__info_title">{title}</h1> */}

        <div className="test__info_content">
            <div className="test__info-block">
                <h3 className="test__info-title">{title}</h3>
                <p className="test__info-desc">
                   {content}
                </p>
            </div>
        </div>
    </div>
</section>
  )
}

export default TestInfo