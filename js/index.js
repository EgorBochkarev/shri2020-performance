window.addEventListener('DOMContentLoaded',()=>{document.querySelector('.buttons-wrap').innerHTML='<button class="button button_yellow" type="button">Да</button><button class="button">Нет</button>';const multimediaScript=document.createElement('script');multimediaScript.setAttribute('src','./js/multimedia.js');document.querySelector('.multimedia').appendChild(multimediaScript)})