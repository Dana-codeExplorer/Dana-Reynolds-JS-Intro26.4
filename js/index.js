const today = new Date();
const thisYear = today.getFullYear();
const footer = document.createElement('footer');
const copyright = document.createElement('p');
const name = 'Dana Reynolds';
copyright.innerHTML = `&copy; ${thisYear} ${name} Portfolio. All rights reserved.`;
footer.style.color = 'rgb(15, 15, 83)';
footer.appendChild(copyright);
const scriptTag = document.querySelector("script[src='js/index.js']");
scriptTag.before(footer);

const skillsSection = document.getElementById('skills-section');

const skillsList = document
  .getElementById('skills-section')
  .querySelector('ul');

let skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'Express',
  'EJS',
  'Node.js',
  'Axios',
  'Postman',
  'Excel',
  'PowerPoint',
];

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement('li');
  skill.innerText = skills[i];
  skill.style.backgroundColor =
    i % 2 == 0 ? 'rgba(250, 244, 201, 0.77)' : 'rgba(60, 171, 158, 0.5)';
  skill.setAttribute('class', 'skill');
  skill.style.color = 'rgb(15, 15, 83)';
  skillsList.appendChild(skill);
}
skillsSection.appendChild(skillsList);
skillsSection.style.color = 'rgb(15, 15, 83)';
skillsSection.setAttribute('id', 'skills-section');
skillsList.setAttribute('class', 'skills-list');

//new messages section
const messageForm = document.querySelector('form[name="leave_message"]');
console.log(messageForm);

messageForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const usersName = event.target.usersName.value;
  console.log(usersName);

  const usersEmail = event.target.usersEmail.value;
  console.log(usersEmail);

  const usersMessage = event.target.message.value;
  console.log(usersMessage);

  const messageItem = document.createElement("li");
  messageItem.textContent = `${usersName} - ${usersEmail}: ${usersMessage}`;
  //safer than innerHTML
  document.getElementById("messages-list").appendChild(messageItem);
  messageForm.reset();
});
