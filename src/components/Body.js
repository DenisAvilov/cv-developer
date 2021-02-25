import {CVComponent} from './../core/CVComponent';

export class Body extends CVComponent {
 static className = 'cv__body'
 constructor($root){
     super($root)
 }
  toHtml() {
    return `             
    <div class="item item-2">
        <h2 class="h2">Professional skills</h2>
        <p>Cross-browser compatibility (W3C standards); <br/>
            Construction of Flux architecture; Form validation;  <br/>
            Ability to understand new tools;</p>
        <ul class="skills flex">                       
            <li>HTML/SCSS</li>
            <li>JavaSctipt</li>
            <li>React JS</li>
            <li>Webpack</li>
            <li>ESLint</li>
            <li>TypeSctipt</li>
            <li>Style linter</li>
            <li>Material UI</li>
            <li>Firebase</li>
            <li><a href="https://github.com/DenisAvilov" class="a__after">GitHub</a></li>
        </ul>
    </div>                
    <div class="item item-4">
        <h2 class="h2">My achievements</h2>  
        <h3>Small social network 0.2</h3>                  
        <div class="title flex">
            <h4 class="item__subtitle">What applied:</h4>
            <span>July 2020</span>
        </div>                   
        <ul class="skills flex">
            <li>Flux architecture</li>
            <li>TypeScript</li>
            <li>Firebase</li>
            <li>Material UI</li>
            <li>React</li>                        
            <li><a class="a__after" href="https://denisavilov.github.io/mini-exemple-app-nova-kraina/#novaKraina">View Site</a></li>
            <li><a class="a__after" href="https://github.com/DenisAvilov/mini-exemple-app-nova-kraina">View Code</a></li>
        </ul>
        <span class="separate"></span>
        <h3>Small social network 0.1</h3>
        <div class="title flex">
            <h4 class="item__subtitle">What applied:</h4>
            <span>February 2019</span>
        </div>                   
        <ul class="skills flex">
            <li>Flux architecture</li>
            <li>TypeScript</li>
            <li>React</li> 
            <li><a class="a__after" href="https://github.com/DenisAvilov/Nova_Kraina" target="_blank" >View Code</a></li>
        </ul>
        <span class="separate"></span>
        <h3>Landing Beauty Salon</h3>
        <div class="title flex">
            <h4 class="item__subtitle">What applied:</h4>
            <span>July 2017</span>
        </div>                    
        <ul class="skills flex">
            <li>HTML/SCSS</li>                      
            <li>Gulp</li>
            <li>Jquery</li>
            <li>Look at the template <a class="a__after" href="https://denisavilov.github.io/Beauty_saloon/" >View Site</a></li>
        </ul>
    </div>
    <div class="item item-1">
        <h2 class="h2">About me</h2>
        <p>Looking for my first job in a team <strong>Frontend</strong> development with <strong>React JS</strong>.</p> 
        <p>In 2017 he started getting acquainted with web development, in 2018 he created his first application on <strong>JavaScript.</strong></p>
        <p>I study on my own, I draw inspiration from Internet resources. </p>
        <p>I have no commercial experience in <strong>IT</strong> sphere, excluding template placement <strong>WP</strong>  on the server for money.
            Therefore, I will consider options for the vacancy of an intern to study Full Stack Developer JavaScript</p>
        
    </div>
    <div class="item item-3">
        <h2 class="h2">Sources of knowledge</h2>
        <h4 class="item__subtitle">Youtube</h4>
        <ul class="skills flex-inline" >
            <li>                             
                <a href="https://www.youtube.com/channel/UCg8ss4xW9jASrqWGP30jXiw" class="flex skills__alignItems a__after">
                    <span class="material-icons">
                    view_sidebar
                    </span>Vladilen Minin</a>
            </li>
            <li> 
                <a href="https://www.youtube.com/playlist?list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8" class="flex skills__alignItems a__after a__after__itincubator">
                    <span class="material-icons">
                    view_sidebar
                    </span> IT incubator</a>
            </li>
            <li>
                <a href="https://www.youtube.com/channel/UC33CqCsFPEHuwhpaES7ORpQ" class="flex skills__alignItems a__after a__after__lavrik">
                    <span class="material-icons">
                    view_sidebar
                    </span>Dmitry Lavrik</a>
            </li>
        </ul>
        <h4>The main assistant</h4>
        <div class="google">
            <span class="google__link">
                <span class="google__logo"></span>                            
            </span>
        </div>
    </div>
    <div class="item item-5">
        <h2 class="h2">Let's develop together!</h2>
        <p>Well organized, with the ability to prioritize tasks</p>
        <ul >
            <li>
                <a href="tel:0506195452">                               
                    <span class="material-icons">
                    phone_in_talk
                    </span>
                    050-619-54-52
                </a>
            </li>
            <li>
                <a href="mailto:avilovd.a@gmail.com">
                    <span class="material-icons">
                        alternate_email
                    </span>    
                    avilovd.a@gmail.com                           
                </a>
            </li>
            <li>
                <a href="https://github.com/DenisAvilov">                               
                    <span class="material-icons">
                        code
                    </span>
                    GitHub 
                    
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/avilovd.a">                              
                    <span class="material-icons">
                        facebook
                    </span>
                    Facebook                                
                </a>
            </li>
            <li>
                <a href="https://drive.google.com/file/d/1qPRAirdj6ahNfYmXS_1qF-8ajsmfpbWg/view?usp=sharing" download>
                    <span class="material-icons">
                        get_app
                    </span> Download CV 
                </a>
            </li>
        </ul>
    </div>
    <div class="item item-6">
    <p> <strong> Resume of a web developer from Kharkov | 2021 | Skills English B1 </strong> </p>
    </div>                
`
  }
}


