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
  whatsapp: '<svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16 3C8.82 3 3 8.82 3 16c0 2.29.6 4.44 1.65 6.3L3 29l6.86-1.6A12.9 12.9 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3Zm0 2.4c5.85 0 10.6 4.75 10.6 10.6S21.85 26.6 16 26.6c-1.98 0-3.83-.54-5.42-1.48l-.39-.23-4.07.95.97-3.96-.25-.41A10.53 10.53 0 0 1 5.4 16C5.4 10.15 10.15 5.4 16 5.4Zm-4.32 5.2c-.2 0-.53.08-.8.38-.28.3-1.06 1.03-1.06 2.52 0 1.48 1.08 2.92 1.23 3.12.15.2 2.13 3.4 5.27 4.64 2.6 1.03 3.13.83 3.7.78.56-.05 1.82-.74 2.08-1.46.26-.72.26-1.34.18-1.46-.08-.13-.28-.2-.58-.36-.3-.15-1.82-.9-2.1-1-.28-.1-.48-.15-.68.16-.2.3-.78.99-.96 1.19-.18.2-.35.22-.65.08-.3-.15-1.28-.48-2.44-1.51-.9-.8-1.51-1.8-1.69-2.1-.18-.3-.02-.47.13-.62.14-.14.3-.36.46-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.67-.94-2.28-.24-.58-.5-.5-.68-.51h-.58Z"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.6"/><path d="M5 20a7 7 0 0 1 14 0"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7-4.5-7-9.5A3.5 3.5 0 0 1 12 7a3.5 3.5 0 0 1 7 3.5c0 5-7 9.5-7 9.5Z"/></svg>',
  up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m6 14 6-6 6 6"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 15.5A2.5 2.5 0 0 1 17.5 18H8l-4 3V6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5Z"/><path d="M8.5 10h7M8.5 13.5h4"/></svg>',
  tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3.6 12.4 11.5 4.5H19v7.5l-7.9 7.9a1.8 1.8 0 0 1-2.6 0l-4.9-4.9a1.8 1.8 0 0 1 0-2.6Z"/><circle cx="15.4" cy="8.6" r="1.2"/><path d="m9.5 14.5 4-4" stroke-width="1.2"/></svg>',
  insta: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5.4"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>',
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
  ['guides.html', 'Гайды'],
  ['index.html#reviews', 'Отзывы'],
];
const CITIES = ['Алматы', 'Астана', 'Шымкент', 'Караганда', 'Актобе', 'Тараз', 'Павлодар', 'Усть-Каменогорск', 'Семей', 'Атырау', 'Костанай', 'Кызылорда', 'Уральск', 'Петропавловск', 'Актау', 'Талдыкорган', 'Кокшетау', 'Туркестан'];
const WA = '77051751337';
function openMenu() { document.querySelector('.mmenu').classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeMenu() { document.querySelector('.mmenu').classList.remove('open'); document.body.style.overflow = ''; }
function toggleCity(e) { e.stopPropagation(); document.querySelectorAll('.city-pop').forEach(p => p.classList.toggle('open')); }
function pickCity(c) { document.querySelectorAll('.cityname').forEach(el => el.textContent = c); document.querySelectorAll('.city-pop').forEach(p => p.classList.remove('open')); try { localStorage.setItem('borman_city', c); } catch (e) {} }
function setLang(el, l) { applyLang(l); }
document.addEventListener('click', () => document.querySelectorAll('.city-pop.open').forEach(p => p.classList.remove('open')));
function goTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
const WA_LINK = 'https://wa.me/' + WA;
/* ---- i18n: RU source in markup, KZ overlay (text-node swap) ---- */
const I18N_RU = { nav_home: 'Главная', nav_best: 'Бестселлеры', nav_new: 'Новинки', nav_sale: 'Скидки', nav_styling: 'Стайлеры и фены', nav_humid: 'Увлажнители', nav_curl: 'Плойки', nav_straight: 'Утюжки', nav_massage: 'Массажёры', nav_guides: 'Гайды', nav_reviews: 'Отзывы', search_ph: 'Поиск по каталогу…', hero_eyebrow: 'Красота каждый день', hero_h1a: 'Техника, которой', hero_h1b: 'доверяешь', hero_sub: 'Стайлеры, фены, утюжки, увлажнители и массажёры — оригинальная техника для красоты с честными ценами и гарантией.', cta_catalog: 'В каталог', cta_kaspi: 'Рассрочка Kaspi', hero_kline: 'оформление за 1 минуту в Kaspi', badge_installment: 'рассрочка 0-0-12', ben1_t: 'Выгодные цены', ben1_s: 'Прозрачная стоимость без скрытых наценок', ben2_t: 'Настоящие скидки', ben2_s: 'Реальная выгода, а не зачёркнутый ценник', ben3_t: 'Быстрая доставка', ben3_s: 'По всему Казахстану, бережно и в срок', ben4_t: 'Фирменная гарантия', ben4_s: '2 года и официальный сервис после покупки', cat_title: 'Всё для красоты и дома', best_eyebrow: 'Выбор покупателей', best_title: 'Хиты продаж', best_all: 'Весь каталог →', kaspi_eyebrow: 'Оплата', kaspi_title_a: 'Рассрочка', kaspi_title_b: 'без переплат', kaspi_p: 'Забирайте технику сегодня и платите частями до 12 месяцев. Ноль первого взноса, ноль переплаты — только удобство.', step1: '0 ₸ взнос', step2: '0% переплата', step3: 'до 12 месяцев', kaspi_eg: 'напр. утюжок BM Silk 2.0 — 10 000 ₸', kaspi_btn: 'Купить в рассрочку', cap0_h: 'Гладкость в движении', cap0_p: 'Silk-керамика и ионизация — салонный блеск без вреда для волос.', cap1_h: '160°C точности', cap1_p: '6 режимов температуры и защита от перегрева — контроль в каждом движении.', cap1_btn: 'Купить за 10 000 ₸', rev_title: 'Нам доверяют', rev_agg: '340+ отзывов покупателей', cmp_eyebrow: 'Подбор', cmp_title: 'Сравните модели', cmp_tbl_h: 'Топ-стайлеры BORMAN', guides_eyebrow: 'Помощь в выборе', guides_title: 'Гайды: что выбрать', guides_all: 'Все гайды →', brand_eyebrow: 'О BORMAN', brand_title_a: 'Красота', brand_title_b: 'в деталях', brand_p1: 'BORMAN — магазин техники для красоты и ухода в Алматы. Мы собираем только проверенные модели: стайлеры и фены, утюжки, плойки, увлажнители и массажёры.', brand_p2: 'Честные цены, официальная гарантия и быстрая доставка по всему Казахстану — чтобы забота о себе была простой и приятной каждый день.', fact1: 'Моделей в наличии', fact2: 'Фирменной гарантии', fact3: 'Рассрочка Kaspi', ig_title: 'BORMAN в жизни', ig_sub: 'Реальные укладки и распаковки наших покупателей', faq_eyebrow: 'Вопросы и ответы', faq_title: 'Частые вопросы', trust1_t: 'Официальная гарантия', trust1_s: '2 года на всю технику', trust2_t: 'Доставка по Казахстану', trust2_s: 'Бережно и в срок', trust3_t: 'Лёгкий возврат', trust3_s: '14 дней без вопросов', trust4_t: 'Удобная оплата', trust4_s: 'Kaspi · рассрочка 0-0-12', news_eyebrow: 'Клуб BORMAN', news_title: 'Скидка на первый заказ', news_p: 'Подпишитесь и получите персональную скидку на первую покупку и доступ к закрытым предложениям.', news_ph: 'Ваш e-mail', news_btn: 'Получить скидку', footer_about: 'Профессиональная техника для укладки и ухода за волосами. Красота в каждой детали.', footer_pay: 'Оплата: Kaspi · Kaspi Red · рассрочка 0-0-12', f_catalog: 'Каталог', f_buyer: 'Покупателю', f_contacts: 'Контакты', f_delivery: 'Доставка по РК', f_warranty: 'Гарантия 2 года', f_install: 'Рассрочка Kaspi', f_return: 'Возврат 14 дней', add_cart: 'В корзину', cart_title: 'Корзина', cart_total: 'Итого', cart_checkout: 'Оформить заказ', cart_continue: 'Продолжить покупки', chat_name: 'Асель · менеджер BORMAN', chat_status: 'онлайн · отвечаем быстро', fab_label: 'Есть вопрос?', chat_ph: 'Напишите сообщение…', q_choose: 'Помочь выбрать', q_delivery: 'Доставка', q_price: 'Цены', q_discount: 'Скидки', q_kaspi: 'Рассрочка Kaspi', q_warranty: 'Гарантия', q_return: 'Возврат', q_operator: 'Оператор', chat_greeting: 'Здравствуйте! Меня зовут Асель, я менеджер BORMAN 💛 Подскажу по товарам, ценам, скидкам, доставке и рассрочке Kaspi 0-0-12. Что вас интересует?' };
const I18N_KZ = { nav_home: 'Басты бет', nav_best: 'Бестселлерлер', nav_new: 'Жаңалықтар', nav_sale: 'Жеңілдіктер', nav_styling: 'Стайлерлер мен фендер', nav_humid: 'Ауа ылғалдандырғыштар', nav_curl: 'Бұйралағыштар', nav_straight: 'Түзеткіштер', nav_massage: 'Массаждағыштар', nav_guides: 'Нұсқаулықтар', nav_reviews: 'Пікірлер', search_ph: 'Каталог бойынша іздеу…', hero_eyebrow: 'Күн сайынғы сұлулық', hero_h1a: 'Сенім артуға', hero_h1b: 'болатын техника', hero_sub: 'Стайлерлер, фендер, түзеткіштер, ауа ылғалдандырғыштар мен массаждағыштар — адал бағамен және кепілдікпен ұсынылатын түпнұсқа сұлулық техникасы.', cta_catalog: 'Каталогқа', cta_kaspi: 'Kaspi бөліп төлеу', hero_kline: 'Kaspi-де 1 минутта рәсімдеу', badge_installment: '0-0-12 бөліп төлеу', ben1_t: 'Тиімді бағалар', ben1_s: 'Жасырын үстемесіз ашық құн', ben2_t: 'Нағыз жеңілдіктер', ben2_s: 'Сызылған баға емес, шынайы пайда', ben3_t: 'Жылдам жеткізу', ben3_s: 'Бүкіл Қазақстан бойынша, ұқыпты әрі уақытында', ben4_t: 'Фирмалық кепілдік', ben4_s: '2 жыл және сатып алғаннан кейінгі ресми қызмет', cat_title: 'Сұлулық пен үйге қажеттің бәрі', best_eyebrow: 'Сатып алушылардың таңдауы', best_title: 'Сатылым хиттері', best_all: 'Толық каталог →', kaspi_eyebrow: 'Төлем', kaspi_title_a: 'Артық төлемсіз', kaspi_title_b: 'бөліп төлеу', kaspi_p: 'Техниканы бүгін алып, 12 айға дейін бөліп төлеңіз. Бастапқы жарна жоқ, артық төлем жоқ — тек ыңғайлылық.', step1: '0 ₸ жарна', step2: '0% артық төлем', step3: '12 айға дейін', kaspi_eg: 'мыс. BM Silk 2.0 түзеткіші — 10 000 ₸', kaspi_btn: 'Бөліп төлеп сатып алу', cap0_h: 'Қозғалыстағы тегістік', cap0_p: 'Silk-керамика мен иондау — шашқа зиянсыз салондық жылтырлық.', cap1_h: '160°C дәлдік', cap1_p: '6 температура режимі және қызып кетуден қорғаныс — әр қозғалыста бақылау.', cap1_btn: '10 000 ₸-ге сатып алу', rev_title: 'Бізге сенеді', rev_agg: '340+ сатып алушы пікірі', cmp_eyebrow: 'Таңдау', cmp_title: 'Модельдерді салыстырыңыз', cmp_tbl_h: 'BORMAN үздік стайлерлері', guides_eyebrow: 'Таңдауға көмек', guides_title: 'Нұсқаулықтар: нені таңдау керек', guides_all: 'Барлық нұсқаулықтар →', brand_eyebrow: 'BORMAN туралы', brand_title_a: 'Сұлулық', brand_title_b: 'бөлшектерде', brand_p1: 'BORMAN — Алматыдағы сұлулық пен күтім техникасының дүкені. Біз тек сынақтан өткен модельдерді жинаймыз: стайлерлер мен фендер, түзеткіштер, бұйралағыштар, ауа ылғалдандырғыштар мен массаждағыштар.', brand_p2: 'Адал бағалар, ресми кепілдік және бүкіл Қазақстан бойынша жылдам жеткізу — өзіңізге күтім жасау күн сайын оңай әрі жағымды болуы үшін.', fact1: 'Қолда бар модельдер', fact2: 'Фирмалық кепілдік', fact3: 'Kaspi бөліп төлеу', ig_title: 'BORMAN өмірде', ig_sub: 'Сатып алушыларымыздың нақты укладкалары мен ашылымдары', faq_eyebrow: 'Сұрақтар мен жауаптар', faq_title: 'Жиі қойылатын сұрақтар', trust1_t: 'Ресми кепілдік', trust1_s: 'Барлық техникаға 2 жыл', trust2_t: 'Қазақстан бойынша жеткізу', trust2_s: 'Ұқыпты әрі уақытында', trust3_t: 'Оңай қайтару', trust3_s: '14 күн, артық сұрақсыз', trust4_t: 'Ыңғайлы төлем', trust4_s: 'Kaspi · 0-0-12 бөліп төлеу', news_eyebrow: 'BORMAN клубы', news_title: 'Алғашқы тапсырысқа жеңілдік', news_p: 'Жазылыңыз да, алғашқы сатып алуыңызға жеке жеңілдік пен жабық ұсыныстарға қолжетімділік алыңыз.', news_ph: 'Сіздің e-mail', news_btn: 'Жеңілдік алу', footer_about: 'Шашты сәндеу мен күтімге арналған кәсіби техника. Сұлулық әр бөлшекте.', footer_pay: 'Төлем: Kaspi · Kaspi Red · 0-0-12 бөліп төлеу', f_catalog: 'Каталог', f_buyer: 'Сатып алушыға', f_contacts: 'Байланыс', f_delivery: 'ҚР бойынша жеткізу', f_warranty: '2 жыл кепілдік', f_install: 'Kaspi бөліп төлеу', f_return: '14 күнде қайтару', add_cart: 'Себетке', cart_title: 'Себет', cart_total: 'Барлығы', cart_checkout: 'Тапсырысты рәсімдеу', cart_continue: 'Сатып алуды жалғастыру', chat_name: 'Әсел · BORMAN менеджері', chat_status: 'желіде · жылдам жауап береміз', fab_label: 'Сұрағыңыз бар ма?', chat_ph: 'Хабарлама жазыңыз…', q_choose: 'Таңдауға көмектесу', q_delivery: 'Жеткізу', q_price: 'Бағалар', q_discount: 'Жеңілдіктер', q_kaspi: 'Kaspi бөліп төлеу', q_warranty: 'Кепілдік', q_return: 'Қайтару', q_operator: 'Оператор', chat_greeting: 'Сәлеметсіз бе! Менің атым Әсел, мен BORMAN менеджерімін 💛 Тауарлар, бағалар, жеңілдіктер, жеткізу және Kaspi 0-0-12 бөліп төлеу бойынша кеңес беремін. Сізді не қызықтырады?' };
let LANG = 'ru'; try { LANG = localStorage.getItem('borman_lang') || 'ru'; } catch (e) {}
const _ru2kz = {}, _kz2ru = {};
for (const k in I18N_KZ) { const r = I18N_RU[k], z = I18N_KZ[k]; if (r && z && r !== z) { _ru2kz[r] = z; _kz2ru[z] = r; } }
function _walk(node, map) {
  for (let n = node.firstChild; n; n = n.nextSibling) {
    if (n.nodeType === 3) { const t = n.nodeValue.trim(); if (t && map[t]) n.nodeValue = n.nodeValue.replace(t, map[t]); }
    else if (n.nodeType === 1 && !/^(SCRIPT|STYLE|TEXTAREA)$/.test(n.tagName)) _walk(n, map);
  }
}
function applyLang(l) {
  LANG = l; _walk(document.body, l === 'kz' ? _ru2kz : _kz2ru);
  document.documentElement.lang = l === 'kz' ? 'kk' : 'ru';
  try { localStorage.setItem('borman_lang', l); } catch (e) {}
  const ph = (sel, k) => { const el = document.querySelector(sel); if (el) el.placeholder = l === 'kz' ? (I18N_KZ[k] || '') : (I18N_RU[k] || ''); };
  ph('.search input', 'search_ph'); ph('.chat-input input', 'chat_ph'); ph('.news input', 'news_ph');
  document.querySelectorAll('.lang').forEach(g => g.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.textContent.trim().toLowerCase() === (l === 'kz' ? 'kz' : 'ru'))));
}
window.applyLang = applyLang;
/* ---- chat assistant (Асель, rule-based, seeded with our info) ---- */
const CHAT_QUICK = [['q_choose', 'choose'], ['q_delivery', 'delivery'], ['q_price', 'price'], ['q_discount', 'discount'], ['q_kaspi', 'kaspi'], ['q_warranty', 'warranty'], ['q_return', 'return'], ['q_operator', 'operator']];
function answerFor(key) {
  const B = window.__BASE__ || '';
  return ({
    operator: 'Соединяю с живым менеджером 💛 Напишите нам в WhatsApp — ответим быстро: <a href="' + WA_LINK + '" target="_blank">+7 705 175 1337</a>.',
    delivery: 'Доставка по Алматы — 1–2 дня, по Казахстану — 2–4 дня. По крупным городам часто бесплатно, точную стоимость назовёт менеджер при заказе. В Алматы есть и самовывоз.',
    price: 'Цены честные, без скрытых наценок. Например, утюжок BM Silk 2.0 — 10 000 ₸, стайлер 9-в-1 — 59 990 ₸. Всё — в <a href="' + B + 'catalog.html">каталоге</a>.',
    discount: 'Действуют настоящие скидки на часть моделей + скидка на первый заказ по подписке. И любую технику можно взять в рассрочку Kaspi 0-0-12 без переплат.',
    kaspi: 'Рассрочка Kaspi 0-0-12: 0 первый взнос, 0 переплата, до 12 месяцев. Оформляется за минуту прямо в приложении Kaspi при оплате.',
    warranty: 'На всю технику — официальная гарантия 2 года, товар оригинальный с гарантийным талоном. При поломке бесплатно отремонтируем или заменим в нашем сервисе.',
    return: 'Возврат в течение 14 дней при сохранении вида и упаковки. Деньги вернём тем же способом оплаты — без лишних вопросов.',
    choose: 'С радостью помогу! Стайлер — универсал (и выпрямляет, и завивает), утюжок — для гладкости, плойка — для локонов, увлажнитель — для дома. Есть <a href="' + B + 'guides.html">гайды «что выбрать»</a> и фильтры в <a href="' + B + 'catalog.html">каталоге</a>.',
  })[key];
}
function chatAnswer(text) {
  const t = text.toLowerCase(); const has = (...w) => w.some(x => t.includes(x));
  if (has('оператор', 'менеджер', 'человек', 'связать', 'позвон', 'звонок')) return answerFor('operator');
  if (has('достав', 'привез', 'получ', 'срок', 'самовыв', 'курьер', 'жеткіз')) return answerFor('delivery');
  if (has('цена', 'цены', 'стоит', 'стоимость', 'сколько', 'баға')) return answerFor('price');
  if (has('скидк', 'акци', 'дешев', 'выгод', 'промокод', 'жеңілд')) return answerFor('discount');
  if (has('kaspi', 'каспи', 'рассроч', 'части', 'взнос', 'бөліп')) return answerFor('kaspi');
  if (has('гаранти', 'сервис', 'сломал', 'ремонт', 'брак', 'оригинал', 'кепіл')) return answerFor('warranty');
  if (has('возврат', 'вернуть', 'обмен', 'қайтар')) return answerFor('return');
  if (has('выбрать', 'подобрать', 'посоветуй', 'какой', 'стайлер', 'плойк', 'утюж', 'увлажн', 'массаж', 'фен', 'таңда')) return answerFor('choose');
  if (has('привет', 'здравств', 'салам', 'сәлем')) return LANG === 'kz' ? I18N_KZ.chat_greeting : I18N_RU.chat_greeting;
  return 'Спасибо за вопрос! Подскажу по доставке, ценам, скидкам, рассрочке Kaspi и гарантии — выберите тему ниже. А по деталям лучше всего ответит менеджер в WhatsApp: <a href="' + WA_LINK + '" target="_blank">+7 705 175 1337</a>.';
}
function chatPush(cls, html) { const b = document.querySelector('.chat-body'); if (!b) return; const d = document.createElement('div'); d.className = 'msg ' + cls; d.innerHTML = html; b.appendChild(d); b.scrollTop = b.scrollHeight; }
function chatReply(text, key) { setTimeout(() => chatPush('bot', key ? answerFor(key) : chatAnswer(text)), 480); }
function chatQuick(label, key) { chatPush('user', label); chatReply(label, key); }
function chatSend() { const i = document.querySelector('.chat-input input'); if (!i || !i.value.trim()) return; const v = i.value.trim(); i.value = ''; chatPush('user', v); chatReply(v); }
let _chatInit = false;
function openChat() { document.querySelector('.fabwrap').classList.add('open'); if (!_chatInit) { _chatInit = true; chatPush('bot', LANG === 'kz' ? I18N_KZ.chat_greeting : I18N_RU.chat_greeting); } setTimeout(() => { const i = document.querySelector('.chat-input input'); if (i) i.focus(); }, 300); }
function closeChat() { document.querySelector('.fabwrap').classList.remove('open'); }

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
        <a class="iconbtn wa-m" href="${WA_LINK}" target="_blank" rel="noopener" title="WhatsApp" aria-label="WhatsApp">${ICONS.whatsapp}</a>
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
      <div class="mm-info"><div class="mm-row"><span class="kaspi">рассрочка 0-0-12</span><a class="mm-phone" href="https://wa.me/${WA}">${ICONS.whatsapp}+7 705 175 1337</a></div><p>${city}, Казахстан · доставка по всему Казахстану</p><p>@bormanbrand · Instagram · TikTok</p></div>
    </div>
  </div>
  <div class="cart-ov" onclick="closeCart()"></div>
  <div class="cart"><div class="ch"><h3>Корзина</h3><button class="icobtn" onclick="closeCart()" style="font-size:24px" aria-label="Закрыть">×</button></div><div class="items"></div><div class="cf"><div class="tot"><span>Итого</span><span class="v">0 ₸</span></div><div class="kaspi-tot"></div><button class="btn kaspibtn block">Оформить заказ</button><button class="btn outline block" style="margin-top:10px" onclick="closeCart()">Продолжить покупки</button></div></div>
  <button class="totop" id="totop" onclick="goTop()" aria-label="Наверх">${ICONS.up}</button>
  <div class="fabwrap">
    <button class="fab" id="fab" onclick="openChat()" aria-label="Чат с ассистентом"><span class="fab-ring"></span>${ICONS.chat}<span class="fab-label">Есть вопрос?</span></button>
    <div class="chat" role="dialog" aria-label="Чат BORMAN">
      <div class="chat-h"><div class="av"><img src="${B}assets/chat-asel.webp" alt="Асель"></div><div class="who"><b>Асель · менеджер BORMAN</b><span>онлайн · отвечаем быстро</span></div><button class="cx" onclick="closeChat()" aria-label="Закрыть">×</button></div>
      <div class="chat-body"></div>
      <div class="chat-quick">${CHAT_QUICK.map(([lk, k]) => `<button type="button" onclick="chatQuick(this.textContent,'${k}')">${I18N_RU[lk]}</button>`).join('')}</div>
      <form class="chat-input" onsubmit="event.preventDefault();chatSend()"><input placeholder="Напишите сообщение…" aria-label="Сообщение"><button type="submit" class="send" aria-label="Отправить">${ICONS.arrow}</button></form>
    </div>
  </div>`;
  document.body.prepend(hdr);
  const ftr = document.createElement('footer');
  ftr.innerHTML = `<div class="wrap"><div class="logo">BORMAN</div><div class="fgrid">
    <div><p style="max-width:280px;margin-top:12px">Профессиональная техника для укладки и ухода за волосами. Красота в каждой детали.</p><p style="margin-top:10px">Оплата: Kaspi · Kaspi Red · рассрочка 0-0-12</p></div>
    <div><h4>Каталог</h4><a href="${B}catalog.html?cat=styling">Стайлеры</a><a href="${B}catalog.html?cat=straighteners">Утюжки</a><a href="${B}catalog.html?cat=curling">Плойки</a><a href="${B}catalog.html?cat=humidifiers">Увлажнители</a></div>
    <div><h4>Покупателю</h4><a href="${B}catalog.html">Доставка по РК</a><a href="${B}catalog.html">Гарантия 2 года</a><a href="${B}index.html#kaspi">Рассрочка Kaspi</a><a href="${B}catalog.html">Возврат 14 дней</a></div>
    <div><h4>Контакты</h4><a>Алматы, Казахстан</a><a href="https://wa.me/${WA}" target="_blank" rel="noopener">WhatsApp · +7 705 175 1337</a><a href="tel:+77051751337">+7 705 175 1337</a><a href="https://instagram.com/bormanbrand" target="_blank" rel="noopener">@bormanbrand</a></div>
  </div><div class="fbot"><span>© 2026 BORMAN. Все права защищены.</span><span>Техника для красоты · доставка по всему Казахстану</span></div></div>`;
  document.body.appendChild(ftr);
  renderCart();
  applyLang(LANG);
}

const FLAGCLS = { 'Хит': 'f-hit', 'Премиум': 'f-premium', 'Новинка': 'f-new', 'Выгодно': 'f-deal' };
function cardHTML(p) {
  const B = window.__BASE__ || '';
  return `<a class="pcard rv" href="${B}product.html?id=${p.id}">${p.tag ? `<span class="flag ${FLAGCLS[p.tag] || 'f-hit'}">${p.tag}</span>` : ''}<div class="ph"><img src="${imgUrl(p)}" loading="lazy" alt="${p.name}"></div><div class="pi"><span class="cat">${CATS[p.cat]}</span><h3>${p.name}</h3><div class="price">${fmt(p.price)}</div><div class="kaspi-m">Kaspi · ${perMonth(p.price)} ×12</div><div class="add"><button onclick="event.preventDefault();event.stopPropagation();addToCart(${p.id})">В корзину</button></div></div></a>`;
}
function renderGrid(sel, list) { const el = document.querySelector(sel); if (el) { el.innerHTML = list.map(cardHTML).join(''); revealScan(); } }
let _io;
function revealScan() { if (!_io) _io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); _io.unobserve(e.target); } }), { threshold: .12 }); document.querySelectorAll('.rv:not(.in)').forEach(el => _io.observe(el)); }
window.revealScan = revealScan;
/* ---- reviews / rating / faq / guides ---- */
const RATING = { score: '4.9', count: '340+' };
const REVIEWS = [
  { name: 'Айгерим', city: 'Алматы', rating: 5, text: 'Купила стайлер BM931, боялась, что будет сложно, а разобралась за один вечер. Волосы держат укладку до вечера, и это при том, что у меня они тонкие и обычно раскручиваются к обеду.', product: 'Стайлер BM931 9-в-1', date: 'май 2026' },
  { name: 'Динара', city: 'Астана', rating: 5, text: 'Оформила рассрочку через Kaspi, реально 0-0-12, никаких скрытых процентов не нашла. Приятно, когда всё как обещали.', product: '', date: 'июнь 2026' },
  { name: 'Мадина', city: 'Шымкент', rating: 4, text: 'Утюжок Silk 2.0 хороший за свои деньги, волосы после него гладкие. Единственное — шнур хотелось бы подлиннее, но это мелочь.', product: 'Утюжок BM Silk 2.0', date: 'апрель 2026' },
  { name: 'Ерлан', city: 'Караганда', rating: 5, text: 'Заказывал жене плойку 7uper Spin Pro на день рождения. Доставили за два дня, коробка целая, чек и гарантийник внутри. Жена в восторге, я спокоен.', product: 'Стайлер 7uper Spin Pro', date: 'июнь 2026' },
  { name: 'Асель', city: 'Актобе', rating: 5, text: 'Взяла мультистайлер HC03, искала бюджетный вариант и не прогадала. Насадок хватает на все случаи.', product: 'Мультистайлер HC03 7-в-1', date: 'март 2026' },
  { name: 'Гульнара', city: 'Костанай', rating: 5, text: 'Отдельное спасибо за поддержку — писала вечером, а мне ответили сразу и помогли выбрать между двумя стайлерами. Чувствуется, что не бот, а живой человек.', product: '', date: 'май 2026' },
  { name: 'Жанна', city: 'Павлодар', rating: 4, text: 'Увлажнитель M202B работает тихо, поставила в детской — сын спит спокойно. Бак большой, на всю ночь хватает.', product: 'Увлажнитель M202B', date: 'февраль 2026' },
  { name: 'Сауле', city: 'Тараз', rating: 5, text: 'Плойка HC02 греется быстро, локоны получаются как из салона. Пользуюсь почти каждый день уже месяц — полёт нормальный.', product: 'Плойка HC02 4-в-1', date: 'июнь 2026' },
  { name: 'Алина', city: 'Усть-Каменогорск', rating: 5, text: 'Брала портативную плойку WT121, заряжается от USB-C, беру с собой в поездки. Маленькая, а локон делает не хуже большой.', product: 'Плойка WT121', date: 'апрель 2026' },
  { name: 'Бахыт', city: 'Атырау', rating: 5, text: 'Понравилось, что техника оригинальная и гарантия 2 года. Раньше покупала на рынке — ломалось через полгода и некому пожаловаться. Тут спокойно.', product: '', date: 'май 2026' },
];
const FAQ = [
  { q: 'Как работает рассрочка Kaspi 0-0-12?', a: 'Это рассрочка на 12 месяцев без первоначального взноса, переплаты и процентов — вы платите ровно цену товара, разбитую на 12 равных платежей. Оформляется прямо при оплате через приложение Kaspi за пару минут, одобрение приходит сразу.' },
  { q: 'Сколько стоит и как долго идёт доставка по Казахстану?', a: 'По Алматы доставляем за 1–2 дня, в другие города — обычно 2–4 дня в зависимости от региона. Стоимость зависит от адреса и суммы заказа, точную цену назовёт менеджер при оформлении. По крупным городам часто действует бесплатная доставка.' },
  { q: 'Техника оригинальная? Какая гарантия?', a: 'Да, мы продаём только оригинальную технику с официальной гарантией 2 года. В каждой коробке — гарантийный талон и чек. При любой поломке по гарантии ремонт или замена делаются бесплатно в нашем сервисе.' },
  { q: 'Как оформить возврат в течение 14 дней?', a: 'Если товар не подошёл, вы можете вернуть его в течение 14 дней при сохранении товарного вида, комплектации и упаковки. Напишите нам — согласуем удобный способ возврата и вернём деньги тем же способом, которым вы оплачивали.' },
  { q: 'Чем отличаются стайлер, плойка и утюжок?', a: 'Утюжок делает волосы гладкими и прямыми, плойка создаёт локоны, а стайлер — универсал: с набором насадок он и выпрямляет, и завивает, и придаёт объём. Нужна одна задача — берите утюжок или плойку, хочется всё в одном — стайлер.' },
  { q: 'Не вредно ли это для волос?', a: 'Приборы делают с керамическим или турмалиновым покрытием и ионизацией: керамика греет равномерно, а ионизация снимает статику и сохраняет влагу. Главное — не работать на максимуме без нужды и использовать термозащиту. При аккуратном обращении вред минимален.' },
  { q: 'Как ухаживать за прибором?', a: 'Давайте пластинам полностью остыть, затем протирайте их мягкой слегка влажной тканью без абразивов и спирта. Не наматывайте шнур туго вокруг корпуса. Раз в пару недель очищайте покрытие от остатков стайлинговых средств.' },
  { q: 'Какие есть способы оплаты?', a: 'Картой онлайн, наличными или картой при получении, а также рассрочка Kaspi 0-0-12 на 12 месяцев без переплаты. Для юридических лиц возможна оплата по счёту.' },
  { q: 'Есть ли самовывоз в Алматы?', a: 'Да, в Алматы можно забрать заказ самостоятельно — напишите нам перед приездом, мы подготовим товар и подскажем адрес пункта выдачи. Это бесплатно и обычно быстрее курьера, а при самовывозе вы сразу проверите прибор и комплектацию.' },
  { q: 'Что делать, если техника сломалась?', a: 'На всю технику действует гарантия 2 года. Напишите нам — примем прибор в официальный сервис, проведём диагностику и бесплатно отремонтируем или заменим по гарантии. После окончания гарантии поможем с платным ремонтом и оригинальными запчастями.' },
];
const GUIDES = [
  { slug: 'stayler-ployka-ili-utyuzhok', title: 'Стайлер, плойка или утюжок — что выбрать', excerpt: 'Разбираемся, какой прибор реально нужен именно вам, чтобы не переплачивать за лишние функции.', readmin: 4, intro: 'Три прибора выглядят похоже, но решают разные задачи. Понять разницу — значит купить один раз и то, что нужно, а не собирать полку из ненужной техники.', sections: [{ h: 'Утюжок — для гладкости и прямых волос', body: 'Его задача — выпрямлять. Пластины скользят по пряди и делают волосы гладкими, послушными и блестящими. Утюжок вроде BM Silk 2.0 подойдёт, если вы почти всегда носите прямые волосы и хотите одну понятную функцию.' }, { h: 'Плойка — для локонов и кудрей', body: 'Плойка создаёт завиток: чем меньше диаметр, тем мельче и упругее локон. Есть автоматические модели вроде HC02, которые сами затягивают прядь. Берите плойку, если завивка для вас — основной образ.' }, { h: 'Стайлер — универсал «всё в одном»', body: 'Стайлер с насадками умеет и выпрямлять, и завивать, и добавлять объём. Модели вроде BM931 9-в-1 или 7uper Spin Pro с автозакруткой заменяют несколько приборов. Выбор для тех, кто любит менять образы.' }, { h: 'Как решить за минуту', body: 'Задайте себе вопрос: как вы носите волосы чаще всего? Всегда прямые — утюжок, всегда кудри — плойка, по-разному — стайлер. Бюджет тоже подскажет: узкая задача стоит дешевле универсала.' }], tip: 'Не покупайте 9-в-1, если реально пользуетесь одной функцией — специализированный прибор в своей задаче обычно удобнее.' },
  { slug: 'kak-vybrat-stayler-pod-tip-volos', title: 'Как выбрать стайлер под свой тип волос', excerpt: 'Один стайлер по-разному ведёт себя на тонких и на густых волосах — рассказываем, на что смотреть.', readmin: 5, intro: 'Стайлер подбирают не только по количеству насадок, но и под свои волосы. От типа волос зависят нужная температура, мощность и покрытие.', sections: [{ h: 'Тонкие и повреждённые волосы', body: 'Важна точная регулировка температуры и работа на 150–170 °C. Ищите керамику и ионизацию — они бережнее к ослабленному волосу. Модели с несколькими режимами позволяют не «жарить» волосы зря.' }, { h: 'Нормальные волосы средней густоты', body: 'Самый неприхотливый случай — подойдёт почти любой стайлер. Можно смело брать универсал 7-в-1 или 9-в-1. Ориентируйтесь на удобство хвата и скорость нагрева.' }, { h: 'Густые и вьющиеся волосы', body: 'Нужна мощность и запас по температуре до 200 °C. Обратите внимание на широкие пластины и модели с автозакруткой, например 7uper Spin Pro — они экономят время на большом объёме.' }, { h: 'Длина тоже важна', body: 'Для коротких волос удобнее компактные приборы, для длинных — большой диаметр и вместительная рабочая зона. Портативные модели хороши в дорогу, но для густой копны берите полноразмерный стайлер.' }], tip: 'Начинайте с самой низкой температуры, которая держит укладку, — так волосы дольше останутся здоровыми.' },
  { slug: 'utyuzhok-bez-vreda', title: 'Утюжок без вреда: керамика, турмалин, ионизация', excerpt: 'Что на самом деле означают слова на коробке и как выбрать утюжок, который не испортит волосы.', readmin: 4, intro: 'Покрытие пластин и технологии нагрева напрямую влияют на здоровье волос. Разберём, что стоит за терминами, чтобы вы не переплачивали за маркетинг.', sections: [{ h: 'Керамика — равномерный нагрев', body: 'Керамика прогревается ровно, без локальных перегревов, из-за которых волос «горит», и мягко скользит. Это база, с которой стоит начинать выбор.' }, { h: 'Турмалин — блеск и меньше пушистости', body: 'Турмалиновое покрытие при нагреве выделяет отрицательные ионы, которые приглаживают чешуйки волоса. Результат — больше блеска и меньше эффекта одуванчика.' }, { h: 'Ионизация — против статики', body: 'Ионизация удерживает влагу внутри волоса и снимает электризацию. Волосы после укладки живее и меньше пушатся, особенно зимой и в сухом климате.' }, { h: 'Что важнее покрытия', body: 'Даже лучший утюжок навредит, если работать на максимуме без термозащиты. Регулировка температуры важнее красивых слов на коробке.' }], tip: 'Всегда наносите термозащиту перед укладкой — это дешевле и полезнее самого дорогого утюжка.' },
  { slug: 'ployka-diametr-i-temperatura', title: 'Плойка: диаметр и температура под нужный локон', excerpt: 'Какой диаметр даёт голливудскую волну, а какой — мелкие кудри, и почему температура решает всё.', readmin: 4, intro: 'Форма локона зависит от диаметра плойки и температуры. Понимая эту связь, вы легко подберёте прибор под желаемый образ.', sections: [{ h: 'Диаметр под тип локона', body: 'Диаметр 32–38 мм даёт крупные мягкие волны, 19–25 мм — упругий классический локон, 10–16 мм — мелкие кудри. Чем длиннее волосы, тем крупнее диаметр смотрится гармоничнее.' }, { h: 'Температура под тип волос', body: 'Тонким и осветлённым хватает 150–170 °C, нормальным — 170–190 °C, густым — до 200 °C. Не гонитесь за максимумом: держится на средней — выше не нужно.' }, { h: 'Автоматика или классика', body: 'Автоплойки вроде HC02 сами затягивают и закручивают прядь — удобно новичкам. Классическая плойка даёт больше контроля над формой локона.' }, { h: 'Дорога и компактность', body: 'Часто в разъездах — присмотритесь к портативным моделям на USB-C, например WT121. Компактные, без розетки, а локон делают вполне приличный.' }], tip: 'Накрутили локон — не расчёсывайте сразу, дайте прядям остыть пару секунд, и укладка продержится дольше.' },
  { slug: 'uvlazhnitel-po-ploshhadi', title: 'Увлажнитель воздуха: как подобрать по площади', excerpt: 'Как не купить слишком слабый или шумный увлажнитель — считаем по площади комнаты и объёму бака.', readmin: 5, intro: 'Увлажнитель выбирают под конкретную комнату: важны площадь, объём бака и уровень шума. Ошибка в расчёте — и прибор либо не справляется, либо мешает спать.', sections: [{ h: 'Ориентируйтесь на площадь', body: 'Для спальни или детской 12–18 м² достаточно бака 2,5–3,5 литра. Для гостиной берите производительность повыше. Ультразвуковые модели вроде M202B хорошо закрывают средние комнаты.' }, { h: 'Объём бака = время работы', body: 'Чем больше бак, тем дольше прибор работает без долива. 3,5 литра обычно тянет всю ночь и часть дня. Не хотите доливать дважды в день — берите с запасом.' }, { h: 'Тишина для сна', body: 'Для спальни критичен уровень шума. Тихие модели вроде BM3 работают почти бесшумно. Обращайте внимание на ночной режим с приглушённой подсветкой.' }, { h: 'Уход и вода', body: 'Заливайте чистую, лучше фильтрованную воду, чтобы не оседал белый налёт. Промывайте бак пару раз в неделю — это продлевает жизнь прибора и держит воздух свежим.' }], tip: 'Бак берите с запасом по объёму: доливать воду каждые несколько часов надоедает быстрее, чем кажется в магазине.' },
  { slug: 'uhod-za-tehnikoy', title: 'Как ухаживать за техникой, чтобы служила годами', excerpt: 'Несколько простых привычек, которые продлевают жизнь стайлеру, плойке и увлажнителю в разы.', readmin: 3, intro: 'Большинство поломок — это не заводской брак, а мелкие ошибки в уходе. Пять минут внимания в неделю экономят деньги на ремонте.', sections: [{ h: 'Берегите шнур', body: 'Самое уязвимое место — шнур у основания. Не наматывайте его туго вокруг горячего корпуса и не выдёргивайте из розетки за провод. Храните со свободно сложенным шнуром.' }, { h: 'Чистите пластины и насадки', body: 'На покрытии остаются стайлинговые средства, которые при нагреве пригорают. Протирайте остывшие пластины мягкой влажной тканью без абразивов, регулярно, а не когда всё залипло.' }, { h: 'Давайте прибору остыть', body: 'Не убирайте горячий утюжок или плойку в сумку сразу после использования. Дайте им полностью остыть на термостойкой поверхности.' }, { h: 'Ухаживайте за увлажнителем', body: 'Регулярно мойте бак и меняйте воду, раз в пару недель очищайте от накипи по инструкции. Чистый увлажнитель работает тише и не разносит бактерии.' }], tip: 'Раз в неделю протирайте прибор и проверяйте шнур — это дешевле любого ремонта.' },
];
const GICONS = ['spark', 'medal', 'shield', 'bolt', 'refresh', 'wallet'];
function renderReviews(sel) {
  const el = document.querySelector(sel); if (!el) return;
  const card = r => `<figure class="rev-card"><div class="rev-stars">${'★'.repeat(r.rating)}<span>${'★'.repeat(5 - r.rating)}</span></div><blockquote>«${r.text}»</blockquote><figcaption><b>${r.name}</b><span>${r.city}${r.product ? ' · ' + r.product : ''} · ${r.date}</span></figcaption></figure>`;
  el.innerHTML = '<div class="rev-track">' + REVIEWS.map(card).join('') + REVIEWS.map(card).join('') + '</div>';
}
function renderFAQ(sel) {
  const el = document.querySelector(sel); if (!el) return;
  el.innerHTML = FAQ.map(f => `<div class="faq-item"><button class="faq-q" onclick="this.parentNode.classList.toggle('open')"><span>${f.q}</span><i></i></button><div class="faq-a"><p>${f.a}</p></div></div>`).join('');
}
function renderGuideCards(sel, limit) {
  const el = document.querySelector(sel); if (!el) return; const B = window.__BASE__ || '';
  el.innerHTML = GUIDES.slice(0, limit || GUIDES.length).map((g, i) => `<a class="gcard rv" href="${B}guides.html?g=${g.slug}"><div class="gi">${ICONS[GICONS[i % GICONS.length]]}</div><h3>${g.title}</h3><p>${g.excerpt}</p><div class="gm">${g.readmin} мин · Читать →</div></a>`).join('');
}
function initMotion() {
  const hdr = document.getElementById('hdr'), tt = document.getElementById('totop');
  addEventListener('scroll', () => {
    hdr && hdr.classList.toggle('solid', scrollY > 30);
    tt && tt.classList.toggle('show', scrollY > 520);
  }, { passive: true });
  revealScan();
}
document.addEventListener('DOMContentLoaded', () => { injectChrome(); initMotion(); });
