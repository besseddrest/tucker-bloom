/* clones the product description and adds to product main section */
const desc = document.querySelector('div[data-title="Description"] p:first-child').cloneNode(true),
      descMain = document.querySelector('.product--description');
descMain.appendChild(desc);

/* adds user selection to swatch label */
const swatchGroup = Array.from(document.querySelectorAll('.swatch'));
swatchGroup.forEach(group => {
  group.addEventListener('click', (e) => {
    const el = e.target;

    if (el.tagName == 'INPUT') {
      const header = group.querySelector('.header'),
            val = el.value,
            selection = group.querySelector('.user--selection');

      if (selection) {
        selection.innerHTML = val;
      } else {
        const wrapper = document.createElement('strong');
        wrapper.classList.add('user--selection');
        wrapper.innerHTML = val;
        header.appendChild(wrapper);
      }
    }
  });
});
