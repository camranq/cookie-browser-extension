const words = ['reject', 'reject all', 'decline', 'deny'];

window.onload = () => {
  // Find all buttons that contain any of the words in the "words" array and click them after 0.5 seconds
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    words.forEach(word => {
      if (button.textContent.toLowerCase().includes(word)) {
        setTimeout(() => {
          button.click();
        }, 500);
      }
    });
  });
};
