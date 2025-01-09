// إنشاء زر الهمبرجر وإضافته
const hamburger = document.createElement('button');
hamburger.classList.add('hamburger');
hamburger.innerHTML = `
  <span></span>
  <span></span>
  <span></span>
`;
document.body.appendChild(hamburger);

// إنشاء القائمة الجانبية
const sidebar = document.createElement('div');
sidebar.classList.add('sidebar');
sidebar.innerHTML = `
  <ul class="none">
    <li class="nav-item"><a class="nav-link-1 " href="index.html"><span class="fw-bold">00</span> HOME</a></li>
    <li class="nav-item"><a class="nav-link-1 " href="destination-moon.html"><span class="fw-bold">01</span> DESTINATION</a></li>
    <li class="nav-item"><a class="nav-link-1 " href="crew-commander.html"><span class="fw-bold">02</span> CREW</a></li>
    <li class="nav-item"><a class="nav-link-1 " href="technology-vehicle.html"><span class="fw-bold">03</span> TECHNOLOGY</a></li>
  </ul>
`;
document.body.appendChild(sidebar);

// إضافة التفاعل مع الهمبرجر
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  sidebar.classList.toggle('open');
});
