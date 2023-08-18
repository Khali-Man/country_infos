const countrySearch = document.querySelector('.search')
const regionSelector = document.getElementById('selector')
const countryInfo = document.querySelector('section')
const countryName = document.querySelectorAll('.country-name')
const countryPopulation = document.querySelector('.populate')
const countryRegion = document.querySelector('.reg')
const countryCapital = document.querySelector('.capit')
const subRegion = document.getElementById('sub-region')
const Languages = document.getElementById('Languages')
const countryFlag = document.querySelector('.more-info-img')
const countryNameInfo = document.getElementById('country-name')
const nativeName = document.getElementById('native-name')
const population = document.getElementById('populationn')
const region = document.getElementById('regionn')
const capital = document.getElementById('capitall')
const tld = document.getElementById('tld')
const currency = document.getElementById('currency')
const borderCountries = document.querySelector('.border-count')
const aside = document.querySelector('aside')
const nav = document.querySelector('nav')
const backBtn = document.querySelector('.back-btn')
const countryMoreInfo = document.querySelectorAll('.country-info')
const header = document.querySelector('header')
const darkModeDiv = document.querySelector('.dark-mode')
const createSpans = document.createElement('span')





countrySearch.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        const value = countrySearch.value
        fetchGermanyInfo(value)
        aside.style.display = 'flex'
        countryInfo.style.display = 'none'
        nav.style.display = 'none'
    }
})

backBtn.addEventListener('click', () => {
    nav.style.display = 'flex'
    countryInfo.style.display = 'grid'
    aside.style.display = 'none'
})



const fetchGermanyInfo = async (value) => {
    let url = `https://restcountries.com/v3.1/translation/${value}`
    const response = await fetch(url)
    const data = await response.json()
    borderCountries.innerHTML = 'Border Countries: '
    countryFlag.src = data[0].flags.png
    countryNameInfo.innerText = data[0].name.common
    nativeName.innerText = Object.values(data[0].name.nativeName)[0].common
    population.innerText = (data[0].population).toLocaleString('en-US')
    region.innerText = data[0].region
    capital.innerText = data[0].capital[0]
    tld.innerText = data[0].tld[0]
    currency.innerText = Object.values(data[0].currencies)[0].name
    subRegion.innerText = data[0].subregion
    Languages.innerText = Object.values(data[0].languages)
    if(data[0].borders != undefined || data[0].borders != null) {
        data[0].borders.forEach(element => {
            const createSpans = document.createElement('span')
            createSpans.classList.add('countries')
            createSpans.innerText = element
            borderCountries.appendChild(createSpans)
         })
    }
}

const fetchInfo = async (countryPart, countryregion) => {
    let url = `https://restcountries.com/v3.1/${countryPart}/${countryregion}`
    const response = await fetch(url)
    const data = await response.json()
    data.forEach(element => {
        try {
            const countryDiv = document.createElement('div')
            countryDiv.classList.add('country-info')
            countryDiv.innerHTML += `
                <img src="${element.flags.png}" alt="" class="country-img">`
                
            const countryNameP = document.createElement('p')
            countryNameP.innerText = element.name.common
            countryNameP.classList.add('country-name')

            const countryPopul = document.createElement('p')
            countryPopul.innerText = 'Population: '
            countryPopul.classList.add('population')

            const countryPopulSpan = document.createElement('span')
            countryPopulSpan.classList.add('populate')
            countryPopulSpan.innerText = (element.population).toLocaleString('en-US')
            countryPopul.appendChild(countryPopulSpan)

            const countryReg = document.createElement('p')
            countryReg.innerText = 'Region: '
            countryReg.classList.add('region')

            const countryRegSpan = document.createElement('span')
            countryRegSpan.innerText = element.region
            countryRegSpan.classList.add('reg')
            countryReg.appendChild(countryRegSpan)

            const countryCapit = document.createElement('p')
            countryCapit.innerText = 'Capital: '
            countryCapit.classList.add('capital')

            const countryCapitSpan = document.createElement('span')
            countryCapitSpan.innerText = element.capital[0]
            countryCapitSpan.classList.add('capit')  
            countryCapit.appendChild(countryCapitSpan) 
            
            countryDiv.appendChild(countryNameP)
            countryDiv.appendChild(countryPopul)
            countryDiv.appendChild(countryReg)
            countryDiv.appendChild(countryCapit)

            countryInfo.appendChild(countryDiv) 
            countryDiv.addEventListener('click', (e) => {
                e = element.name.common
                fetchGermanyInfo(e)
                aside.style.display = 'flex'
                countryInfo.style.display = 'none'
                nav.style.display = 'none'
            })
            
            darkModeDiv.addEventListener('click', () => {
                if (countryDiv.style.backgroundColor === '' || countryDiv.style.backgroundColor === 'white') {
                    countryDiv.style.backgroundColor = 'hsl(209, 23%, 22%)'
                    countryDiv.style.color = 'hsl(0, 0%, 100%)'
                    countryNameP.style.color = 'hsl(0, 0%, 100%)'
                    countryCapit.style.color = 'hsl(0, 0%, 100%)'
                    countryPopul.style.color = 'hsl(0, 0%, 100%)'
                    countryReg.style.color = 'hsl(0, 0%, 100%)'
                    document.body.style.backgroundColor = 'hsl(207, 26%, 17%)'
                    document.body.style.color = 'hsl(0, 0%, 100%)'
                    header.style.backgroundColor = 'hsl(209, 23%, 22%)'
                    countrySearch.style.backgroundColor = 'hsl(209, 23%, 22%)'
                    countrySearch.style.color = 'white'
                    regionSelector.style.backgroundColor = 'hsl(209, 23%, 22%)'
                    regionSelector.style.color = 'white'
                    countryMoreInfo.forEach(element => {
                        element.style.backgroundColor = 'hsl(209, 23%, 22%)'
                        element.style.color = 'hsl(0, 0%, 100%)'
                    })
                    createSpans.style.backgroundColor = 'hsl(209, 23%, 22%)'
                    createSpans.style.color = 'hsl(0, 0%, 100%)'
                    backBtn.style.backgroundColor = 'hsl(209, 23%, 22%)'
                    backBtn.style.color = 'hsl(0, 0%, 100%)'
                }
                else {
                    countryDiv.style.backgroundColor = 'white'
                    countryDiv.style.color = 'hsl(209, 23%, 22%)'
                    countryNameP.style.color = 'hsl(209, 23%, 22%)'
                    countryCapit.style.color = 'hsl(209, 23%, 22%)'
                    countryPopul.style.color = 'hsl(209, 23%, 22%)'
                    countryReg.style.color = 'hsl(209, 23%, 22%)'
                    document.body.style.backgroundColor = 'hsl(0, 0%, 98%)'
                    document.body.style.color = 'black'
                    header.style.backgroundColor = 'white'
                    countrySearch.style.backgroundColor = 'white'
                    countrySearch.style.color = 'hsl(209, 23%, 22%)'
                    regionSelector.style.backgroundColor = 'white'
                    regionSelector.style.color = 'black'
                    countryMoreInfo.forEach(element => {
                        element.style.backgroundColor = 'hsl(0, 0%, 100%)'
                        element.style.color = 'hsl(209, 23%, 22%)'
                    })
                    createSpans.style.backgroundColor = 'white'
                    createSpans.style.color = 'black'
                    backBtn.style.backgroundColor = 'hsl(0, 0%, 100%)'
                    backBtn.style.color = 'hsl(209, 23%, 22%)'
                }
            })
            
        } catch(error) {
            undefined;
        }
        
    })
}

fetchInfo('all', '')
regionSelector.addEventListener('change', (e) => {

    if(regionSelector.options[regionSelector.selectedIndex].text === 'Filter by Region') {
        countryInfo.innerHTML = ''
        fetchInfo('all', '')
    }else{
        countryInfo.innerHTML = ''
        const regionUrl = regionSelector.options[regionSelector.selectedIndex].text
        fetchInfo('region', regionUrl)
    }
})

