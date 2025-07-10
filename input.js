const { exec } = require('child_process');

// No se valida 'name'
const name = process.argv[2];

// Código peligroso (Command Injection)
exec(`rm -rf ${name}`, (err, stdout, stderr) => {
  if (err) {
    console.error("Error:", err);
    return;
  }
  console.log("Deleted:", stdout);
});
