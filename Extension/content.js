const rejOpts = [
  'decline',
  'reject',
  'opt out',
  'no, give me more info',
  'no, thanks',
  'dismiss',
  'reject all',
  'disagree',
  'No thanks',
  'I do not accept',
  'Click here to opt out of Google Analytics',
  'Require Opt-Out',
  'No',
  'I Reject',
  'I Refuse',
  'I Do Not Agree',
  'No, I want to find out more',
  'Click here to turn off cookies for this site',
  'Dismiss cookie notification',
  'Disable third party non-functional cookies.',
  'Disable them/read more',
  'Disable analytics',
  'Disallow cookies',
  'I DO NOT ACCEPT',
  'Disable All',
  '"No take me to settings"',
  'Reject cookies',
  'Do Not Sell My Info',
  'Reject all...',

  'decline all',
  'deny',
  "Reject All"
];

// function to check if a given element is a cookie banner
function isCookieBanner(elem) {
  const classNames = elem.classList;
  for (let i = 0; i < classNames.length; i++) {
    if (classNames[i].toLowerCase().includes('banner') || classNames[i].toLowerCase().includes('consent')) {
      console.log("Banner found");
      return true;
    }
  }
  return false;
}

//Function to find and click the reject all button
function clickRejectButton() {
  //Get all buttons on the page and store them in a variable
  const buttons = document.querySelectorAll("button");

  //Variable to track if any button has been clicked (initially set to false)
  let clicked = false;

  //Loop through all buttons on the page
  buttons.forEach((button) => {
    const content = button.innerHTML.trim().toLowerCase(); //Get the button's inner HTML, trim any whitespace, and convert to lowercase
    const id = button.id.toLowerCase();     //Get the button's ID and also convert it to lowercase

    // Loop through each option in the rejOpts dictionary
    rejOpts.forEach((opt) => {
      const lowerOpt = opt.toLowerCase(); // Convert the current option to lowercase

      //If the button's innerHTML or ID matches the current option, click the button and set clicked to true
      if (content === lowerOpt || id === lowerOpt) {
        button.click();
        clicked = true;
      }
    });
  });
  //Return true if any button was clicked, otherwise return false
  return clicked;
}


//Wait for the page to fully load before running
window.onload = () => {
  clickRejectButton();
};