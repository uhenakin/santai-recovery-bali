const { execSync } = require('child_process');

let localIP = 'localhost';
try {
  localIP = execSync("ip addr show | grep 'inet ' | grep -v '127.0.0.1' | grep -v '192.168.122' | awk '{print $2}' | cut -d'/' -f1 | head -1").toString().trim();
} catch(e) {}

module.exports = {
  allowedDevOrigins: [localIP, '192.168.1.106'],
};
