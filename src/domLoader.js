export const parentContainer = document.getElementById('content');


const heroContainer = document.createElement('div');
heroContainer.classList.add('section1', 'hero-container');


const contactInfo = document.createElement('div');
contactInfo.classList.add('section2', 'contact-info');


const mainDescription = document.createElement('div');
mainDescription.classList.add('section1', 'main-description');


const reservationInfo = document.createElement('div');
reservationInfo.classList.add('section2', 'reservation');


const cateringInfo = document.createElement('div');
cateringInfo.classList.add('section1', 'catering');


const reviews = document.createElement('div');
reviews.classList.add('section2', 'reviews');


const hiringInfo = document.createElement('div');
hiringInfo.classList.add('section1', 'hiring');


function renderHome(){
    parentContainer.append(heroContainer,contactInfo,mainDescription,reservationInfo,cateringInfo,reviews,hiringInfo);
}