import imgSecond from './../../img/kids-and-i.png'
import logo from './../../img/logo.png'


export const headerTemplate = (languages = [], selectlang = {}) => {
  languages = languages.lang
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
              <a href="${options.href}"
              title="${options.title}"
              target="_blank"> 
                ${options.content}
              <span class="material-icons">
                ${options.materialIcons}
              </span>
                ${options.img ? creatImg(options.img) : ''}
              </a>           
            </li>       
    `
  }

  return `
  <div class="top_user">
  <div class="selectWrap">
  ${selectlang.select.toHtml()}</div>
  </div>
  <article class="user flex">
    <header class="flex">
        <div class="user__name">
          <span class="dev"></span>
            <h1>${languages.name}</h1>                        
            <p> ${languages.typeDevelopment} <br/> 
                <span>${languages.adress} </span>
            </p>          
          </div>
          <div class="icon flex">
            <ul>
            ${languages.contacts.map(createLi).join('')}
            </ul>
          </div>
    </header>
    <div class="user__logo" data-slide="slide">
        <div class="img-сontainer" data-type="resize">
              <div class="img-container-after">
                  <img class="after" src="${imgSecond}" alt="js developer">
              </div>
              <div class="img-container-before" data-type="resize-before">
                  <img class="before" src="${logo }" alt="js developer">
              </div>
              <div class="slider" data-slider="slider">            
            </div>
        </div>   
    </div>
    
</article> 
  `
}


