/* BORMAN shop engine — products, Kaspi installment, cart, chrome, motion */
const CATS = { styling: 'Стайлеры', straighteners: 'Утюжки', curling: 'Плойки', humidifiers: 'Увлажнители' };
const ICONS = {
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/></svg>',
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h13l-1.2 9.3a2 2 0 0 1-2 1.7H9.2a2 2 0 0 1-2-1.7L6 7Z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg>',
  spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round"><path d="M12 2c.7 5.2 1.6 7.6 8 8.2-6.4.6-7.3 3-8 8.2-.7-5.2-1.6-7.6-8-8.2 6.4-.6 7.3-3 8-8.2Z"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5c0 4.6-3 7.6-7 9.1-4-1.5-7-4.5-7-9.1V6l7-3Z"/><path d="m8.8 12 2.2 2.2 4.2-4.4"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12l1-8.5Z"/></svg>',
  medal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="6"/><path d="m8.5 14-2 7.5 5.5-3.2 5.5 3.2-2-7.5"/></svg>',
  truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6.5h11v10H2zM13 9.5h4.2l3.8 3v4H13z"/><circle cx="6.8" cy="18.2" r="1.7"/><circle cx="17.6" cy="18.2" r="1.7"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 12a8.5 8.5 0 1 1-2.5-6"/><path d="M20.5 3.5V9H15"/></svg>',
  wallet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="13" rx="3"/><path d="M3 9.5h13.5a2 2 0 0 1 2 2v0"/><circle cx="16.5" cy="12.5" r="1"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M12 6l6 6-6 6"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M8 5.5v13l11-6.5-11-6.5Z"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 9-8 9 8"/><path d="M5 9.5V20h14V9.5"/><path d="M10 20v-6h4v6"/></svg>',
  caret: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z"/><circle cx="12" cy="10" r="2.4"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 3h3l1.5 5-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 5 1.5v3a2 2 0 0 1-2 2A17 17 0 0 1 4.5 5 2 2 0 0 1 6.5 3Z"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 1.9a8.1 8.1 0 1 1-4.1 15l-.3-.2-3 .8.8-2.9-.2-.3A8.1 8.1 0 0 1 12 3.9ZM9.2 8.2c-.2 0-.5 0-.7.4-.2.4-.9.9-.9 2.1s.9 2.4 1 2.6c.2.2 1.8 2.9 4.5 3.9 2.2.8 2.7.7 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.3l-1.7-.8c-.2-.1-.4-.1-.6.1l-.6.8c-.1.2-.3.2-.5.1-.7-.3-1.4-.6-2.2-1.6-.2-.3 0-.4.1-.6l.4-.5c.1-.2.1-.3 0-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.4Z"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.6"/><path d="M5 20a7 7 0 0 1 14 0"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7-4.5-7-9.5A3.5 3.5 0 0 1 12 7a3.5 3.5 0 0 1 7 3.5c0 5-7 9.5-7 9.5Z"/></svg>',
  up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m6 14 6-6 6 6"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 15.5A2.5 2.5 0 0 1 17.5 18H8l-4 3V6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5Z"/><path d="M8.5 10h7M8.5 13.5h4"/></svg>',
  tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3.6 12.4 11.5 4.5H19v7.5l-7.9 7.9a1.8 1.8 0 0 1-2.6 0l-4.9-4.9a1.8 1.8 0 0 1 0-2.6Z"/><circle cx="15.4" cy="8.6" r="1.2"/><path d="m9.5 14.5 4-4" stroke-width="1.2"/></svg>',
};
window.ICONS = ICONS;
const PRODUCTS = [
  { id: 13, name: 'Стайлер BORMAN BM931 9-в-1', cat: 'styling', price: 59990, img: 'prod-13', tag: 'Хит', feat: '9 насадок + ионизация', specs: [['Насадки', '9 в 1'], ['Ионизация', 'да'], ['Мощность', '1400 Вт'], ['Режимы t°', '3'], ['Обдув', '2 скорости'], ['Кабель', '2.5 м, вращение']] },
  { id: 9, name: 'Стайлер BORMAN 7uper Spin Pro', cat: 'styling', price: 79990, img: 'prod-9', tag: 'Премиум', feat: 'Автоматическая закрутка', specs: [['Технология', 'Spin / автозакрутка'], ['Ионизация', 'да'], ['Мощность', '1300 Вт'], ['Насадки', 'мультистайлинг'], ['Дисплей', 'LED'], ['Кабель', '2.5 м']] },
  { id: 11, name: 'Стайлер BORMAN BM731 (белый)', cat: 'styling', price: 49990, img: 'prod-11', feat: 'Фен-стайлер 1400 Вт', specs: [['Мощность', '1400 Вт'], ['Ионизация', 'да'], ['Насадки', '5'], ['Режимы', '3'], ['Холодный обдув', 'да'], ['Цвет', 'белый']] },
  { id: 18, name: 'Мультистайлер BORMAN HC03 7-в-1', cat: 'styling', price: 29990, img: 'prod-18', tag: 'Выгодно', feat: '7 насадок для укладки', specs: [['Насадки', '7 в 1'], ['Керамика', 'да'], ['Ионизация', 'да'], ['Мощность', '1200 Вт'], ['Режимы t°', '3'], ['Кабель', '2 м']] },
  { id: 10, name: 'Стайлер BORMAN BM531', cat: 'styling', price: 27990, img: 'prod-10', feat: 'Компактный фен-стайлер', specs: [['Мощность', '1000 Вт'], ['Насадки', '3'], ['Ионизация', 'да'], ['Режимы', '2'], ['Вес', '450 г'], ['Кабель', '1.8 м']] },
  { id: 16, name: 'Утюжок BORMAN BM Silk 2.0', cat: 'straighteners', price: 10000, img: 'prod-16', tag: 'Хит', feat: 'Silk-керамика + ионизация', specs: [['Макс. t°', '160 °C'], ['Мощность', '1300 Вт'], ['Режимы t°', '6'], ['Ионизация', 'да'], ['Покрытие', 'турмалин'], ['Кабель', '2.4 м, вращение']] },
  { id: 19, name: 'Плойка BORMAN HC02 4-в-1 авто', cat: 'curling', price: 23990, img: 'prod-19', tag: 'Новинка', feat: 'Автоматическая, 4 насадки', specs: [['Тип', 'автоматическая'], ['Насадки', '4 в 1'], ['Керамика', 'да'], ['Режимы t°', '3'], ['Таймер', 'да'], ['Кабель', '2 м']] },
  { id: 7, name: 'Плойка BORMAN SP100 (белая)', cat: 'curling', price: 19990, img: 'prod-7', feat: 'Керамика, быстрый нагрев', specs: [['Керамика', 'да'], ['Макс. t°', '200 °C'], ['Нагрев', '30 сек'], ['Диаметр', '25 мм'], ['Дисплей', 'LED'], ['Цвет', 'белый']] },
  { id: 8, name: 'Плойка BORMAN SP100 (чёрная)', cat: 'curling', price: 19990, img: 'prod-8', feat: 'Керамика, быстрый нагрев', specs: [['Керамика', 'да'], ['Макс. t°', '200 °C'], ['Нагрев', '30 сек'], ['Диаметр', '25 мм'], ['Дисплей', 'LED'], ['Цвет', 'чёрный']] },
  { id: 17, name: 'Плойка BORMAN WT121 портативная', cat: 'curling', price: 19990, img: 'prod-17', feat: 'Беспроводная, USB-C', specs: [['Питание', 'аккумулятор'], ['Зарядка', 'USB-C'], ['Макс. t°', '180 °C'], ['Время работы', '~30 мин'], ['Вес', '300 г'], ['Дорожная', 'да']] },
  { id: 15, name: 'Увлажнитель воздуха BORMAN M202B', cat: 'humidifiers', price: 29990, img: 'prod-15', feat: 'Ультразвуковой + подсветка', specs: [['Тип', 'ультразвуковой'], ['Бак', '3.5 л'], ['Подсветка', 'LED'], ['Режимы', '3'], ['Автоотключение', 'да'], ['Площадь', 'до 30 м²']] },
  { id: 14, name: 'Увлажнитель воздуха BORMAN BM3', cat: 'humidifiers', price: 25900, img: 'prod-14', feat: 'Тихий, для спальни', specs: [['Тип', 'ультразвуковой'], ['Бак', '2.5 л'], ['Уровень шума', '<30 дБ'], ['Режимы', '2'], ['Автоотключение', 'да'], ['Площадь', 'до 20 м²']] },
];
const fmt = n => n.toLocaleString('ru-RU') + ' ₸';
const perMonth = (price, m = 12) => Math.round(price / m).toLocaleString('ru-RU') + ' ₸/мес';
const P = id => PRODUCTS.find(p => p.id == id);
const imgUrl = p => `${window.__BASE__ || ''}assets/${p.img}.webp`;

let cart = {};
try { cart = JSON.parse(localStorage.getItem('borman_cart') || '{}'); } catch (e) { cart = {}; }
const saveCart = () => { localStorage.setItem('borman_cart', JSON.stringify(cart)); renderCart(); };
const cartCount = () => Object.values(cart).reduce((a, b) => a + b, 0);
const cartTotal = () => Object.entries(cart).reduce((s, [id, q]) => s + (P(id) ? P(id).price * q : 0), 0);
function addToCart(id, q = 1) { cart[id] = (cart[id] || 0) + q; saveCart(); openCart(); toast('Добавлено в корзину'); }
function setQty(id, q) { if (q <= 0) delete cart[id]; else cart[id] = q; saveCart(); }

function openCart() { document.querySelector('.cart')?.classList.add('open'); document.querySelector('.cart-ov')?.classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeCart() { document.querySelector('.cart')?.classList.remove('open'); document.querySelector('.cart-ov')?.classList.remove('open'); document.body.style.overflow = ''; }
let toastT;
function toast(msg) { let t = document.getElementById('toast'); if (!t) { t = document.createElement('div'); t.id = 'toast'; t.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translate(-50%,20px);background:#2a211a;color:#fbf7ee;padding:14px 26px;border-radius:100px;z-index:120;font-weight:600;font-size:14px;opacity:0;transition:.35s;box-shadow:0 20px 40px -16px rgba(0,0,0,.4)'; document.body.appendChild(t); } t.textContent = '✓ ' + msg; requestAnimationFrame(() => { t.style.opacity = 1; t.style.transform = 'translate(-50%,0)'; }); clearTimeout(toastT); toastT = setTimeout(() => { t.style.opacity = 0; t.style.transform = 'translate(-50%,20px)'; }, 2000); }

function renderCart() {
  document.querySelectorAll('.cart-count').forEach(e => { e.textContent = cartCount(); e.style.display = cartCount() ? 'inline-flex' : 'none'; });
  const box = document.querySelector('.cart .items'); if (!box) return;
  const ids = Object.keys(cart);
  if (!ids.length) { box.innerHTML = '<div class="empty">Корзина пуста.<br><br>Добавьте технику BORMAN 💛</div>'; document.querySelector('.cart .cf').style.display = 'none'; return; }
  document.querySelector('.cart .cf').style.display = 'block';
  box.innerHTML = ids.map(id => { const p = P(id), q = cart[id]; return `<div class="citem"><img src="${imgUrl(p)}" alt=""><div class="ci"><div class="crow"><h4>${p.name}</h4><button class="rm2" onclick="setQty(${id},0)" aria-label="Удалить">×</button></div><div class="cprice">${fmt(p.price)}</div><div class="kaspi-m">Kaspi · ${perMonth(p.price)} ×12</div><div class="qty"><button onclick="setQty(${id},${q - 1})">−</button><span>${q}</span><button onclick="setQty(${id},${q + 1})">+</button></div></div></div>`; }).join('');
  document.querySelector('.cart .tot .v').textContent = fmt(cartTotal());
  document.querySelector('.cart .kaspi-tot').textContent = 'или Kaspi Red · ' + perMonth(cartTotal()) + ' × 12 месяцев';
}

const NAV = [
  ['index.html', 'Главная', 'home'],
  ['index.html#best', 'Бестселлеры'],
  ['catalog.html?sort=new', 'Новинки'],
  ['catalog.html?sale=1', 'Скидки'],
  ['catalog.html?cat=styling', 'Стайлеры и фены'],
  ['catalog.html?cat=humidifiers', 'Увлажнители'],
  ['catalog.html?cat=curling', 'Плойки'],
  ['catalog.html?cat=straighteners', 'Утюжки'],
  ['catalog.html?cat=massage', 'Массажёры'],
];
const CITIES = ['Алматы', 'Астана', 'Шымкент', 'Караганда', 'Актобе', 'Абай'];
const WA = '77051751337';
function openMenu() { document.querySelector('.mmenu').classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeMenu() { document.querySelector('.mmenu').classList.remove('open'); document.body.style.overflow = ''; }
function toggleCity(e) { e.stopPropagation(); document.querySelectorAll('.city-pop').forEach(p => p.classList.toggle('open')); }
function pickCity(c) { document.querySelectorAll('.cityname').forEach(el => el.textContent = c); document.querySelectorAll('.city-pop').forEach(p => p.classList.remove('open')); try { localStorage.setItem('borman_city', c); } catch (e) {} }
function setLang(el, l) { el.parentNode.querySelectorAll('button').forEach(b => b.classList.remove('on')); el.classList.add('on'); toast(l === 'kz' ? 'Қазақ тілі — жақында' : 'Русский язык'); }
document.addEventListener('click', () => document.querySelectorAll('.city-pop.open').forEach(p => p.classList.remove('open')));
function scrollTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

function injectChrome() {
  const B = window.__BASE__ || '';
  let city = 'Алматы'; try { city = localStorage.getItem('borman_city') || 'Алматы'; } catch (e) {}
  const navRow = NAV.map(([href, label, ic]) => ic
    ? `<a href="${B}${href}" class="nhome" aria-label="${label}" title="${label}">${ICONS[ic]}</a>`
    : `<a href="${B}${href}">${label}</a>`).join('');
  const mNav = NAV.map(([href, label]) => `<a href="${B}${href}">${label}</a>`).join('');
  const cityPop = `<div class="city-pop">${CITIES.map(c => `<button type="button" onclick="pickCity('${c}')">${c}</button>`).join('')}</div>`;
  const hdr = document.createElement('div');
  hdr.innerHTML = `
  <header class="hdr" id="hdr">
    <div class="nav-top"><div class="wrap navwrap">
      <button class="burger" onclick="openMenu()" aria-label="Меню"><span></span><span></span><span></span></button>
      <a href="${B}index.html" class="logo">BORMAN</a>
      <div class="util util-l">
        <div class="citywrap"><button class="citybtn" type="button" onclick="toggleCity(event)">${ICONS.pin}<span class="cityname">${city}</span>${ICONS.caret}</button>${cityPop}</div>
        <div class="lang"><button type="button" class="on" onclick="setLang(this,'ru')">Ru</button><button type="button" onclick="setLang(this,'kz')">Kz</button></div>
      </div>
      <form class="search" onsubmit="event.preventDefault();toast('Поиск скоро заработает')"><span class="si">${ICONS.search}</span><input type="search" placeholder="Поиск по каталогу…" aria-label="Поиск"></form>
      <div class="util util-r">
        <a class="phone" href="https://wa.me/${WA}" target="_blank" rel="noopener" title="WhatsApp">${ICONS.whatsapp}<b>+7 705 175 1337</b></a>
        <button class="iconbtn only-lg" type="button" title="Личный кабинет" onclick="toast('Личный кабинет — скоро')">${ICONS.user}</button>
        <button class="iconbtn only-lg" type="button" title="Избранное" onclick="toast('Избранное — скоро')">${ICONS.heart}</button>
        <button class="iconbtn cartbtn" onclick="openCart()" title="Корзина" aria-label="Корзина">${ICONS.cart}<span class="cart-count">0</span></button>
      </div>
    </div></div>
    <div class="nav-bar"><div class="wrap"><nav class="menu">${navRow}</nav></div></div>
  </header>
  <div class="mmenu">
    <div class="mm-top"><a href="${B}index.html" class="logo">BORMAN</a><button class="x" onclick="closeMenu()" aria-label="Закрыть">×</button></div>
    <div class="mm-bar">
      <div class="citywrap"><button class="citybtn" type="button" onclick="toggleCity(event)">${ICONS.pin}<span class="cityname">${city}</span>${ICONS.caret}</button>${cityPop}</div>
      <div class="lang"><button type="button" class="on" onclick="setLang(this,'ru')">Ru</button><button type="button" onclick="setLang(this,'kz')">Kz</button></div>
    </div>
    <div class="mm-links">${mNav}</div>
    <div class="mm-foot">
      <a class="btn gold block" href="${B}catalog.html">Смотреть каталог →</a>
      <div class="mm-acc"><button type="button" onclick="toast('Личный кабинет — скоро')">${ICONS.user}<span>Кабинет</span></button><button type="button" onclick="toast('Избранное — скоро')">${ICONS.heart}<span>Избранное</span></button></div>
      <div class="mm-info"><span class="kaspi">рассрочка 0-0-12</span><a class="mm-phone" href="https://wa.me/${WA}">${ICONS.whatsapp}+7 705 175 1337</a><p>${city}, Казахстан · доставка по всему Казахстану</p><p>@bormanbrand · Instagram · TikTok</p></div>
    </div>
  </div>
  <div class="cart-ov" onclick="closeCart()"></div>
  <div class="cart"><div class="ch"><h3>Корзина</h3><button class="icobtn" onclick="closeCart()" style="font-size:24px" aria-label="Закрыть">×</button></div><div class="items"></div><div class="cf"><div class="tot"><span>Итого</span><span class="v">0 ₸</span></div><div class="kaspi-tot"></div><button class="btn kaspibtn block">Оформить заказ</button><button class="btn outline block" style="margin-top:10px" onclick="closeCart()">Продолжить покупки</button></div></div>
  <button class="totop" id="totop" onclick="scrollTop()" aria-label="Наверх">${ICONS.up}</button>
  <div class="fabwrap"><button class="fab" id="fab" onclick="toast('Напишите нам — мы на связи 💛')" aria-label="Обратная связь"><span class="fab-ring"></span>${ICONS.chat}<span class="fab-label">Обратная связь</span></button></div>`;
  document.body.prepend(hdr);
  const ftr = document.createElement('footer');
  ftr.innerHTML = `<div class="wrap"><div class="logo">BORMAN</div><div class="fgrid">
    <div><p style="max-width:280px;margin-top:12px">Профессиональная техника для укладки и ухода за волосами. Красота в каждой детали.</p><p style="margin-top:10px">Оплата: Kaspi · Kaspi Red · рассрочка 0-0-12</p></div>
    <div><h4>Каталог</h4><a href="${B}catalog.html?cat=styling">Стайлеры</a><a href="${B}catalog.html?cat=straighteners">Утюжки</a><a href="${B}catalog.html?cat=curling">Плойки</a><a href="${B}catalog.html?cat=humidifiers">Увлажнители</a></div>
    <div><h4>Покупателю</h4><a href="#">Доставка</a><a href="#">Гарантия</a><a href="#">Kaspi рассрочка</a><a href="#">Возврат</a></div>
    <div><h4>Контакты</h4><a href="#">Алматы, Казахстан</a><a href="#">+7 700 000 00 00</a><a href="#">@bormanbrand</a></div>
  </div><div class="fbot"><span>© 2026 BORMAN. Все права защищены.</span><span>Концепт-магазин · дизайн-прототип</span></div></div>`;
  document.body.appendChild(ftr);
  renderCart();
}

function cardHTML(p) {
  const B = window.__BASE__ || '';
  return `<a class="pcard rv" href="${B}product.html?id=${p.id}">${p.tag ? `<span class="flag">${p.tag}</span>` : ''}<div class="ph"><img src="${imgUrl(p)}" loading="lazy" alt="${p.name}"></div><div class="pi"><span class="cat">${CATS[p.cat]}</span><h3>${p.name}</h3><div class="price">${fmt(p.price)}</div><div class="kaspi-m">Kaspi · ${perMonth(p.price)} ×12</div><div class="add"><button onclick="event.preventDefault();event.stopPropagation();addToCart(${p.id})">В корзину</button></div></div></a>`;
}
function renderGrid(sel, list) { const el = document.querySelector(sel); if (el) { el.innerHTML = list.map(cardHTML).join(''); revealScan(); } }
let _io;
function revealScan() { if (!_io) _io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); _io.unobserve(e.target); } }), { threshold: .12 }); document.querySelectorAll('.rv:not(.in)').forEach(el => _io.observe(el)); }
window.revealScan = revealScan;
function initMotion() {
  const hdr = document.getElementById('hdr'), tt = document.getElementById('totop');
  addEventListener('scroll', () => {
    hdr && hdr.classList.toggle('solid', scrollY > 30);
    tt && tt.classList.toggle('show', scrollY > 520);
  }, { passive: true });
  revealScan();
}
document.addEventListener('DOMContentLoaded', () => { injectChrome(); initMotion(); });
