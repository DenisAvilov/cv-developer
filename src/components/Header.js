import {CVComponent} from '../core/CVComponent';
import viber from './../img/viber.png'
import logo from './../img/logo.png'


export class Header extends CVComponent {
    static className = 'cv__header'
  constructor($root){
   super($root,{
    name: 'Header',
    listeners: ['input']
   })
   
  }
  toHtml() {
    return `
    <article class="user flex">
    <header class="flex">
        <div class="user__name">
        <h1>Denis Avilov</h1>                        
        <p class="en">Front-End Developer <br/> 
            <span>Kharkiv st. Wooden 50 </span> </p> <p class="ua">Java Script Developer</p> 
        
        </div>
        <div class="icon flex">
        <ul>
            <li>
                <a href="https://www.facebook.com/avilovd.a" title="view profile in facebook" target="_blank"> 
                    Profile in facebook
                    <span class="material-icons">
                    facebook</span>
                </a> 
            </li>
            <li> 
                <a href="https://github.com/DenisAvilov/cv-developer"  title="view code this cv" target="_blank" >
                    The code for this page
                    <span class="material-icons">
                    code
                    </span>
                </a>
            </li>
            <li>
                <a href="mailto:avilovd.a@gmail.com">
                    avilovd.a@gmail.com
                    <span class="material-icons">
                        alternate_email
                    </span>

                </a>
            </li>
            <li>
                <a href="tel:0506195452">
                    050-619-54-52
                    <span class="material-icons">
                        stay_current_portrait
                    </span>
                    <img src="${viber}" class="icons-phone" title="viber"/>
                    
                    
                </a>
            </li>
        </ul>
            
        </div>
       
    </header>
    <div class="user__logo">  
        <img src="${logo}" alt="Denis Avilov"> 

    </div>
</article>
    `
  }
  
 onInput(event) {
     console.log('Header: onInput', event)
 }
}
