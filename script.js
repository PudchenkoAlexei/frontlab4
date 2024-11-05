const birthplaceElement = document.getElementById('birthplace');
const educationElement = document.getElementById('education'); 
const buttonsContainer = document.querySelector('.buttons-container');

birthplaceElement.addEventListener('click', function () {
    changeColors(birthplaceElement);
});

if (educationElement) {
    educationElement.addEventListener('click', function () {
        changeColors(educationElement);
    });
}

buttonsContainer.addEventListener('click', function (event) {
    const targetButton = event.target;
    if (targetButton.tagName === 'BUTTON') {
        handleButtonClick(targetButton);
    }
});

function changeColors(element) {
    const randomBgColor = getRandomColor();
    const randomTextColor = getRandomColor();

    element.style.backgroundColor = randomBgColor;
    element.style.color = randomTextColor;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function addPhotoButton() {
    const newPhoto = document.createElement('img');
    newPhoto.src = 'https://dance.knukim.edu.ua/wp-content/uploads/2022/12/A098B2F3-9598-4F1F-9E4E-4D88774D789F-1024x682.jpeg';
    newPhoto.alt = 'Фото Києва';
    newPhoto.classList.add('photo-city');
    const photosContainer = document.getElementById('photos-container');
    photosContainer.appendChild(newPhoto);
}

function handleButtonClick(button) {
    const photos = document.querySelectorAll('.photo-city');
    const lastPhoto = photos[photos.length - 1];

    switch (button.dataset.action) {
        case 'addPhoto':
            addPhotoButton();
            break;
        case 'enlargePhoto':
            modifyPhotoSize(lastPhoto, 1.2);
            break;
        case 'reducePhoto':
            modifyPhotoSize(lastPhoto, 0.8);
            break;
        case 'deletePhoto':
            deletePhotoButton(lastPhoto);
            break;
    }
}

function modifyPhotoSize(photo, factor) {
    if (photo) {
        const currentWidth = parseFloat(window.getComputedStyle(photo).width);
        const currentHeight = parseFloat(window.getComputedStyle(photo).height);
        photo.style.width = `${currentWidth * factor}px`;
        photo.style.height = `${currentHeight * factor}px`;
    }
}

function deletePhotoButton(photo) {
    if (photo) {
        photo.remove();
    }
}
