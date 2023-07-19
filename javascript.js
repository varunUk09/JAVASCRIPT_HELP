//[1] Get current page URL: 
window.location.href
/*desc:
   window.location.href is a JavaScript statement that retrieves the current URL of the web page in the browser and assigns it to the href property of the location object. It does not require any HTML tags to function. 
*/


//[2]Redirect to URL: 
window.location.href = "path"

/* desc:
    This code changes the current page's URL to the specified "path". It doesn't affect any HTML tags directly, but it could trigger a new page to be loaded if the specified path is a valid URL.
*/

//[3]Assign multiple CSS properties to an element:
element.style.cssText = 'property1:value;property2:value;.....propertyN:value;'
/* desc:
    This code sets the CSS styles of an element to the specified values. It allows you to apply multiple CSS properties and their values to an element's inline style attribute at once.
*/

//[4]Completely change inner HTML of an element: 
element.innerHTML = "new html"
/* desc:
 This code replaces the content of an HTML element with the specified HTML code. It allows you to change the text, images, and other HTML elements inside an element dynamically.
*/

//[5]Prevent form submission: 
formElement.addEventListener('submit', function (e) {
    e.preventDefault();
});
/* desc:
 This code  prevents the default action of a form submission. It allows you to handle the form data without actually submitting the form to the server.
*/

//[6]Set focus on an element: 
element.focus();
/* desc:
  This code sets the focus to an HTML element, meaning that it selects the element and makes it ready to accept user input. It is often used to bring user attention to a specific element on a web page, such as a form input field.
*/

//[7]Access label of an input field:
input_element.labels[0]
/* desc:
 This code returns the first <label> element associated with an <input> element. This can be useful for getting information about the label, such as its text content or its for attribute.
*/

//[8]Scroll to an element:
window.scrollTo({
    top: value,
    behaviour: "smooth",
    left: value
});
/* desc:
    This code scrolls the window to a specific position, with a smooth animation.
*/

//[9]Get HTML from a URL:
let xhr = new XMLHttpRequest();
let html = xhr.responseTxt;
let ele = document.createElement("div");
ele.innerHTML = html;
ele.querySelector("selector of element inside of ele")
/* desc:
    This code sends an HTTP request to a server using the XMLHttpRequest object, retrieves the response data as a string, creates a new HTML "div" element and sets its innerHTML to the response data. Then, it selects an element inside the "div" element using a CSS selector but does not do anything further with it.
*/

//[10]Detect page bottom: 
window.addEventListener("scroll", (e) => {
    if (window.scrollY + window.innerHeight + 25 >= document.body.offsetHeight) {
        console.log("Hurray, we are at the bottom of the page!!! :)");
    }
});

/*desc:
 The code adds an event listener to the window object that listens for the "scroll" event. When the user scrolls the page, the code checks if the vertical distance from the top of the page to the bottom of the viewport plus 25 pixels is greater than or equal to the height of the entire document body. If it is, the code logs a message to the console.
*/

//[11]Scroll to an element without position:
element.scrollIntoView({
    behavior: "smooth"
});
/*desc:
 This code scrolls the viewport to bring the specified "element" into view, using a smooth scrolling animation rather than an instant jump. The "behavior: smooth" option is passed as an object to the "scrollIntoView" method to achieve this smooth scrolling effect.
*/

//[12]Decode URL:
let decodedURL;
try {
    decodedURL = decodeURIComponent(window.location.href);
} catch (e) {
    console.error("Error decoding URL: " + e.message);
}
/* desc:
    this code decodes the URL of the current web page, which is stored in the "window.location.href" property, and assigns the decoded URL to the variable "decodedURL". The "decodeURIComponent" function is used to decode any special characters in the URL, such as "%20" for a space character. If there are any errors during the decoding process, the code logs an error message to the console.
*/

//[13]Search element based on the text inside of it: 
function contains(selector, text) {
    var elements = document.querySelectorAll(selector);
    return [].filter.call(elements, function (element) {
        return text.replace(/[^\w\s]/gi, '').replace(/\s+/g, ' ').toUpperCase() === element.innerText.replace(/[^\w\s]/gi, '').replace(/\s+/g, ' ').toUpperCase();
    });
}
/*desc:
 This code selects all the elements in the document that match the given CSS selector, and filters them to return only those elements whose text content matches the given "text" parameter. The text comparison is done after removing any non-alphanumeric characters and extra whitespace, and after converting both the element's text content and the search text to uppercase. The function returns an array of elements that match the search text.
*/

//[13]Extract search query:
let searchParams = new URLSearchParams(window.location.search);
let searchQuery = {};
for (const [key, value] of searchParams.entries()) {
    searchQuery[key] = value;
}
/* desc:
 This code creates a new "URLSearchParams" object to extract and parse the query parameters from the URL of the current page. The "entries" method is used to iterate over all the query parameter key-value pairs in the object. For each pair, a new key-value pair is added to the "searchQuery" object, with the same key and value as in the URL parameters. The result is a JavaScript object that represents the search query parameters from the current URL, which can be used to access and manipulate the query parameters programmatically.
*/

//[14]Get cookie: 
var getCookie = function (name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};
/*desc:
 This code defines a JavaScript function called "getCookie" that takes a cookie name as a parameter and returns the corresponding cookie value. The function first constructs a string that consists of the cookie name followed by an equal sign (e.g. "cookieName="). It then splits the "document.cookie" string into individual cookies by splitting on semicolons, and iterates over each cookie to find the one that matches the provided cookie name. If the cookie is found, the function returns its value, which is everything after the equal sign. If the cookie is not found, the function returns null.
*/

//[15]Set cookie: 
var setCookie = function (name, value, days) {
    var expires = '';
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
};
/*desc:
  this code defines a JavaScript function called "setCookie" that takes a cookie name, a cookie value, and an optional number of days as parameters. The function first checks if a number of days was provided, and if so, it creates a new Date object and sets the expiration time to the current time plus the number of days provided (in milliseconds). It then constructs a string that consists of the cookie name, value, and expiration time, separated by semicolons and spaces. Finally, it sets the "document.cookie" property to this string, which adds the cookie to the browser's cookie storage. The cookie is set for the current path (i.e. "/", which means it applies to all pages on the current domain).
*/

// [17] COUNT DOWN TIMER
function timer(timerObj, endDateString) {
    const endDate = new Date(endDateString);

    timerInterval = setInterval(() => {
        const currentDate = new Date();
        if (currentDate >= endDate) {
            clearInterval(timerInterval);
            // removing timer if it meets the future date
            document.querySelector("element_selector").remove();
            return;
        }

        // convert the end date to UTC
        const utcEndDate = new Date(
            Date.UTC(
                endDate.getUTCFullYear(),
                endDate.getUTCMonth(),
                endDate.getUTCDate(),
                endDate.getUTCHours(),
                endDate.getUTCMinutes(),
                endDate.getUTCSeconds()
            )
        );

        // calculate time remaining
        const diff = utcEndDate - currentDate;
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
/*desc:
    This code defines a function named timer which takes two arguments: timerObj and endDateString.

The function sets up a timer interval that updates the countdown displayed on a web page, based on the difference between the current date and the endDate passed as a string in endDateString.

The timer is cleared and a DOM element is removed if the current date exceeds the endDate.

The countdown displays the number of days, hours, minutes and seconds left until the endDate, with leading zeros added to numbers less than 10.
*/

// [18] YOUTUBE THUMBNAIL FETCH
let
default = 'https://img.youtube.com/vi/<insert-youtube-video-id-here>/default.jpg'
let hd = 'https://img.youtube.com/vi/DOyWP3GPWJ8/maxresdefault.jpg'
let mobileFriendly = 'https://img.youtube.com/vi/DOyWP3GPWJ8/mqdefault.jpg'
/*desc:
 This code defines three variables that contain URLs to different thumbnail images for a YouTube video.

The first variable default contains the URL for the default quality thumbnail image of a YouTube video. The second variable hd contains the URL for the high-definition quality thumbnail image of a YouTube video. The third variable mobileFriendly contains the URL for the mobile-friendly quality thumbnail image of a YouTube video.

These URLs can be used to display thumbnail images for a YouTube video on a website or application.
*/


// [19] This function traverses up the DOM from a given element to find the closest parent element with a specified class.
var closestByClass = function (el, clazz) {
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

/*desc:
 This code defines a function called closestByClass that takes two parameters: an element (el) and a class name (clazz). The function traverses the DOM (Document Object Model) up from the given element until it finds an ancestor element that has the specified class. If no ancestor element has the specified class, the function returns null. Once an ancestor element with the specified class is found, the function returns that element.

In other words, this function returns the closest ancestor element of the given element that has the specified class name.
*/


// [20] This code adds an event listener to an input field that filters through an array of products and displays matching items in a suggestion list. The suggestion list is updated dynamically as the user types into the input field.
// Javascript autocomplete
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
    document.querySelector("#egSearch").addEventListener("input", function () {
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
/* desc:
 This code defines an array of objects that contain information about various products, including a name, link, and a keyword that describes the product. It also includes a function called showList() which listens for user input in a search box and filters the products based on whether their associated keyword matches the search query. It then dynamically generates HTML elements to display a list of the filtered products as clickable links.
*/

/*
[21] This JavaScript function matches a query string to a mapping string by removing special characters and consecutive spaces, converting both strings to uppercase, and checking if the query string is present in the mapping string. It returns a Boolean value indicating whether the match was successful or not.
*/
function matchQuery(keyWord, query) {
    return (keyWord.replace(/[^\w\s]/gi, '').replace(/\s+/g, ' ').toUpperCase().indexOf(query.replace(/[^\w\s]/gi, '').replace(/\s+/g, ' ').toUpperCase()) != -1);
}
/*desc:
 This code defines a function matchQuery that takes in two parameters: keyWord and query. The function first removes any non-alphanumeric characters and extra spaces from both the keyWord and query strings using regular expressions, then converts them to upper case. Finally, it checks if the query string appears in the modified keyWord string, and returns true if it does and false otherwise. Essentially, this function checks if a search query matches a given keyword by removing special characters, extra spaces, and case sensitivity.
*/


/*
[22] This code detects when the Fetch API is used and modifies its behavior. Specifically, it sets a timeout and executes some functions when a specific URL is requested. 
 */
// DETECT FETCH API

function checkAjax() {
    const originalFetch = window.fetch;
    window.fetch = function (input, init) {
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
/*desc:
 This code overrides the default fetch function in the browser to check if an AJAX call is made to a specific URL (/GetProducts). If such a call is made, it sets a timeout function to run after 2 seconds which then checks if the current web page has a specific CSS class ("eg-list-view"). If the class is present, it calls the moveCta() and getData() functions. Finally, it returns the original fetch function to its default behavior.
*/

// [23] Make multiple requests without waiting.
/*
 This code allows for the retrieval of data from multiple URLs without waiting for any of the requests to complete before moving on to the next one. It does this by looping through all the desired items on the page and making a separate XMLHttpRequest for each one. Once a request has been made, the function checks whether the desired data exists on the page, and if it does, it adds it to the appropriate element. If the data is not present, the function calls itself recursively until the data is found. This approach enables faster retrieval of data from multiple sources and improves the overall performance of the application.
*/
document.querySelectorAll("html body #coveo-product-list .c-c-pl_products .c-c-pl_results_container .c-c-pl_results_list .c-c-product-card").forEach(item => {
    if (!item.querySelector(".eg-para")) {
        let url = item.querySelector(".c-c-product-card_img-wrapper") && item.querySelector(".c-c-product-card_img-wrapper").href;
        getPDPData(url);
    }
});

function getPDPData(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
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
            }
            /*else {
                           getPDPData(url);
                       }*/
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

/*desc:
 This code fetches product description data for each product on a webpage using AJAX and displays the data alongside the product price.

The first block of code uses querySelectorAll to select all the product card elements on the page and checks if each one already has a .eg-para element. If not, it extracts the product URL and calls the getPDPData function with that URL.

The getPDPData function makes an AJAX request to the URL provided and retrieves the HTML response data. It then creates a temporary element (<div>) and sets the HTML response data as its content. It then extracts the product description text from the element and checks if the description element exists. If the description element exists, it selects the corresponding product card on the page and inserts the description text before the product price element. If the description element does not exist, it recursively calls the getPDPData function with the same URL until it retrieves the correct data.
*/


// [24] BEST WAY TO DO TASK WHEN PAGE SCROLL
/*This code listens for the "scroll" event on the window object and adds an event listener function to it. The function does the following:

It retrieves the current vertical scroll position using window.pageYOffset or document.documentElement.scrollTop.

It checks if the current scroll position is less than the last scroll position stored in lastScrollTop. If it is, it adds the class "filter-nav_fixed" to the element with class "filter-nav" using classList.add().

If the current scroll position is greater than lastScrollTop, it removes the class "filter-nav_fixed" using classList.remove().

Finally, lastScrollTop is updated to be either 0 or the current scroll position, depending on whether the scroll position is non-positive or positive, respectively.

The result of this code is that whenever the user scrolls the page, the class "filter-nav_fixed" is added or removed from the "filter-nav" element depending on the direction of the scroll. This allows for the implementation of a fixed header effect, where the header remains fixed at the top of the screen when the user scrolls down the page.
*/
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st < lastScrollTop) {
        document.querySelector(".filter-nav").classList.add("filter-nav_fixed");
    } else if (st > lastScrollTop) {
        document.querySelector(".filter-nav").classList.remove("filter-nav_fixed");
    }

    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);


// [25] DETECT OUTSIDE CLICK OF AN ELEMENT
/*
This function detects clicks outside of a specified element by attaching a mousedown event listener to the body of the document. If the event target is not the specified element or one of its children, it means that the click occurred outside of the element, and the function removes a specified class from the element and from the body of the document. This is useful for closing popups or modals when a user clicks outside of them.
*/
function detectClickOutside(element) {
    // Attach a click event listener to a parent element that exists in the DOM
    document.body.addEventListener('mousedown', function (event) {
        // Check if the event target is the element or one of its children
        if (event.target !== element && !element.contains(event.target)) {
            // The click occurred outside of the element, do something...
            // console.log('Clicked outside of the element!');
            document.querySelector(".eg-popuped") && document.querySelector(".eg-popuped").classList.remove("eg-popuped");
            document.body.classList.remove("eg-popup");
        }
    });
}

// [26] MUTATION OBSERVER BASIC SNIPPET
// Select the node that will be observed for mutations
const targetNode = document.body;

// Options for the observer (which mutations to observe)
const config = {
    attributes: true,
    childList: true,
    subtree: true
};

// Callback function to execute when mutations are observed
const callback = function (mutationsList, observer) {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
        } else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

//[27]This code defines a function called download that takes in data, filename, and type as parameters and downloads the data as a file.
/*
This code defines a function called download that takes three parameters: data, filename, and type. It creates a new Blob object using the data and type parameters and then checks if the browser is Internet Explorer 10 or above. If it is, it uses the msSaveOrOpenBlob method to download the file. Otherwise, it creates a new a element and sets its href attribute to a URL created using URL.createObjectURL(). It sets the download attribute to the filename parameter and appends the a element to the document body. Finally, it simulates a click on the a element to download the file and removes the a element and the URL object after the download is complete.

To use this function, you can call it with the data you want to download as the first parameter, the desired filename as the second parameter, and the file type as the third parameter. For example, download(JSON.stringify(egLogos), 'filename', 'filetype'); would download the data in the egLogos variable as a file with the name filename and the specified file type.
*/
function download(data, filename, type) {
    var file = new Blob([data], {
        type: type
    });
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
            url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}
download(JSON.stringify(egLogos), 'filename', 'filetype');

//[28]the checkLinks function checks if the links in the provided object are valid or broken, and returns an object containing the links and their status.
/*
 This code defines an asynchronous function checkLinks that accepts an object of links as its argument. The function iterates through the links and uses the fetch() method to check if each link is valid or not. The result is an object that contains the links and their status (true for valid, false for broken). The function returns this object as a Promise.
*/

async function checkLinks(json) {
    let result = {};
    for (const [key, value] of Object.entries(json)) {
        try {
            const response = await fetch(value);
            // result[key] = response.ok;
        } catch (error) {
            result[key] = value;
        }
    }
    return result;
}

const json = {
    "ABB": "https://octostatic.com/nextopart/static/manufacturer-logos/ABB.png",
    "Amphenol": "https://octostatic.com/nextopart/static/manufacturer-logos/Amphenol.png",
    "Analog Services": "https://octostatic.com/nextopart/static/manufacturer-logos/Analog%20Services.png",
    "Biostar": "https://octostatic.com/nextopart/static/manufacturer-logos/Biostar.png",
    "Bose": "https://octostatic.com/nextopart/static/manufacturer-logos/Bose.png",
    "Bourns": "https://octostatic.com/nextopart/static/manufacturer-logos/Bourns%20.png",
    "Briggs Stratton": "https://octostatic.com/nextopart/static/manufacturer-logos/Briggs%20Stratton%20.png"
};

checkLinks(json).then(result => console.log(result));

// OUTPUT
{
    "ABB": true,
        "Amphenol": true,
            "Analog Services": true,
                "Biostar": true,
                    "Bose": true,
                        "Bourns": true,
                            "Briggs Stratton": true
}

// [29]A function that takes a name and returns the value of the corresponding key from an object if any key contains the name.
/*
 This code defines a function called findByName that takes a string argument and returns the corresponding value from the names object if the key contains the specified name. The names object contains key-value pairs, where the key is a string and the value is a URL to an image. The function uses a for loop to iterate over the keys of the names object and checks if the key contains the specified name using the includes() method. If a match is found, the function returns the corresponding value, otherwise it returns null. The console.log() statements demonstrate the usage of the function with sample input values.
*/
function findByName(name) {
    for (const [key, value] of Object.entries(names)) {
        if (key.toLowerCase().includes(name.toLowerCase())) {
            return value;
        }
    }
    return null;
}


const names = {
    "ABB": "https://octostatic.com/nextopart/static/manufacturer-logos/ABB.png",
    "Amphenol": "https://octostatic.com/nextopart/static/manufacturer-logos/Amphenol.png",
    "Analog Services": "https://octostatic.com/nextopart/static/manufacturer-logos/Analog%20Services.png",
    "Biostar": "https://octostatic.com/nextopart/static/manufacturer-logos/Biostar.png",
    "Bose": "https://octostatic.com/nextopart/static/manufacturer-logos/Bose.png",
    "Bourns": "https://octostatic.com/nextopart/static/manufacturer-logos/Bourns%20.png",
    "Briggs Stratton": "https://octostatic.com/nextopart/static/manufacturer-logos/Briggs%20Stratton%20.png"
};

console.log(findByName("Brigss")); // "https://octostatic.com/nextopart/static/manufacturer-logos/Briggs%20Stratton%20.png"
console.log(findByName("Analog")); // "https://octostatic.com/nextopart/static/manufacturer-logos/Analog%20Services.png"
console.log(findByName("Samsung")); // null

// [30] Adding CSS styles to a Shadow DOM element
/* This code creates a new style element and sets its innerHTML to a CSS style rule. Then, it appends the style element to the shadowRoot of the host element, adding the CSS styles to the Shadow DOM. This allows the styles to be scoped to the Shadow DOM and not affect any other elements on the page.
 */
//host is the element that holds the shadow root:
var style = document.createElement('style')
style.innerHTML = '.the-class-name { property-name: my-value; }'
host.shadowRoot.appendChild(style);

/*[30] Detect size change of body*/
function watchBodySizeChanges(callback) {
    const body = document.body;
    const observer = new ResizeObserver(entries => {
        for (const entry of entries) {
            const { width, height } = entry.contentRect;
            callback(width, height);
        }
    });
    observer.observe(body);
}

watchBodySizeChanges((width, height) => {
    console.log(`Body size changed: ${width} x ${height}`);
});

/*[31] Copy to clip board*/
function copyToClipboard(text) {
    // Create a temporary input element
    const input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);

    // Select the text in the input element
    input.select();

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the temporary input element
    document.body.removeChild(input);
}

// [32] money formatter with currency code
// MONEY FORMATTER
function formatMoneyWithCurrencySign(money, currencyCode) {
    const locale = `en-${currencyCode.substring(0, 2)}`;
    const currencyFormatter = new Intl.NumberFormat(locale, { style: "currency", currency: currencyCode, minimumFractionDigits: 0 });
    const parts = currencyFormatter.formatToParts(money);
    const currencySign = parts.find(part => part.type === "currency").value;
    const formattedMoney = currencyFormatter.format(money);

    return `${formattedMoney}`;
}

// usage:
formatMoneyWithCurrencySign(10000, "USD") // output: $10,000;

// [33] find child number ( what number child this is?)
let childNumber = Array.from(parentElement.children).indexOf(children);

// [34] find object with key
const foundCabin = departureJson.cabins.find(obj => obj.name === cabinName);

// [35] generate breadcrumb
// CREATE BREADCRUMBS ( Function to generate the breadcrumb based on the previous URL and current page )
// CREATE BREADCRUMBS ( Function to generate the breadcrumb based on the previous URL and current page )
function generateBreadcrumb() {
    const previousUrl = document.referrer;
    const currentUrl = window.location.href;
    const breadcrumbRoot = `<a class="eg-bread-crum-itm" href="/">Home</a>`;
    const separator = " > ";
    let breadcrumb = breadcrumbRoot;
    if (previousUrl && previousUrl.includes("/search-results")) {
        breadcrumb += separator + `<a class="eg-bread-crum-itm" href="${previousUrl}">Search Results</a>`;
    } else if (previousUrl && previousUrl.includes("/new")) {
        breadcrumb += separator + `<a class="eg-bread-crum-itm" href="${previousUrl}">New</a>`;
    }
    if (currentUrl.includes("/products/")) {
        const productNameStartIndex = currentUrl.lastIndexOf("/") + 1;
        let productNameEndIndex = currentUrl.indexOf("?");
        if (productNameEndIndex === -1) {
            productNameEndIndex = currentUrl.length;
        }
        let productName = currentUrl.substring(productNameStartIndex, productNameEndIndex);
        productName = productName.replace(/-/g, " ");
        breadcrumb += separator + `<a class="eg-product-name-bd">${productName}</a>`;
    }

    // Check if breadcrumb exists in localStorage
    const storedBreadcrumb = localStorage.getItem("eg-bread-crumb-el");
    if (storedBreadcrumb !== null) {
        // Use the stored breadcrumb if it exists
        let savedBCumb = JSON.parse(storedBreadcrumb);
        console.log(savedBCumb);
        waitForElement("#eg-bread-crumb", function () {
            document.querySelector("#eg-bread-crumb").innerHTML = savedBCumb;
        }, 50, 1500);
    } else {
        // Store the breadcrumb in localStorage
        console.log(breadcrumb);
        waitForElement("#eg-bread-crumb", function () {
            document.querySelector("#eg-bread-crumb").innerHTML = breadcrumb;
        }, 50, 1500);
        localStorage.setItem("eg-bread-crumb-el", JSON.stringify(breadcrumb));
    }
}

// local storage should be cleared it user navigate to different page from pdp


window.onload = generateBreadcrumb;

// [36] REMOVE ELEMENT AFTER FEW CENTER SCROLL
const scrollDistance = 200 // in px
const removeThankuMsg = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop >= scrollDistance) {
        document.querySelector(".eg-news-letter-des.eg-show-m") && document.querySelector(".eg-news-letter-des.eg-show-m").remove();
        // Remove the event listener once the element is removed (optional)
        window.removeEventListener('scroll', removeThankuMsg);
    }
}

window.addEventListener("scroll", removeThankuMsg);

// [37] f you want to check if the current URL matches any of the paths in the collectionPages array and apply a class to the document.body element accordingly, you can use the following JavaScript code:
const collectionPages = [
    "/collections/tous-nos-colliers-et-pendentifs/",
    "/collections/colliers-pendentifs",
    "/collections/pendentifs/",
    "/collections/1-inscription",
    "/collections/2-inscriptions",
    "/collections/3-inscriptions",
    "/collections/4-inscriptions-ou-plus",
    "/collections/initiales",
    "/collections/origami",
    "/collections/signes-du-zodiac"
];

const currentPath = window.location.pathname;

if (collectionPages.some(path => currentPath.includes(path))) {
    document.body.classList.add("eg-pdp");
} else {
    document.body.classList.add("eg-not-pdp");
}

// [ 38 ] detect stop scroll
// mobile scroll
const setStickyMob = () => {
    var scrollTimer = -1;
    window.addEventListener('scroll', bodyScroll);
    function bodyScroll() {
        let header = document.querySelector("html body #top_main_banner #page-vue-header-mainmenu");
        let searchBox = header.querySelector(".elastic-wr");
        if (searchBox) {
            searchBox.classList.remove("eg-sticky");
            console.log('scrolling');
            if (scrollTimer != -1) {
                clearTimeout(scrollTimer);
            }
            scrollTimer = window.setTimeout(scrollFinished, 500);
        }
        function scrollFinished() {
            searchBox.classList.add("eg-sticky");
            console.log('stoped');
        }
    }
}

// [39] check if element bottom or top reached
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// If the element is in the viewport, the function returns true. Otherwise, it returns false.