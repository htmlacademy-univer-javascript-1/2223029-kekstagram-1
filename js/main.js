function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength (string, length) {
  return string.length <= length;
}

let i = 1;
function getIdComments() {
  return i++;
}

let j = 1;
function getIdObject() {
  return j++;
}

let k = 1;
function getIdPhotos() {
  return k++;
}

const NAMES = ['Ваня', 'Денис', 'Настя', 'Соня', 'Аня', 'Маня', 'Гога', 'Еся', 'Тося', 'Муся', 'Петя', 'Вася', 'Лоля'];

const MESSAGES = [
  'Всё отлично!', 'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'
];

const OBJECT_COUNT = 25;

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

function createComments() {
  return {
    id: getIdComments(),
    avatar: `img/avatar-${getRandomPositiveInteger(1,6)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  };
}

function createObject() {
  return {
    id: getIdObject(),
    url: `photos/${getIdPhotos()}.jpg`,
    description: 'Описание фотографии',
    likes: getRandomPositiveInteger (15, 200),
    comments: Array.from({length: getRandomPositiveInteger (1, 2)}, createComments),
  };
}

const arrayOfObjects = Array.from({length: OBJECT_COUNT}, createObject);

console.log(arrayOfObjects);
