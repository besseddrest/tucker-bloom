/* clones the product description and adds to product main section */
const desc = document.querySelector('div[data-title="Description"] > p'),
      descMain = document.querySelector('.product--description');

if (desc) {
  const cloned = desc.cloneNode(true);
  descMain.appendChild(cloned);
}

const swatchGroup = Array.from(document.querySelectorAll('.swatch'));
swatchGroup.forEach(group => {
  const header = group.querySelector('.header'),
        firstSwatch = group.querySelector('.swatch-element'),
        wrapper = document.createElement('strong');

  /* update labels for default options */
  wrapper.innerHTML = firstSwatch.dataset.value;
  wrapper.classList.add('user--selection');
  header.appendChild(wrapper);

  /* adds user selection to swatch label */
  group.addEventListener('click', (e) => {
    const el = e.target;

    if (el.tagName == 'INPUT') {
      wrapper.innerHTML = el.value;
    }
  });
});
