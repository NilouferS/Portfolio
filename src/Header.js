import React from 'react';
import toggleClassName from './ToggleFn'

export default function Header() {
    return (
        <div id='header' onClick={() => toggleClassName('headerCloseIcon', 'active')}>
               <div id="headerCloseIcon" onClick={() => toggleClassName('header', 'active')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                </div>
            <ul className="headerList">
                <li className="headerListItem">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 
                    10.639-9.868 10.639 9.883 1.361-1.465z"/></svg>
                    <a href='#image'>Home</a>
                </li>
                <li className="headerListItem"><a href='#about'>About</a></li>
                <li className="headerListItem">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                    <path d="M15.996 23.999h-12.605s.734-3.931.633-5.686c-.041-.724-.161-1.474-.54-2.104-.645-1-2.636-3.72-2.475-7.43.224-5.209 4.693-8.779 10.126-8.779 5.098 0 8.507 3.001 9.858 7.483.328 1.079.311 1.541-.151 2.607l-.006.013 1.751 2.142c.26.381.413.791.413 1.239 0 .547-.233 1.045-.61 1.399-.368.345-.767.452-1.248.642 0 0-.576 2.592-.873 3.291-.7 1.643-1.97 1.659-2.97 1.849-.394.083-.49.133-.681.681-.208.591-.363 1.435-.622 2.653m-4.842-22c-4.285.048-7.74 2.548-8.121 6.488-.192 1.991.463 3.986 1.516 5.705.611 1 1.305 1.592 1.464 3.875.091 1.313-.05 2.636-.241 3.932h8.604c.141-.645.35-1.485.687-2.057.449-.766 1.097-1.099 1.926-1.254.838-.148 1.238-.059 1.489-.785.212-.579.612-2.221.831-3.902 1.203-.335.612-.161 1.671-.559-.206-.234-1.918-2.314-2.045-2.6-.336-.759-.046-1.19.225-1.913.086-.251.06-.357-.009-.613-1.049-3.949-3.891-6.317-7.997-6.317m.52 3c.242.684.312 1.122.841 1.341h.001c.53.221.893-.044 1.543-.353l.953.952c-.312.655-.573 1.016-.354 1.544v.001c.219.528.653.597 1.342.841v1.347c-.681.243-1.123.313-1.342.843-.22.529.043.891.354 1.544l-.953.952c-.657-.313-1.014-.574-1.541-.355h-.001c-.531.222-.601.661-.843 1.343h-1.348c-.242-.684-.312-1.122-.841-1.34l-.001-.001c-.529-.221-.892.043-1.544.353l-.952-.952c.305-.643.574-1.011.353-1.545-.22-.529-.661-.599-1.341-.842v-1.347c.681-.242 1.121-.312 1.341-.841.22-.531-.042-.891-.353-1.545l.952-.952c.657.312 1.015.573 1.544.353h.001c.529-.219.599-.661.841-1.341h1.348zm-.674
                    6.667c-.92 0-1.667-.746-1.667-1.667s.747-1.667 1.667-1.667 1.666.746 1.666 1.667-.746 1.667-1.666 1.667"/></svg>
                    <a href='#skills'>Skills</a>
                </li>
                <li className="headerListItem"><a href='#project'>Project</a></li>
                <li className="headerListItem"><a href='#contact'>Contact</a></li>
            </ul>

        </div>
    );
}

    // const menuIconEl = document.querySelector('.menu-icon');
    // const sidenavEl = document.querySelector('#header');
    // const sidenavCloseEl = document.querySelector('.headerCloseIcon');

    // Add and remove provided class names
    // function toggleClassName(el, className) {
    //   if (el.hasClass(className)) {
    //     el.removeClass(className);
    //   } else {
    //     el.addClass(className);
    //   }
    // }

    // Open the side nav on click
    // menuIconEl.on('click', function() {
    //   toggleClassName(sidenavEl, 'active');
    // });

    // Close the side nav on click
    // sidenavCloseEl.on('click', function() {
    //   toggleClassName(sidenavEl, 'active');
    // });    