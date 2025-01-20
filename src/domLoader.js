export const parentContainer = document.getElementById('content');


const heroContainer = document.createElement('div');
heroContainer.classList.add('section1', 'hero-container');


const contactInfo = document.createElement('div');
contactInfo.classList.add('section2', 'contact-info');
contactInfo.textContent = 'Winston-Salem , NC, 27107 (555)555-5555'


const mainDescription = document.createElement('div');

mainDescription.classList.add('section1', 'main-description');
const imageForMain = document.createElement('img');
imageForMain.classList.add('image-main');
imageForMain.src = 'images/pasta-bolog.jpg';
const shortDescription = document.createElement('p');
shortDescription.classList.add('description');
shortDescription.textContent = "Pelu Pasta brings the rich flavors of Italy's diverse regions to life, offering a unique blend of traditional and contemporary pasta dishes. With a focus on authenticity and hospitality, Pelu Pasta aims to deliver an unforgettable dining experience in the heart of downtown Winston-Salem.";
const buttonForMain = document.createElement('button');
buttonForMain.classList.add('button-main');
buttonForMain.textContent = 'Our Menu'
mainDescription.append(imageForMain,shortDescription,buttonForMain);


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

function createTextBox(title, subtitle, bodyText, buttonTitle){
    const container = document.createElement('div');
    container.className = 'textbox'
    const titleElement = document.createElement('h1')
    titleElement.textContent = title;
    const subTitleElement = document.createElement('h3');
    subTitleElement.textContent = subtitle;
    const bodytextElement = document.createElement('p');
    bodytextElement.textContent = bodyText;
    const buttonElement = document.createElement('button');
    buttonElement.textContent = buttonTitle;
    container.append(titleElement,subTitleElement,bodytextElement,buttonElement);
    return container;

}


const cateringInfo = document.createElement('div');
cateringInfo.classList.add('section1', 'catering');
const image1Catering = document.createElement('img');
const textBox1Catering = document.createElement('div');
const image2Catering = document.createElement('img');
const textBox2Catering = document.createElement('div');
const image3Catering = document.createElement('img');
const textBox3Catering = document.createElement('div')


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