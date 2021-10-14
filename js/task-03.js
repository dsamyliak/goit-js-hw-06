const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery');
gallery.setAttribute("style", "margin: 0; list-style: none; display: flex; flex-direction: column; justify-content: center;")
console.log(gallery.attributes);

const htmlListItems = images.map((image) =>
  `<li><img src="${image.url}" alt="${image.alt}" style="height: 100%; width: 100%; padding: 0px 10px;"></li>`).join("");
gallery.insertAdjacentHTML("beforeend", htmlListItems);
console.log(htmlListItems);

// Old version:
// for (const image of images) {
//   let htmlString = `<li><img src="${image.url}" alt="${image.alt}" style="height: 100%; width: 100%; padding: 0px 10px;"></li>`;
  
//   gallery.innerHTML += htmlString;
  
//   console.log(gallery.innerHTML);
// };