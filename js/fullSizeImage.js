import {descriptions} from './miniatures.js';

const bigPicture = document.querySelector('.big-picture');
const pictures = document.querySelectorAll('.picture');
const buttonCancel = document.querySelector('.big-picture__cancel');
const buttonShowMoreComments = document.querySelector('.comments-loader');
const comment = bigPicture.querySelector('.social__comments');
const photosData = descriptions;

let commentsDataCopy = [];

const onEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    bigPicture.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    commentsDataCopy = [];
  }
};

document.addEventListener('keydown', onEscKeydown);

buttonCancel.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  commentsDataCopy = [];
});

const fillingСomments = function (comments, commentLi) {

  comments.forEach((i) => {
    const element = commentLi.cloneNode(true);

    element.querySelector('p').textContent = i['message'];
    element.querySelector('img').src = i['avatar'];
    element.querySelector('img').alt = i['name'];

    comment.appendChild(element);
  });
};

const commentsLoaderClickHandler = function () {
  const shownComments = commentsDataCopy.splice(0, 5);
  const commentLi = bigPicture.querySelector('.social__comments').querySelector('li');
  fillingСomments(shownComments, commentLi);

  if (commentsDataCopy.length === 0) {
    buttonShowMoreComments.removeEventListener('click', commentsLoaderClickHandler);
    buttonShowMoreComments.classList.add('hidden');
  }
};

const displayBigPicture = (picture, photoData) => {
  picture.addEventListener('click', () => {
    bigPicture.classList.remove('hidden');

    const img = bigPicture.querySelector('.big-picture__img').querySelector('img');
    const likes = bigPicture.querySelector('.big-picture__social').querySelector('.likes-count');
    const description = bigPicture.querySelector('.big-picture__social').querySelector('.social__caption');
    const commentCount = bigPicture.querySelector('.social__comment-count').querySelector('.comments-count');
    const commentLi = bigPicture.querySelector('.social__comments').querySelector('li');

    img.src = photoData.url;
    likes.textContent = photoData.likes;
    description.textContent = photoData.description;
    commentCount.textContent = photoData.comments.length;
    comment.textContent = '';

    commentsDataCopy = photoData.comments;
    const shownComments = commentsDataCopy.splice(0, 5);

    fillingСomments(shownComments, commentLi);

    buttonShowMoreComments.addEventListener('click', commentsLoaderClickHandler);
    document.querySelector('.social__comment-count').classList.remove('hidden');
    document.querySelector('.comments-loader').classList.remove('hidden');
    document.querySelector('.body').classList.add('modal-open');
  });
};

const createFullSizeImage = () => {
  for (let i = 0; i < pictures.length; i++) {
    displayBigPicture(pictures[i], photosData[i]);
  }
};

createFullSizeImage();
