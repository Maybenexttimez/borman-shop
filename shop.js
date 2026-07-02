/* BORMAN shop engine — products, Kaspi installment, cart, chrome, motion */
const CATS = { styling: 'Стайлеры', straighteners: 'Утюжки', curling: 'Плойки', humidifiers: 'Увлажнители' };
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
  box.innerHTML = ids.map(id => { const p = P(id), q = cart[id]; return `<div class="citem"><img src="${imgUrl(p)}" alt=""><div class="ci"><h4>${p.name}</h4><div>${fmt(p.price)}</div><div class="kaspi-m">Kaspi: ${perMonth(p.price)} ×12</div><div class="qty"><button onclick="setQty(${id},${q - 1})">−</button><span>${q}</span><button onclick="setQty(${id},${q + 1})">+</button><button class="rm" onclick="setQty(${id},0)" style="margin-left:auto">Удалить</button></div></div></div>`; }).join('');
  document.querySelector('.cart .tot .v').textContent = fmt(cartTotal());
  document.querySelector('.cart .kaspi-tot').textContent = 'или Kaspi Red · ' + perMonth(cartTotal()) + ' × 12 месяцев';
}

function injectChrome() {
  const B = window.__BASE__ || '';
  const menu = `<a href="${B}catalog.html?cat=styling">Стайлеры</a><a href="${B}catalog.html?cat=straighteners">Утюжки</a><a href="${B}catalog.html?cat=curling">Плойки</a><a href="${B}catalog.html?cat=humidifiers">Увлажнители</a><a href="${B}index.html#brand">О бренде</a>`;
  const hdr = document.createElement('div');
  hdr.innerHTML = `
  <header class="hdr" id="hdr"><div class="wrap nav">
    <button class="burger" onclick="document.querySelector('.mmenu').classList.add('open');document.body.style.overflow='hidden'"><span></span><span></span><span></span></button>
    <a href="${B}index.html" class="logo">BORMAN</a>
    <nav class="menu">${menu}</nav>
    <div class="nav-r"><span class="lnk icobtn">Поиск</span><button class="icobtn" onclick="openCart()">Корзина <span class="cart-count">0</span></button></div>
  </div></header>
  <div class="mmenu"><button class="x" onclick="this.parentNode.classList.remove('open');document.body.style.overflow=''">×</button>${menu}</div>
  <div class="cart-ov" onclick="closeCart()"></div>
  <div class="cart"><div class="ch"><h3>Корзина</h3><button class="icobtn" onclick="closeCart()" style="font-size:24px">×</button></div><div class="items"></div><div class="cf"><div class="tot"><span>Итого</span><span class="v">0 ₸</span></div><div class="kaspi-tot"></div><button class="btn terra block">Оформить заказ</button><button class="btn soft block" style="margin-top:10px" onclick="closeCart()">Продолжить покупки</button></div></div>`;
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
  const hdr = document.getElementById('hdr');
  addEventListener('scroll', () => hdr && hdr.classList.toggle('solid', scrollY > 30), { passive: true });
  revealScan();
}
document.addEventListener('DOMContentLoaded', () => { injectChrome(); initMotion(); });
