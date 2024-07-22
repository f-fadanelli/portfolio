
async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/f-fadanelli/portfolio/main/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}

