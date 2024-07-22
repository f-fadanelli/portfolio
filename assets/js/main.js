function updateProfileInfo(profileData){
    const photo = document.getElementById('profile.photo')
    const name = document.getElementById('profile.name')
    const job = document.getElementById('profile.job')
    const location = document.getElementById('profile.location')
    const phone = document.getElementById('profile.phone')
    const mail = document.getElementById('profile.mail')

    photo.src = profileData.photo
    photo.alt = profileData.name
    name.innerText = profileData.name
    job.innerText = profileData.job
    location.innerText = profileData.location
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`
    mail.innerText = profileData.mail
    mail.href = `mailto:${profileData.mail}`

} 

function updateSkills(profileData){
    const softskills = document.getElementById('profile.skills.softskills')
    const tools = document.getElementById('profile.skills.tools')

    softskills.innerHTML = profileData.skills.softSkills.map(skill=>`<li>${skill}</li>`).join('')
    tools.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="" title="${skill.name}"></li>`).join('')
}

function updateIdiomas(profileData){
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(language=>`<li>${language}</li>`).join('')
}

function updatePortfolio(profileData){
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(item=>
        `<li>
            <span class="title ${item.github?'github':''}">${item.name}</span>
            <a target="_blank" href="${item.url}">${item.url}</a>
        </li>`).join('')
}

function updateExperiences(profileData){
    const experiences = document.getElementById('profile.experience')
    experiences.innerHTML = profileData.professionalExperience.map(item=>
        `<li>
            <span class="title">${item.name}</span>
            <span class="period">${item.period}</span>
        </li>`).join('')
}

(async () =>{
    const  profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSkills(profileData)
    updateIdiomas(profileData)
    updatePortfolio(profileData)
    updateExperiences(profileData)
})()


