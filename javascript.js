/*========================================
********** [1] GET CURRENT PAGE URL **********
==========================================*/
window.location.href

/*========================================
********** [2] REDIRECT TO URL ***********
==========================================*/
window.location.href = "path"


/*====================================================================
********** [3] ASSIGN MULTIPLE CSS PROPERTIES TO AN ELEMENT ***********
======================================================================*/
element.style.cssText = 'property1:value;property2:value;.....propertyN:value;'

/*==========================================================================
********** [4] HOW TO COMPLETELY CHANGE INNER HTML OF AN ELEMENT ***********
===========================================================================*/
element.innerHTML = "new html"


/*==========================================================================
********** [5] HOW TO PREVENT TO SUBMITTING A FORM AS NORML ****************
===========================================================================*/
formElement.addEventListener('submit', function(e) { //e called event
    e.preventDefault;
});


/*==========================================================================
********** [6] HOW TO SET FOCUS ON AN ELEMENT ******************************
===========================================================================*/
element.focus();


/*=================================================================================
********** [7] HOW TO ACCESS LABEL OF AN INPUT FIELD ******************************
==================================================================================*/
input_element.labels
/* == >this will give you a node list of all labels associated to that input element

u can use array indexing to access input label
for example*/
input_element.labels[0] /*will return u the very first label*/

/*=================================================================================
********** [8] HOW TO SCROLL TO AN ELEMENT ****************************************
==================================================================================*/
window.scrollTo({
    top: value //(px value without px in interger form),
    behaviour: "smooth",
    left: value //(px value without px in integer form)(default is 0)
})

// learn more about it in mdn docs : https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo


/*==================================================================================
********** [9] HOW TO GET HTML FROM THE URL ****************************************
===================================================================================*/
let xhr = new XMLHttpRequest;
// create a xhr object and after successful response

/*use*/
let html = xhr.responseTxt;

let ele = document.createElement("div");
ele.innerHTML = html;

/*now use*/
ele.querySelector("selctor of element inside of ele") /*in order to making changes*/

/*==================================================================================
********** [10] HOW TO DETECT PAGE BOTTOM *******************************************
===================================================================================*/
window.addEventListener("scroll", (e) => {
    if (window.scrollY + window.innerHeight + 25 >= document.body.offsetHeight) {
        console.log("hurry we are at the bottom of the page!!! :)");
    }
});

/*=====================================================================================================
********** [11] HOW TO SCROLL TO AN ELEMENT WITHOUT POSITION *******************************************
======================================================================================================*/
element.scrollIntoView({ behaviour: "smooth" });

// it will navigate you to the top of the element in the document

/*=====================================================================================================
************************************* [12] HOW TO DECODE URL *******************************************
======================================================================================================*/
//Like we have url : https://www.tcsworldtravel.com/trip-finder?destination=Africa&date=January&tripType=Private%20Custom%20Travel

// it is url encode for example spaces are converted into %20

// so what we will do 
let egSearch = decodeURIComponent(window.location.href);

// now egSearch  is https://www.tcsworldtravel.com/trip-finder?destination=Africa&date=January&tripType=Private Custom Travel

// %20 removed and if other such url component it will decode them as well

/*=====================================================================================================
******************* [13] HOW TO SEARCH ELEMENT BASED ON THE TEXT INSIDE OF IT *************************
======================================================================================================*/
var $ = window.jQuery;
let ele = $(document).find(`label:contains('Hello world')`).first();

// it will give you the first label in the document which has hello world text inside of it

/*=====================================================================================================
******************************** [14] HOW TO EXTRACT SEARCH QUERY **************************************
======================================================================================================*/
let egSearch = decodeURIComponent(window.location.href);
let egQueryParams = egSearch.split("?").pop().split("&"); // modify this line based on the url
let egSearchQuery = {};

egQueryParams.forEach(param => {
    let name = param.split("=").shift();
    let value = param.split("=").pop();
    egSearchQuery[name] = value;
});


/*=====================================================================================================
******************************** [14] SEARCHING ELEMENT BY TEXT INSIDE OF IT **************************************
======================================================================================================*/

// searching element by text inside of it
function contains(selector, text) {
    var elements = document.querySelectorAll(selector);
    return [].filter.call(elements, function(element) {
        // removing special characters and consequitive spaces before check
        return text.replace(/[^\w\s]/gi, '').replace(/\s+/g, ' ').toUpperCase() === element.innerText.replace(/[^\w\s]/gi, '').replace(/\s+/g, ' ').toUpperCase();
    });
}

// example
// contains("p","hellow world") output [collection of all elements]
// [new] it will remove consequitive space between texts then check
// [new] it will remove special characters from texts then check

/*=====================================================================================================
******************************** [15] GET COOKIE **************************************
======================================================================================================*/

var getCookie = function(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

/*=====================================================================================================
******************************** [16] SET COOKIE **************************************
======================================================================================================*/


var setCookie = function(name, value, days) {
    var expires = '';
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
};


/*=====================================================================================================
******************************** [17] COUNT DOWN TIMER **************************************
======================================================================================================*/

function timer(timerObj) {
    // end date here
    const endDate = new Date("1/14/2023 8:30:00 AM");

    timerInterval = setInterval(() => {
        const currentDate = new Date();
        if (currentDate >= endDate) {
            clearInterval(timerInterval);
            // removing timer if it meets the future date
            waitForElement(".eg-timer-wrapper", function() {
                document.querySelector(".eg-timer-wrapper").remove();
            }, 50, 15000);

            return;
        }
        // calculate time remaining
        const diff = endDate - currentDate;
        const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hoursLeft = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minsLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let secsLeft = Math.floor((diff % (1000 * 60)) / 1000);

        // update the timer values
        timerObj.dys.textContent = (daysLeft <= 0) ? "0" : (daysLeft < 10) ? `0${daysLeft}` : daysLeft;
        timerObj.hours.textContent = (hoursLeft <= 0) ? "0" : (hoursLeft < 10) ? `0${hoursLeft}` : hoursLeft;
        timerObj.mins.textContent = (minsLeft <= 0) ? "0" : (minsLeft < 10) ? `0${minsLeft}` : minsLeft;
        timerObj.secs.textContent = (secsLeft <= 0) ? "0" : (secsLeft < 10) ? `0${secsLeft}` : secsLeft;



    }, 1000);
}

/*=====================================================================================================
******************************** [18] YOUTUBE THUMBNAIL FETCH **************************************
======================================================================================================*/
// youtube thumbnail fetch
let
default = 'https://img.youtube.com/vi/<insert-youtube-video-id-here>/default.jpg'
let hd = 'https://img.youtube.com/vi/DOyWP3GPWJ8/maxresdefault.jpg'
let mobileFriendly = 'https://img.youtube.com/vi/DOyWP3GPWJ8/mqdefault.jpg'


/*=====================================================================================================
******************************** [19] TRAVERSING DOM UP TO FIND ELE **************************************
======================================================================================================*/

// TRAVERSING DOM UP TO FIND ELE
var closestByClass = function(el, clazz) {
    // Traverse the DOM up with a while loop
    while (!el.classList.contains(clazz)) {
        // Increment the loop to the parent node
        el = el.parentNode
        if (!el) {
            return null
        }
    }

    // At this point, the while loop has stopped and `el` represents the element
    // that has the class you specified in the second parameter of the function
    // `clazz`
    return el
}


/*=====================================================================================================
******************************** [20] JAVASCRIPT AUTOCOMPLETE **************************************
======================================================================================================*/
let egItems = [{
        "name": "Classic Whip SPF 30",
        "link": "https://www.vacation.inc/products/sun-screen",
        "keyWord": `Classic Whip SPF 30 “The World’s Best-Smelling Sunscreen” SPF 30 Sunscreen Lotion — $18 Classic Lotion | The Worlds Best-Smelling Sunscreen | Vacation®`
    },
    {
        "name": "Ball Boy Scented Candle",
        "link": "https://www.vacation.inc/products/ball-boy-candle",
        "keyWord": `Ball Boy Scented Candle Prince® x Vacation® Collection — $42 Vacation® X Prince® |  Ball Boy Scented Candle`
    },
    {
        "name": "Chardonnay Oil SPF 30",
        "link": "https://www.vacation.inc/products/chardonnay-oil-spf-30",
        "keyWord": `Chardonnay Oil SPF 30 Chardonnay Oil | SPF 30 Sunscreen Oil | Vacation® “The World's Most Indulgent Sunscreen” SPF 30 Sunscreen Oil — $22`
    },
    {
        "name": "Classic Spray SPF 30",
        "link": "https://www.vacation.inc/products/classic-whip-spf-30",
        "keyWord": `Classic Spray SPF 30 Vacation® Classic Whip |  SPF 30 Sunscreen Mousse “Dessert For Your Skin” SPF 30 Sunscreen Mousse — $22`
    },
    {
        "name": "Super Spritzer",
        "link": "https://www.vacation.inc/products/super-spritzer",
        "keyWord": `Super Spritzer “Vaporized Refreshment” Hydrating Face Mist — $12 Super Spritzer | The Worlds Best-Smelling Sunscreen | Vacation®`
    },
    {
        "name": "Mineral Lotion SPF 30",
        "link": "https://www.vacation.inc/products/mineral-lotion-spf-30",
        "keyWord": `Mineral Lotion SPF 30 “Luxury-Grade Zinc Based Protection” SPF 30 Mineral Lotion — $20 Mineral Lotion | The Worlds Best-Smelling Sunscreen | Vacation®`
    }
]

function showList() {
    document.querySelector("#egSearch").addEventListener("input", function() {
        let query = this.value.toUpperCase();
        let egShowItemsHtml = '';
        egItems.forEach(item => {
            if ((query !== "") && (matchQuery(item.keyWord, query))) {
                egShowItemsHtml += ` <li class="eg-item"><a href = '${item.link}' class="eg-product-name">${item.name}</a></li>`;
            }
        });
        document.querySelector(".eg-suggestion-list").innerHTML = '';
        document.querySelector(".eg-suggestion-list").insertAdjacentHTML("beforeend", egShowItemsHtml);
    });
}

/*=====================================================================================================
******************************** [21] JAVASCRIPT BEST WAY TO CHECK OR MATCH **************************************
======================================================================================================*/

// THIS FUNCTION WILL MATCH QUERY TO MAPPING AND ALSO IT WILL MATCH BY REMOVING SPECIAL CHARS AND CONSEQUTIVE SPACES

function matchQuery(keyWord, query) {
    return (keyWord.replace(/[^\w\s]/gi, '').replace(/\s+/g, ' ').toUpperCase().indexOf(query.replace(/[^\w\s]/gi, '').replace(/\s+/g, ' ').toUpperCase()) != -1);
}


/*=====================================================================================================
******************************** [22] DETECT FETCH API **************************************
======================================================================================================*/

// DETECT FETCH API

function checkAjax() {
    const originalFetch = window.fetch;
    window.fetch = function(input, init) {
        if (input.url) {
            if (input.url.indexOf('/GetProducts') !== -1) {
                setTimeout(() => {
                    if (document.body.classList.contains("eg-list-view")) {
                        moveCta();
                    }
                    getData();
                }, 2000);
            }
        }
        return originalFetch(input, init);
    };
}


/*=====================================================================================================
******************************** [23] YOU CAN MAKE MULTIPLE REQUESTS WITHOUT WAITING FOR ANYONE **************************************
======================================================================================================*/

document.querySelectorAll("html body #coveo-product-list .c-c-pl_products .c-c-pl_results_container .c-c-pl_results_list .c-c-product-card").forEach(item => {
    if (!item.querySelector(".eg-para")) {
        let url = item.querySelector(".c-c-product-card_img-wrapper") && item.querySelector(".c-c-product-card_img-wrapper").href;
        getPDPData(url);
    }
});

function getPDPData(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = this.responseText;
            // console.log(this.responseURL, document.querySelector('li.c-c-product-card a[href="' + this.responseURL + '"]'));
            var ele = document.createElement("div");
            ele.innerHTML = data;
            var egDesEle = ele.querySelector(".c-product-description");
            // checking if element exists or not
            if (egDesEle) {
                let egItem = document.querySelector('li.c-c-product-card a[href="' + this.responseURL + '"]').closest('li.c-c-product-card');
                if (!egItem.querySelector(".eg-para")) {
                    egItem.querySelector(".c-c-product-card_price").insertAdjacentHTML("beforebegin", `<p class="eg-para">${egDesEle.innerText}</p>`);
                }
            } else {
                getPDPData(url);
            }
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}