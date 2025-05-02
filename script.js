// Button Click
document.getElementById('clickBtn').addEventListener('click', () => {
    alert('Button clicked!');
  });
  
  // Hover Effect
  const hoverBox = document.getElementById('hoverBox');
  hoverBox.addEventListener('mouseover', () => {
    hoverBox.style.backgroundColor = 'lightgreen';
  });
  hoverBox.addEventListener('mouseout', () => {
    hoverBox.style.backgroundColor = 'lightblue';
  });
  
  // Keypress Detection
  document.getElementById('keyInput').addEventListener('keypress', (e) => {
    console.log(`Key pressed: ${e.key}`);
  });
  
  // Secret Action (Double-click)
  const secretBtn = document.getElementById('secretBtn');
  secretBtn.addEventListener('dblclick', () => {
    alert('Secret double-click unlocked! 🎉');
  });
  
  // Long Press (Bonus)
  let pressTimer;
  secretBtn.addEventListener('mousedown', () => {
    pressTimer = setTimeout(() => {
      alert('Long press activated! 🔥');
    }, 1000);
  });
  secretBtn.addEventListener('mouseup', () => clearTimeout(pressTimer));
  
  // Change Color Button
  document.getElementById('colorBtn').addEventListener('click', function () {
    this.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    this.textContent = "Color Changed!";
  });
  
  // Tabs
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      contents.forEach(c => c.classList.remove('active'));
      document.getElementById(`tab-${tab.dataset.tab}`).classList.add('active');
    });
  });
  
  // Form Validation
  const form = document.getElementById('sampleForm');
  const password = document.getElementById('password');
  const feedback = document.getElementById('passwordFeedback');
  
  password.addEventListener('input', () => {
    if (password.value.length < 8) {
      feedback.textContent = "Password must be at least 8 characters.";
    } else {
      feedback.textContent = "✔️ Password strength: OK";
      feedback.style.color = 'green';
    }
  });
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      alert('Please fill out all required fields correctly.');
    } else {
      alert('Form submitted successfully!');
    }
  });
  