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

//skills section********
const skillsSection = document.getElementById('skills-section');
const skillsList = skillsSection.querySelector('ul');
skillsList.setAttribute('id', 'skills-list');
let skills = [
  'HTML','CSS','JavaScript','Express','EJS','Node.js', 'Axios', 'Postman',  'Excel','PowerPoint',
];

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement('li');
  skill.innerText = skills[i];
  skill.style.backgroundColor =
    i % 2 == 0 ? 'rgba(250, 244, 201, 0.77)' : 'rgba(60, 171, 158, 0.5)';
  skill.setAttribute('class', 'skill');
  skillsList.appendChild(skill);
}

//new messages section
const messageForm = document.querySelector('form[name="leave_message"]');
console.log(messageForm);

messageForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const usersName = event.target.usersName.value;
  console.log(usersName);
  const usersEmail = event.target.usersEmail.value;
  console.log(usersEmail);
  const usersMessage = event.target.usersMessage.value;
  console.log(usersMessage);
  const messageSection = document.getElementById('messages');
  const messageList = messageSection.querySelector('ul#messages-list');

  const newMessage = document.createElement('li');

  newMessage.innerHTML = `<a href="mailto:${usersEmail}" class="users-name">${usersName} </a><br><span class="users-message">${usersMessage}</span>`;

  const removeButton = document.createElement('button');
  removeButton.innerText = 'remove';
  removeButton.setAttribute('type', 'button');
  removeButton.setAttribute('class', 'button');

  removeButton.addEventListener('click', function () {
    const entry = removeButton.parentNode;
    entry.remove();
  });
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  messageForm.reset();
});

// Projects section**********//

fetch('https://api.github.com/users/Dana-codeExplorer/repos')
  .then((response) => response.json())
  .then((data) => {
    const repositories = data;
    console.log(repositories);

    const projectSection = document.getElementById('Projects');
    const projectList = projectSection.querySelector('ul');
    projectList.setAttribute('id', 'project-list');

    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement('li');
      project.innerText = repositories[i].name;
      projectList.appendChild(project);
      project.setAttribute('class', 'project');
      console.log(project);
    }
  })
  .catch((error) => {
    console.error('Fetch error', error);
  });
   
  