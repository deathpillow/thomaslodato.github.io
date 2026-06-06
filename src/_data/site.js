const { execSync } = require('child_process');

module.exports = function() {
  try {
    const raw = execSync('git log -1 --format=%cI').toString().trim();
    const date = new Date(raw);
    const lastUpdated = date.toLocaleDateString('en-GB', {
      year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC'
    });
    return { lastUpdated };
  } catch(e) {
    return { lastUpdated: '—' };
  }
};
