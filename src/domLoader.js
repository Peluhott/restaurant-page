import foodMainsrc from './images/foodMain.jpg';
import image1src from './images/image1.jpg';
import image2src from './images/image2.jpg';
import image3src from './images/image3.jpg';
import pastaBologsrc from './images/pasta-bolog.jpg';
import restaurantsrc from './images/restaurant.jpg';




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
imageForMain.src = pastaBologsrc;
const shortDescription = document.createElement('p');
shortDescription.classList.add('description');
shortDescription.textContent = "Pelu Pasta brings the rich flavors of Italy's diverse regions to life, offering a unique blend of traditional and contemporary pasta dishes. With a focus on authenticity and hospitality, Pelu Pasta aims to deliver an unforgettable dining experience in the heart of downtown Winston-Salem.";
const buttonForMain = document.createElement('button');
buttonForMain.classList.add('button-main');
buttonForMain.textContent = 'Our Menu'
mainDescription.append(imageForMain,shortDescription,buttonForMain);


const reservationInfo = document.createElement('div');
reservationInfo.classList.add('section2', 'reservation');

const reserveHeading = document.createElement('h1')
reserveHeading.textContent = 'Reservation';
const reserveSubHeading = document.createElement('h3')
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
    buttonElement.className = 'cateringButton';
    buttonElement.textContent = buttonTitle;
    
    container.append(titleElement,subTitleElement,bodytextElement,buttonElement);
    return container;

}


const cateringInfo = document.createElement('div');
cateringInfo.classList.add('section1', 'catering');

const imageDiv1 = document.createElement('div');

imageDiv1.className= 'imageDiv';
const image1Catering = document.createElement('img');
image1Catering.src = image1src;
image1Catering.className ='small-image';
imageDiv1.appendChild(image1Catering);
const textForTextBox1 = "Savor the taste of Italy with Pelu Pasta! Order your favorite authentic Italian dishes online and enjoy a delicious meal in the comfort of your own home. With our simple online ordering system, you can explore our menu, customize your pasta, and choose pickup or delivery in just a few clicks. Your Italian culinary journey starts here";
const textBox1Catering = createTextBox("Order Online", "Take Us Home With You", textForTextBox1, "Order")

const imageDiv2 = document.createElement('div');

imageDiv2.className ='imageDiv';
const image2Catering = document.createElement('img');
image2Catering.src = image2src;
image2Catering.className ='small-image';
imageDiv2.appendChild(image2Catering);
const textForTextBox2 = "Make your event unforgettable with catering from Pelu Pasta! Our talented team will craft a personalized menu showcasing our signature pasta dishes and authentic Italian flavors, ensuring a delightful dining experience that will impress you and your guests. Let us bring the taste of Italy to your special occasion!";
const textBox2Catering = createTextBox("CATERING", "Catering Made Easy", textForTextBox2, "Catering");

const imageDiv3 = document.createElement('div');

imageDiv3.className ='imageDiv';
const image3Catering = document.createElement('img');
image3Catering.src = image3src;
image3Catering.className ='small-image';
imageDiv3.appendChild(image3Catering);
const textForTextBox3 = "Celebrate in style at Pelu Pasta with a private party designed just for you! With our cozy ambiance, exceptional service, and delectable Italian pasta dishes, your event will be a memorable experience that guests of all ages will enjoy. Let us make your special occasion truly unforgettable!";
const textBox3Catering = createTextBox("Groups & Parties", "We Welcome Every Type Of Private Event", textForTextBox3, "Parties");

cateringInfo.append(imageDiv1,textBox1Catering,textBox2Catering,imageDiv2,imageDiv3,textBox3Catering);

const reviews = document.createElement('div');
reviews.classList.add('section2', 'reviews');


const hiringInfo = document.createElement('div');
hiringInfo.classList.add('section1', 'hiring');


export function renderHome(){
    parentContainer.append(heroContainer,contactInfo,mainDescription,reservationInfo,cateringInfo,reviews,hiringInfo);
}

export function renderFood() {

}

export function renderAbout(){

}