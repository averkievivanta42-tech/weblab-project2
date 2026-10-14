/* ========================================================
   БАЗА ДАНИХ У КОДІ (КОРИСТУВАЧІ, КАТАЛОГ 20 ПК, ЗАМОВЛЕННЯ)
   ======================================================== */

// 1. База даних користувачів
const USERS_DB = [
  { id: 1, nick: 'Averkiiev Ivan', email: 'ivan@gmail.com', phone: '+380676493966', pass: '123456' },
  { id: 2, nick: 'CyberAdmin', email: 'admin@cyberforge.ua', phone: '+380501112233', pass: 'admin2024' },
  { id: 3, nick: 'AlexGamer', email: 'alex@ukr.net', phone: '+380937778899', pass: 'qwerty' }
];

// Ініціалізація сховища бази
if (!localStorage.getItem('cyber_users')) {
  localStorage.setItem('cyber_users', JSON.stringify(USERS_DB));
}
if (!localStorage.getItem('cyber_orders')) {
  localStorage.setItem('cyber_orders', JSON.stringify([]));
}

// 2. База даних комп'ютерів (20 перевірених моделей з надійними фото)
const PRODUCTS_DB = [
  {
    id: 1,
    title: 'CyberForge Start Eco',
    category: 'budget',
    price: 18500,
    cpu: 'Intel Core i3-12100F',
    gpu: 'GTX 1650 4GB GDDR6',
    ram: '16GB DDR4 3200MHz',
    ssd: '500GB NVMe SSD',
    isHit: true,
    img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: 'CyberForge Strike R5',
    category: 'gaming',
    price: 28900,
    cpu: 'AMD Ryzen 5 5600',
    gpu: 'RTX 3060 12GB GDDR6',
    ram: '16GB DDR4 3600MHz',
    ssd: '1TB M.2 NVMe',
    isHit: true,
    img: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: 'CyberForge Prime 4060',
    category: 'gaming',
    price: 38400,
    cpu: 'Intel Core i5-13400F',
    gpu: 'GeForce RTX 4060 8GB',
    ram: '32GB DDR5 5600MHz',
    ssd: '1TB Kingston KC3000',
    isHit: true,
    img: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    title: 'CyberForge Master White',
    category: 'gaming',
    price: 54900,
    cpu: 'AMD Ryzen 7 7700X',
    gpu: 'GeForce RTX 4070 12GB',
    ram: '32GB DDR5 6000MHz',
    ssd: '1TB Samsung 980 Pro',
    isHit: true,
    img: 'https://images.unsplash.com/photo-1616588589596-65f37e1123c2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    title: 'CyberForge Phantom Pro',
    category: 'gaming',
    price: 76800,
    cpu: 'Intel Core i7-14700KF',
    gpu: 'GeForce RTX 4070 Ti Super',
    ram: '32GB DDR5 6400MHz',
    ssd: '2TB Kingston NVMe',
    isHit: true,
    img: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    title: 'CyberForge Titan Ultra',
    category: 'work',
    price: 139000,
    cpu: 'AMD Ryzen 9 7950X3D',
    gpu: 'GeForce RTX 4090 24GB Rog',
    ram: '64GB DDR5 6400MHz',
    ssd: '4TB NVMe SSD + СВО 360mm',
    isHit: true,
    img: 'https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 7,
    title: 'CyberForge Office Lite',
    category: 'budget',
    price: 13999,
    cpu: 'Intel Core i3-10105',
    gpu: 'Intel UHD Graphics 630',
    ram: '8GB DDR4 2666MHz',
    ssd: '256GB SSD 2.5',
    isHit: false,
    img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 8,
    title: 'CyberForge WorkStation Mini',
    category: 'budget',
    price: 21500,
    cpu: 'AMD Ryzen 5 4600G',
    gpu: 'Radeon Vega 7 Integrated',
    ram: '16GB DDR4 3200MHz',
    ssd: '512GB M.2 NVMe',
    isHit: false,
    img: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 9,
    title: 'CyberForge Shadow Play',
    category: 'gaming',
    price: 26700,
    cpu: 'Intel Core i5-11400F',
    gpu: 'GTX 1660 Super 6GB',
    ram: '16GB DDR4 HyperX',
    ssd: '500GB Kingston SSD',
    isHit: false,
    img: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 10,
    title: 'CyberForge CyberSport Edition',
    category: 'gaming',
    price: 33333,
    cpu: 'AMD Ryzen 5 5600X',
    gpu: 'Radeon RX 6650 XT 8GB',
    ram: '16GB DDR4 3600MHz',
    ssd: '1TB WD Blue SN570',
    isHit: false,
    img: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 11,
    title: 'CyberForge Storm 4060 Ti',
    category: 'gaming',
    price: 43500,
    cpu: 'Intel Core i5-12600KF',
    gpu: 'GeForce RTX 4060 Ti 8GB',
    ram: '32GB DDR4 3600MHz',
    ssd: '1TB Samsung 980',
    isHit: false,
    img: 'https://images.unsplash.com/photo-1616588589596-65f37e1123c2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 12,
    title: 'CyberForge Creator Studio',
    category: 'work',
    price: 48900,
    cpu: 'AMD Ryzen 7 5800X',
    gpu: 'GeForce RTX 3070 8GB',
    ram: '32GB DDR4 Corsair',
    ssd: '2TB NVMe SSD',
    isHit: false,
    img: 'https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 13,
    title: 'CyberForge White Dragon',
    category: 'gaming',
    price: 61000,
    cpu: 'Intel Core i5-14600KF',
    gpu: 'GeForce RTX 4070 12GB White',
    ram: '32GB DDR5 6000MHz',
    ssd: '1TB Kingston Fury Gen4',
    isHit: false,
    img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 14,
    title: 'CyberForge Red Demon',
    category: 'gaming',
    price: 68500,
    cpu: 'AMD Ryzen 7 7800X3D',
    gpu: 'Radeon RX 7900 XT 20GB',
    ram: '32GB DDR5 G.Skill',
    ssd: '2TB Gen4 SSD',
    isHit: false,
    img: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 15,
    title: 'CyberForge 3D Architect',
    category: 'work',
    price: 84000,
    cpu: 'Intel Core i7-14700K',
    gpu: 'GeForce RTX 4070 Ti Super 16GB',
    ram: '64GB DDR5 Kingston',
    ssd: '2TB Samsung 990 Pro',
    isHit: false,
    img: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 16,
    title: 'CyberForge Pure Water 4080',
    category: 'gaming',
    price: 99500,
    cpu: 'AMD Ryzen 9 7900X',
    gpu: 'GeForce RTX 4080 Super 16GB',
    ram: '32GB DDR5 6400MHz',
    ssd: '2TB Corsair MP600',
    isHit: false,
    img: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 17,
    title: 'CyberForge VideoProd 8K',
    category: 'work',
    price: 114000,
    cpu: 'Intel Core i9-14900K',
    gpu: 'GeForce RTX 4080 Super 16GB',
    ram: '64GB DDR5 Pro',
    ssd: '4TB NVMe SSD Raid',
    isHit: false,
    img: 'https://images.unsplash.com/photo-1616588589596-65f37e1123c2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 18,
    title: 'CyberForge Liquid Master',
    category: 'gaming',
    price: 129000,
    cpu: 'Intel Core i9-13900KS',
    gpu: 'GeForce RTX 4090 24GB Liquid',
    ram: '64GB DDR5 7000MHz',
    ssd: '4TB Samsung 990 Pro',
    isHit: false,
    img: 'https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 19,
    title: 'CyberForge Threadripper Studio',
    category: 'work',
    price: 154000,
    cpu: 'AMD Threadripper 7960X 24C',
    gpu: 'GeForce RTX 4090 24GB Studio',
    ram: '128GB DDR5 ECC',
    ssd: '8TB Enterprise SSD',
    isHit: false,
    img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 20,
    title: 'CyberForge GODLIKE Extreme',
    category: 'gaming',
    price: 172000,
    cpu: 'Ryzen 9 7950X3D Delid Custom',
    gpu: 'MSI RTX 4090 SUPRIM LIQUID X 24G',
    ram: '64GB DDR5 7200MHz CL32',
    ssd: '8TB PCIe 5.0 SSD + Кастомна вода',
    isHit: false,
    img: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=600&q=80'
  }
];

// ПЕРЕХОД НА СТРАНИЦУ ОФОРМЛЕНИЯ ПРИ НАЖАТИИ "КУПИТИ"
function buyProduct(id) {
  const product = PRODUCTS_DB.find(p => p.id === id);
  if (product) {
    localStorage.setItem('selected_pc_order', JSON.stringify(product));
    window.location.href = 'order.html';
  }
}

// УПРАВЛЕНИЕ АВТОРИЗАЦИЕЙ И БАЗОЙ
function checkAuthStatus() {
  const currentUser = JSON.parse(localStorage.getItem('cyber_current_user'));
  const userArea = document.getElementById('userArea');
  if (!userArea) return;

  if (currentUser) {
    userArea.innerHTML = `
      <span style="color: var(--accent); font-weight:600;">👤 ${currentUser.nick}</span>
      <button class="btn btn-secondary btn-sm" onclick="openUsersDbModal()">База Користувачів</button>
      <button class="btn btn-secondary btn-sm" onclick="logout()">Вийти</button>
    `;
  } else {
    userArea.innerHTML = `
      <button class="btn btn-sm" onclick="openAuthModal('login')">Вхід</button>
      <button class="btn btn-secondary btn-sm" onclick="openAuthModal('reg')">Реєстрація</button>
    `;
  }
}

function openAuthModal(mode) {
  const modal = document.getElementById('authModal');
  if (!modal) return;
  modal.classList.add('active');
  switchAuthTab(mode);
}

function closeAuthModal() {
  const modal = document.getElementById('authModal');
  if (modal) modal.classList.remove('active');
}

function switchAuthTab(mode) {
  const tabLogin = document.getElementById('tabLogin');
  const tabReg = document.getElementById('tabReg');
  const formLogin = document.getElementById('formLogin');
  const formReg = document.getElementById('formReg');

  if (mode === 'login') {
    tabLogin.classList.add('active');
    tabReg.classList.remove('active');
    formLogin.style.display = 'grid';
    formReg.style.display = 'none';
  } else {
    tabReg.classList.add('active');
    tabLogin.classList.remove('active');
    formReg.style.display = 'grid';
    formLogin.style.display = 'none';
  }
}

function handleRegister(e) {
  e.preventDefault();
  const nick = document.getElementById('regNick').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const phone = document.getElementById('regPhone').value.trim();
  const pass = document.getElementById('regPass').value.trim();

  let users = JSON.parse(localStorage.getItem('cyber_users')) || [];

  if (users.some(u => u.email === email)) {
    alert('Користувач з такою поштою вже є в базі!');
    return;
  }

  const newUser = { id: users.length + 1, nick, email, phone, pass };
  users.push(newUser);
  localStorage.setItem('cyber_users', JSON.stringify(users));
  localStorage.setItem('cyber_current_user', JSON.stringify(newUser));

  alert(`Вітаємо, ${nick}! Вас внесено до бази даних.`);
  closeAuthModal();
  checkAuthStatus();
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const pass = document.getElementById('loginPass').value.trim();

  let users = JSON.parse(localStorage.getItem('cyber_users')) || [];
  const user = users.find(u => u.email === email && u.pass === pass);

  if (user) {
    localStorage.setItem('cyber_current_user', JSON.stringify(user));
    closeAuthModal();
    checkAuthStatus();
  } else {
    alert('Невірні дані для входу!');
  }
}

function logout() {
  localStorage.removeItem('cyber_current_user');
  checkAuthStatus();
}

function openUsersDbModal() {
  const dbModal = document.getElementById('dbModal');
  const dbList = document.getElementById('dbUsersList');
  let users = JSON.parse(localStorage.getItem('cyber_users')) || [];

  dbList.innerHTML = users.map(u => `
    <tr>
      <td>${u.id}</td>
      <td>${u.nick}</td>
      <td>${u.email}</td>
      <td>${u.phone}</td>
      <td>••••••</td>
    </tr>
  `).join('');

  dbModal.classList.add('active');
}

function closeDbModal() {
  document.getElementById('dbModal').classList.remove('active');
}

document.addEventListener('DOMContentLoaded', checkAuthStatus);
