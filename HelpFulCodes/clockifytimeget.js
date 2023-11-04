
const yesterdayDate = () => {
    const date = new Date()
    date.setDate(date.getDate() - 1)
    return date
}

// Function to copy text to clipboard
function copyTextToClipboard(text) {
    var textArea = document.createElement("textarea");

    textArea.value = text;

    document.body.appendChild(textArea);

    textArea.select();

    document.execCommand('copy');

    document.body.removeChild(textArea);
}

const calculateTime = (day = 1) => {
    const parentSelectors = document.querySelectorAll(`html body .cl-tracker-entries-wrapper>entry-group:nth-child(${day}) .cl-card>*:nth-child(n+2)`);
    const timeByDescription = {}; // Track time for each description
    let totalTime = 0;

    if (parentSelectors.length > 0) {
        parentSelectors.forEach(parent => {
            const description = parent.querySelector('.cl-input-description').value;
            const timeValue = parent.querySelector('.cl-input-time-picker-sum').value;
            const [hours, minutes, seconds] = timeValue.split(':').map(Number);
            const totalMinutes = hours * 60 + minutes + seconds / 60;
            const totalHours = totalMinutes / 60;

            // Accumulate time for each description
            if (timeByDescription[description]) {
                timeByDescription[description] += totalHours;
            } else {
                timeByDescription[description] = totalHours;
            }

            totalTime += totalHours;
        });

        // Display results
        const results = Object.entries(timeByDescription).map(([description, totalHours]) => {
            return `${description}: ${totalHours.toFixed(2)} hours`;
        });

        const status = `Date : ${yesterdayDate().toString()} \n\n\n` + results.join('\n') + `\n\nTotal: ${totalTime.toFixed(2)} hours`

        copyTextToClipboard(status);

        console.log(status);
    }
}

// Example usage
calculateTime(); // Defaults to today (day 1)

// Updates

// Features :
// auto copy all your day work from clockify just run