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

  'Decline All',
  'deny',
  "Reject All"
];

const moreOpts = [
  "more options", 
  "allow selection", 
  "see full vendor list", 
  "cookie settings", 
  "our partners", 
  "change my preferences", 
  "settings", 
  "change preferences", 
  "change settings", 
  "manage", 
  "browser settings", 
  "how to manage cookies", 
  "manage your cookie preferences", 
  "manage your account", 
  "manage your Consents", 
  "manage your settings", 
  "manage your Cookie Settings", 
  "manage your preferences", 
  "manage cookies and view our policy", 
  "manage Tracking Options", 
  "manage Privacy Settings", 
  "set cookie settings", 
  "manage Email Preferences", 
  "Manage Cookie settings", 
  "Managing cookies", 
  "set cookies", 
  "adjust your browser settings.", 
  "click here to change your settings", 
  "cookie preferences", 
  "Privacy settings", 
  "View preferences", 
  "Privacy dashboard", 
  "Customise Cookies", 
  "- See how to change settings »", 
  "control your settings", 
  "please see our cookies page", 
  "adjust your cookie settings", 
  "My Cookie Preferences", 
  "I need help choosing",
  "Confirm your choices", 
  "View Preferences", 
  "updated privacy and cookies policy", 
  "updated privacy policy", 
  "third-party companies", 
  "their partners' use of cookies", 
  "view our privacy policy", 
  "view our cookie policy.", 
  "view our cookie policy", 
  "terms of service", 
  "terms & conditions",
  "read our cookie policy here", 
  "read our Cookie Policy", 
  "read more about what cookies we use here", 
  "read more about our cookies", 
  "process personal data"
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

function showMessage(text, backgroundColour) {
  const messageElement = document.createElement("div");
  messageElement.innerHTML = text;
  messageElement.style.position = "fixed";
  messageElement.style.top = "10px";
  messageElement.style.right = "10px";
  messageElement.style.zIndex = "9999";
  messageElement.style.backgroundColor = backgroundColour;
  messageElement.style.border = "1px solid white";
  messageElement.style.borderRadius = "5px";
  messageElement.style.padding = "10px";
  messageElement.style.fontFamily = "Arial, sans-serif";
  messageElement.style.fontSize = "14px";
  document.body.appendChild(messageElement);

  setTimeout(() => {
    messageElement.remove();
  }, 5000);
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

  if (clicked) {
    showMessage("Reject All Button Found!", "green");
  } else {
    showMessage("Unable to locate reject button", "red");
  }

  return clicked;
}

const tabs = [
  "non-essential cookies",
  "third party cookies",
  "strictly necessary cookies",
  "performance cookies",
  "functional cookies",
  "targeting cookies"
];

//Wait for the page to fully load before running
window.onload = () => {
  clickRejectButton();
};