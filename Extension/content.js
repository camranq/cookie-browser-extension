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
  'No take me to settings',
  'Reject cookies',
  'Do Not Sell My Info',
  'Reject all...',

  'Decline All',
  'deny',
  'Reject All',
  'Reject',
  'Reject Non-Essential Cookies'
];

const options = [
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
  "process personal data",
  "MORE OPTIONS",
  "show purposes"
];

const types = [
  "non-essential cookies",
  "third party cookies",
  "strictly necessary cookies",
  "performance cookies",
  "functional cookies",
  "targeting cookies"
];

//Function to display a popup to the user
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
  }, 5000); //5 seconds
}

//Function to search for a cookie banner
function checkForCookieBanner() {
  //Select all elements on the page
  const allElements = document.querySelectorAll('*');
  let foundMatchElement = null; //Initialise variable to store the matched element 

  //Loop through all elements on the page
  for (const element of allElements) {
    //Check if the 'id' attribute of the current element partially or fully matches any value in the 'id_attributes' array
    if (window.id_attributes.some(id => element.id.indexOf(id) !== -1)) {
    //if (window.id_attributes.some(attr => attr.indexOf(element.id) !== -1)) {
      console.log(`Banner ID Match found: ${element.id}`);
      //showMessage("worked", "green");
      foundMatchElement = element; //Store the matched element
      break; //Break from the loop once a match is found
    }
  }

  if (!foundMatchElement) { //If no match was found
    console.log('No Banner ID Match Found');
    showMessage("Banner Missing or Incompatible", "red");
  }
  //Return the matched element, this could also remain null which is important for the next function
  return foundMatchElement;
}

//Function to find and click the reject all button
function clickRejectButton(cookieBanner) {
  //Variable to track if any button has been clicked (initially set to false)
  let clicked = false;
  console.log(cookieBanner);
  
  /* Conditional expression:
  If cookieBanner is truthy, then only select all buttons within that HTML snippet
  If cookieBanner is falsy, no banner was detected so scan the entire page as a last resort
  */
  const buttons = cookieBanner ? cookieBanner.querySelectorAll("button") : document.querySelectorAll("button");

  //Loop through all buttons on the page
  buttons.forEach((button) => {
    const content = button.innerHTML.trim().toLowerCase(); //Get the button's inner HTML, trim any whitespace, and convert to lowercase
    const id = button.id.toLowerCase();  //Get the button's ID and also convert it to lowercase

    // Loop through each option in the rejOpts dictionary
    rejOpts.forEach((opt) => {
      const lowerOpt = opt.toLowerCase(); // Convert the current option to lowercase

      //If the button's innerHTML or ID matches the current option, click the button and set clicked to true
      if (content.indexOf(lowerOpt) !== -1 || id.indexOf(lowerOpt) !== -1) { //-1 being returned means there was no match
        button.click(); //Click the reject button
        console.log("The button was:", button);
        clicked = true;
      }
    });
  });

  if (clicked) {
    showMessage("Cookies Rejected!", "green");
  } else {
    showMessage("No Reject All Option", "red");
  }

  return clicked;
}

function clickRejectButton2() {
  //Variable to track if any button has been clicked (initially set to false)
  let clicked = false;
  
  //Get all buttons on the page and store them in a variable
  const allElements = document.querySelectorAll("*");
  const buttons = [];
  
  allElements.forEach((element) => {
    const id = element.id.toLowerCase();

    if (id.includes("button")) {
      buttons.push(element);
    }
  });
  
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
    showMessage("Reject Button Not Found/Incompatible Banner", "red");
  }

  return clicked;
}

function clickMoreOptionsButton() {
  const buttons = document.querySelectorAll("button");
  let clicked = false;

  buttons.forEach((button) => {
    const content = button.innerHTML.trim().toLowerCase();
    const id = button.id.toLowerCase();

    options.forEach((opt) => {
      const lowerOpt = opt.toLowerCase();

      if (content === lowerOpt || id === lowerOpt) {
        button.click();
        clicked = true;
      }
    });
  });

  return clicked;
}

function allSteps() {
  const cookieBannerElement = checkForCookieBanner(); // Call checkForCookieBanner() and store the returned value in cookieBannerElement
  setTimeout(() => {
    clickRejectButton(cookieBannerElement); // Call clickRejectButton() and pass the found cookie banner element or null if not found
  }, 250);
}



//Wait for the page to fully load before running
window.onload = () => {
  allSteps();
}