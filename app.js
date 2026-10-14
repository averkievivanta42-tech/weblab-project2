// --- ИНИЦИАЛИЗАЦИЯ БАЗЫ ДАННЫХ В LOCALSTORAGE ---
if (!localStorage.getItem('cyberforge_users')) {
  // Начальные тестовые данные в базе
  const initialUsers = [
    { nick: 'Averkiiev', email: 'ivan@gmail.com', phone: '+380676493966', pass: '123456' },
    { nick: 'CyberAdmin', email: 'admin@forge.ua', phone: '+380501112233', pass: 'admin2024' }
  ];
  localStorage.setItem('cyberforge_users', JSON.stringify(initialUsers));
}

// Проверка сессии (кто залогинен)
function checkAuthStatus() {
  const currentUser = JSON.parse(localStorage.getItem('cyberforge_current_user'));
  const userArea = document.getElementById('userArea');
  if (!userArea) return;

  if (currentUser) {
    userArea.innerHTML = `
      <span style="color: var(--accent); font-weight:600;">👤 ${currentUser.nick}</span>
      <button class="btn btn-secondary btn-sm" onclick="openUsersDbModal()">База БД</button>
      <button class="btn btn-secondary btn-sm" onclick="logout()">Вийти</button>
    `;
  } else {
    userArea.innerHTML = `
      <button class="btn btn-sm" onclick="openAuthModal('login')">Вхід</button>
      <button class="btn btn-secondary btn-sm" onclick="openAuthModal('reg')">Реєстрація</button>
    `;
  }
}

// Открытие модального окна входа/регистрации
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

// Обработка регистрации (запись в базу)
function handleRegister(e) {
  e.preventDefault();
  const nick = document.getElementById('regNick').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const phone = document.getElementById('regPhone').value.trim();
  const pass = document.getElementById('regPass').value.trim();

  let users = JSON.parse(localStorage.getItem('cyberforge_users')) || [];

  if (users.some(u => u.email === email)) {
    alert('Користувач з такою поштою вже зареєстрований!');
    return;
  }

  const newUser = { nick, email, phone, pass };
  users.push(newUser);
  localStorage.setItem('cyberforge_users', JSON.stringify(users));
  localStorage.setItem('cyberforge_current_user', JSON.stringify(newUser));

  alert(`Вітаємо, ${nick}! Ви успішно зареєструвалися в базі.`);
  closeAuthModal();
  checkAuthStatus();
}

// Обработка входа
function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const pass = document.getElementById('loginPass').value.trim();

  let users = JSON.parse(localStorage.getItem('cyberforge_users')) || [];
  const user = users.find(u => u.email === email && u.pass === pass);

  if (user) {
    localStorage.setItem('cyberforge_current_user', JSON.stringify(user));
    closeAuthModal();
    checkAuthStatus();
  } else {
    alert('Невірний Email або Пароль!');
  }
}

function logout() {
  localStorage.removeItem('cyberforge_current_user');
  checkAuthStatus();
}

// Просмотр таблицы базы данных (для преподавателя)
function openUsersDbModal() {
  const dbModal = document.getElementById('dbModal');
  const dbList = document.getElementById('dbUsersList');
  let users = JSON.parse(localStorage.getItem('cyberforge_users')) || [];

  dbList.innerHTML = users.map((u, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>${u.nick}</td>
      <td>${u.email}</td>
      <td>${u.phone}</td>
      <td>•••${u.pass.slice(-2)}</td>
    </tr>
  `).join('');

  dbModal.classList.add('active');
}

function closeDbModal() {
  document.getElementById('dbModal').classList.remove('active');
}

document.addEventListener('DOMContentLoaded', checkAuthStatus);