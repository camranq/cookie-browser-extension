const rejOpts = [
  'decline',
  'reject',
  'opt out',
  'no, give me more info',
  'no, thanks',
  'dismiss',
  'reject all',
  'disagree',
  'no thanks',
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
  '"Disable third party non-functional cookies."',
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
  'deny'
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

// function to find and click reject button
function clickRejectButton() {
  const buttons = document.getElementsByTagName('button'); //get all button elements on the page
  console.log(buttons);
  for (let i = 0; i < buttons.length; i++) { //loop through all buttons
    const buttonContent = buttons[i].innerHTML.toLowerCase() || buttons[i].innerText.toLowerCase(); //get the button's innerHTML and innerText
    for (let j = 0; j < rejOpts.length; j++) { //loop through all rejection options
      if (buttonContent.includes(rejOpts[j])) { //convert rejection options to lowercase
        buttons[i].click();
        console.log(buttonContent);
        /*
        console.log('The reject button is ' + buttons[i]);
        console.log('The matching dictionary word is ')
        console.log(rejOpts[j]);
        console.log("Reject option found and clicked!");
        */

        return true;
      }
    }
  }
  console.log("Extension unable to locate a reject button")
  return false;
}


// wait for page to fully load before running
window.onload = () => {
  clickRejectButton();
};