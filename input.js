const { exec } = require('child_process');
const fs = require('fs');

// ❌ Entrada del usuario sin validar
const input = process.argv[2];

// 🔥 1. Command Injection
exec(`rm -rf ${input}`, (err, stdout, stderr) => {
  if (err) {
    console.error("Error:", err);
    return;
  }
  console.log("Deleted:", stdout);
});

// 🔥 2. Operación bloqueante (sincrónica)
const config = fs.readFileSync('./config.json');  // ❌ Debe ser async
console.log("Config loaded:", config);

// 🔥 3. Uso de eval
eval("console.log('Esto es muy inseguro')");  // ❌ Nunca usar eval

// 🔥 4. Código duplicado innecesario
console.log("Start");
console.log("Start");  // ❌ Repetido

// 🔥 5. Logging en producción
console.log("Este mensaje debería eliminarse en producción");

// 🔥 6. Variable no usada
const secret = "123456789";  // ❌ Declarada pero no usada
