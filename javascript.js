//[1] Get current page URL: 
window.location.href


//[2]Redirect to URL: 
window.location.href = "path"

//[3]Assign multiple CSS properties to an element:
element.style.cssText = 'property1:value;property2:value;.....propertyN:value;'

//[4]Completely change inner HTML of an element: 
element.innerHTML = "new html"

//[5]Prevent form submission: 
formElement.addEventListener('submit', function (e) {
    e.preventDefault();
});

//[6]Set focus on an element: 
element.focus();

//[7]Access label of an input field:
input_element.labels[0]

//[8]Scroll to an element:
window.scrollTo({
    top: value,
    behaviour: "smooth",
    left: value
});

//[9]Get HTML from a URL:
let xhr = new XMLHttpRequest;
let html = xhr.responseTxt;
let ele = document.createElement("div");
ele.innerHTML = html;
ele.querySelector("selector of element inside of ele")

//[10]Detect page bottom: 
window.addEventListener("scroll", (e) => {
    if (window.scrollY + window.innerHeight + 25 >= document.body.offsetHeight) {
        console.log("hurry we are at the bottom of the page!!! :)");
    }
});

//[11]Scroll to an element without position:
element.scrollIntoView({
    behaviour: "smooth"
});

//[12]Decode URL:
let decodedURL = decodeURIComponent(window.location.href);

//[13]Search element based on the text inside of it: 
function contains(selector, text) {
    var elements = document.querySelectorAll(selector);
    return [].filter.call(elements, function (element) {
        return text.replace(/[^\w\s]/gi, '').replace(/\s+/g, ' ').toUpperCase() === element.innerText.replace(/[^\w\s]/gi, '').replace(/\s+/g, ' ').toUpperCase();
    });
}

//[13]Extract search query:
let searchParams = new URLSearchParams(window.location.search);
let searchQuery = {};
for (const [key, value] of searchParams.entries()) {
    searchQuery[key] = value;
}

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

// [17] COUNT DOWN TIMER
function timer(timerObj) {
    // end date here
    const endDate = new Date("1/14/2023 8:30:00 AM");

    timerInterval = setInterval(() => {
        const currentDate = new Date();
        if (currentDate >= endDate) {
            clearInterval(timerInterval);
            // removing timer if it meets the future date
            waitForElement(".eg-timer-wrapper", function () {
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

// [18] YOUTUBE THUMBNAIL FETCH
let
default = 'https://img.youtube.com/vi/<insert-youtube-video-id-here>/default.jpg'
let hd = 'https://img.youtube.com/vi/DOyWP3GPWJ8/maxresdefault.jpg'
let mobileFriendly = 'https://img.youtube.com/vi/DOyWP3GPWJ8/mqdefault.jpg'


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


// [20] This code adds an event listener to an input field that filters through an array of products and displays matching items in a suggestion list. The suggestion list is updated dynamically as the user types into the input field.
// javascript autocomplete
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

/*
[21] This JavaScript function matches a query string to a mapping string by removing special characters and consecutive spaces, converting both strings to uppercase, and checking if the query string is present in the mapping string. It returns a Boolean value indicating whether the match was successful or not.
*/

function matchQuery(keyWord, query) {
    return (keyWord.replace(/[^\w\s]/gi, '').replace(/\s+/g, ' ').toUpperCase().indexOf(query.replace(/[^\w\s]/gi, '').replace(/\s+/g, ' ').toUpperCase()) != -1);
}


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
            } else {
                getPDPData(url);
            }
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}


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

let

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