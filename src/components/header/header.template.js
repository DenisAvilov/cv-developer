import {language} from '../../js/function/language'
import imgSecond from './../../img/1.jpg'

export const headerTemplate = (props = [], logo) => {
  const creatImg = (img) => {
    const imgNode = new Image()
    imgNode.src = img
    imgNode.title = 'viber'
    imgNode.classList.add('icons-phone')
    return imgNode.outerHTML
  }

  const createLi = (options) => {
    return `
            <li>
            <a href="${options.href}" title="${options.title}" target="_blank"> 
            ${options.content}
            <span class="material-icons">
            ${options.materialIcons}</span>
            ${options.img ? creatImg(options.img) : ''}
            </a>           
            </li>       
    `
  }

  const test = props.map(el => {
    return ` ${createLi(el)}`
  }).join('')
  return `
  <article class="user flex">
    <header class="flex">
        <div class="user__name">
        <h1>${language.name}</h1>                        
        <p> ${language.typeDevelopment} <br/> 
            <span>${language.adress} </span>
        </p> 
        
        </div>
        <div class="icon flex">
        <ul>
        ${test}
        </ul>
        </div>       
    </header>
    <div class="user__logo">
        <div class="img-сontainer" data-type="slider-resize">
            <div class="img-container-after">
                <img class="after" src="${logo}" alt="Denis Avilov">
            </div>
            <div class="img-container-before">
                <img class="before" src="${imgSecond}" alt="imgSecond">
            </div>
            <div class="slider" data-slader="slider"></div>
        </div>   
    </div>
</article> 
  `
}
