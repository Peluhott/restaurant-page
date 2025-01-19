export const parentContainer = document.getElementById('content');


const heroContainer = document.createElement('div');
heroContainer.classList.add('section1', 'hero-container');


const contactInfo = document.createElement('div');
contactInfo.classList.add('section2', 'contact-info');
contactInfo.textContent = 'Winston-Salem , NC, 27107 (555)555-5555'


const mainDescription = document.createElement('div');
mainDescription.classList.add('section1', 'main-description');


const reservationInfo = document.createElement('div');
reservationInfo.classList.add('section2', 'reservation');

const reserveHeading = document.createElement('h2')
reserveHeading.textContent = 'Reservation';
const reserveSubHeading = document.createElement('h5')
reserveSubHeading.textContent = 'We Look Forward To Hosting You';
const reserveBody = document.createElement('p');
reserveBody.textContent = "Join us at Pelu Pasta and reserve your table for an authentic Italian dining experience! Whether you're celebrating a special occasion or enjoying a casual meal with friends, reserving in advance guarantees a spot for you to indulge in our delicious pasta and exceptional service.";
const reserveButton = document.createElement('button');
reserveButton.textContent = 'Reserve';
reservationInfo.append(reserveHeading,reserveSubHeading,reserveBody,reserveButton);


const cateringInfo = document.createElement('div');
cateringInfo.classList.add('section1', 'catering');


const reviews = document.createElement('div');
reviews.classList.add('section2', 'reviews');


const hiringInfo = document.createElement('div');
hiringInfo.classList.add('section1', 'hiring');


function renderHome(){
    parentContainer.append(heroContainer,contactInfo,mainDescription,reservationInfo,cateringInfo,reviews,hiringInfo);
}

function renderFood() {

}

function renderAbout(){

}