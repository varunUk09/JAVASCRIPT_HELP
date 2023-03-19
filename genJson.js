/* code to generate json */
function addListItemToMyJson(listItem) {
    const [tag, code, desc] = listItem;
    const key = `${tag}${desc}`;
    myJson[key] = {
        tag,
        code,
        desc
    };
}

let myJson = {};
for (const listItem of code) {
    addListItemToMyJson(listItem);
}