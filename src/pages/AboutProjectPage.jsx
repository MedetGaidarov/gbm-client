import React from 'react'
import InfoBlock from '../components/InfoBlock'
import { useHeaderContext } from '../context/HeaderContextProvider';
import jj from '../img/office-pp.jpg'

function AboutProjectPage() {
    const { setFixedHeader } = useHeaderContext();
    setFixedHeader(false);
  return (
    <div>
        <InfoBlock
    title="О проекте Формирование кадрового резерва АО Каражанбасмунай"
    photoUrl={jj}
    subtitle="Это текст о проекте"
    text="Это текст о проекте. Он необходим для дальнейшего продвижения Вашего сайта. Вам будет необходимо предоставить исходные данные, по которым наши копирайтеры составят правильный текст, который будет содержать в себе основную информацию. Вам будет необходимо предоставить исходные данные. Это текст о проекте. Это текст о компании. Он необходим для дальнейшего продвижения Вашего сайта. Вам будет необходимо предоставить исходные данные, по которым наши копирайтеры составят правильный текст, который будет содержать в себе основную информацию."
  />
  </div>
  )
}

export default AboutProjectPage