const toggleBtn = document.getElementById('toggleBtn');
const title = document.getElementById('title');
const list = document.getElementById('list');
const errorEl = document.getElementById('error');

let isShown = false;

toggleBtn.addEventListener('click', async () => {
  if (!isShown) {
    // SHOW prospects
    errorEl.textContent = '';
    toggleBtn.disabled = true;
    toggleBtn.textContent = 'Loading...';

    try {
      const res = await fetch('http://localhost:5000/api/prospects');

      if (!res.ok) throw new Error('Server error');

      const prospects = await res.json();

      list.innerHTML = '';

      prospects.forEach(p => {
        const li = document.createElement('li');
        li.textContent = `${p.firstName} ${p.lastName} | ${p.email} | ${p.phone} | ${p.address}`;
        list.appendChild(li);
      });

      title.hidden = false;
      toggleBtn.textContent = 'Hide prospects';
      isShown = true;
    } catch (err) {
      errorEl.textContent = 'Could not load prospects. Please try again later.';
      toggleBtn.textContent = 'Show prospects';
    } finally {
      toggleBtn.disabled = false;
    }

  } else {
    // HIDE prospects
    list.innerHTML = '';
    title.hidden = true;
    errorEl.textContent = '';
    toggleBtn.textContent = 'Show prospects';
    isShown = false;
  }
});
