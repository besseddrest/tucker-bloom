/* clones the product description and adds to product main section */
const desc = document.querySelector('div[data-title="Description"] > p'),
      descMain = document.querySelector('.product--description');

const tabs = document.querySelector('#product-description'),
      tabsFull = document.querySelector('.tabs__full'),
      tabsMobile = document.querySelector('.tabs__mobile');

if (desc) {
  const cloned = desc.cloneNode(true);
  descMain.appendChild(cloned);
}

const getCurrentWidth = () => {
  return window.innerWidth || document.body.clientWidth;
}

const renderTabsFull = () => {
  tabsFull.appendChild(tabs);
  tabsMobile.innerHTML = '';
}

const renderTabsMobile = () => {
  tabsMobile.appendChild(tabs);
  tabsFull.innerHTML = '';
}

const renderInitialTabs = () => {
  const browserWidth = getCurrentWidth();
  browserWidth <= 480 ? renderTabsMobile() : renderTabsFull();
}

renderInitialTabs();

window.onresize = () => {
  const currentWidth = getCurrentWidth();

  if (currentWidth <= 480 && tabsMobile.innerHTML == '')
    renderTabsMobile();

  if (currentWidth > 480 && tabsFull.innerHTML == '')
    renderTabsFull();
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
