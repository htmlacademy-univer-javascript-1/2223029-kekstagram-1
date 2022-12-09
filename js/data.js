import {getRandomPositiveInteger} from './util.js';

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

const DESCRIPTIONS = [
  'Жизнь похожа на фотокамеру: вам просто нужно смотреть на нее с улыбкой',
  'Живите во всех тех моментах, которые вы не можете выразить словами',
  'Любите меня, от этого я буду сиять еще ярче',
  'Если у вас есть глаза, взгляните на меня сейчас!',
  'Лучшее еще впереди',
  'Я — это мы',
  'Всегда будьте лучшим вариантом для себя',
  'Мир начинается с улыбки',
  'Я просто прямой потомок грандиозности',
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
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomPositiveInteger (15, 200),
    comments: Array.from({length: getRandomPositiveInteger(1, 2)}, createComments),
  };
}

const arrayOfObjects = () => Array.from({length: OBJECT_COUNT}, createObject);

export {arrayOfObjects};
