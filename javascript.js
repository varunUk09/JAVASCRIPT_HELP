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

        var setCookie = function(name, value, days) {
            var expires = '';
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
                expires = '; expires=' + date.toUTCString();
            }
            document.cookie = name + '=' + (value || '') + expires + '; path=/';
        };