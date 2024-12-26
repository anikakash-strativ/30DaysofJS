const { author, keywords } = asabenehChallenges2020;

const wrapper = document.querySelector('.wrapper');

const header = document.createElement('div');
header.className = 'header';

header.innerHTML = `
    <h1>${author.firstName} ${author.lastName}</h1>
    
    <div class="social-links">
        ${author.socialLinks
        .map(
            (link) =>
                `<a href="${link.url}" target="_blank">
                ${link.social}
               </a>`
        )
        .join('')}
    </div>
    <div class="bio">${author.bio}</div>
`;
wrapper.appendChild(header);


// Title:

const titleParent = document.createElement('div');
titleParent.className = 'parentSection'
const titlesSection = document.createElement('div');
titlesSection.className = 'section';

titlesSection.innerHTML = `
<h2>Titles</h2>
<ul>
${author.titles.map((title) => `<li>${title[0]} ${title[1]}</li>`).join('')}
</ul>
`



titleParent.appendChild(titlesSection);

// Skills Section:

const skillsSection = document.createElement('div');

skillsSection.className = `section`;

skillsSection.innerHTML = `
<h2>Skills</h2>
    <ul>
        ${author.skills.map((skill) => `<li>✅ ${skill}</li>`).join('')}
    </ul>
`;

titleParent.appendChild(skillsSection);

// Qualifications Section
const qualificationsSection = document.createElement('div');
qualificationsSection.className = 'section';

qualificationsSection.innerHTML = `
    <h2>Qualifications</h2>
    <ul>
        ${author.qualifications.map((qual) => `<li>${qual}</li>`).join('')}
    </ul>
`;
titleParent.appendChild(qualificationsSection);
wrapper.appendChild(titleParent);

// Keywords Section
const keywordsSection = document.createElement('div');
keywordsSection.className = 'keywords';

keywordsSection.innerHTML = `
    <h2>Keywords</h2>
    <div>
        ${keywords.map((keyword) => `<span># ${keyword}</span>`).join('')}
    </div>
`;
wrapper.appendChild(keywordsSection);