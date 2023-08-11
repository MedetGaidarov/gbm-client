import React from 'react'
import '../UI/TestInfo.css'

function TestInfo({title, content, handleClick}) {
  return (
     <section className="test__info">
    <div className="test__info_wrapper">
        <div className="test__info_content">
            <div className="test__info-block">
                <h3 className="test__info-title">{title}</h3>
                <p className="test__info-desc">
                   {content}
                </p>
                <button className='test__info-btn' onClick={handleClick}>Начать тест</button>
            </div>
        </div>
    </div>
</section>
  )
}

export default TestInfo;