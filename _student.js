const { exec } = require('child_process');

exec('git add . && git commit -m "Initial commit" && git push origin main', (err, stdout, stderr) => {
    if (err) {
        console.error(`Error: ${stderr}`);
        return;
    }
    console.log(stdout);
});
