// Solution for issue #1217
// Generated automatically by Baobot

const { execFile } = require('child_process');
const path = require('path');

async function addNushellCompleter() {
    const carapaceInstallPath = path.resolve(__dirname, '../../');
    const installScriptPath = path.join(carapaceInstallPath, 'scripts/install-nushell-completer.sh');

    try {
        await execFile('bash', [installScriptPath]);
        console.log('Nushell completer added successfully.');
    } catch (error) {
        console.error('Error adding Nushell completer:', error);
    }
}

addNushellCompleter();


This script assumes there is a shell script `install-nushell-completer.sh` located in the `carapace` directory that can be run via `bash`. The script will execute this script and handle any errors that might occur during the process. Adjust the path to `install-nushell-completer.sh` if the actual path differs.