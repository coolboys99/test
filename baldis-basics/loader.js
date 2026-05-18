const root = document.getElementById('baldi-game');

if (!root) {
  console.warn('Baldi game container not found.');
} else {
  const message = document.createElement('div');
  message.className = 'baldi-game-message';
  message.innerHTML = `
    <p>Your Baldi's Basics game files should be loaded from <code>baldis-basics/</code>.</p>
    <p>If you already added the game assets, ensure the main game file is imported from this folder.</p>
  `;
  root.innerHTML = '';
  root.appendChild(message);
}
