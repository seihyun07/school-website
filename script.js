const showBulletinBoardButton = document.getElementById('show-bulletin-board');
const homepage = document.getElementById('homepage');
const bulletinBoard = document.getElementById('bulletin-board');
const noticeList = document.querySelector('#notices ul');
const addNoticeForm = document.querySelector('#add-notice form');

showBulletinBoardButton.addEventListener('click', () => {
  homepage.style.display = 'none'; // Hide homepage
  bulletinBoard.style.display = 'block'; // Show bulletin board
});

addNoticeForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission

  const title = document.getElementById('notice-title').value;
  const content = document.getElementById('notice-content').value;

  // Create a new list item element
  const newNotice = document.createElement('li');
  newNotice.innerHTML = `<h3>${title}</h3><p>${content}</p>`;

  // Add the new notice to the list
  noticeList.appendChild(newNotice);

  // Clear the form fields
  document.getElementById('notice-title').value = '';
  document.getElementById('notice-content').value = '';
});