var electronInstaller = require('electron-winstaller');

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: './build/release-builds/desktopApp-win32-ia32',
    outputDirectory: './build/installer/x32',
    authors: 'Softvision Company',
    exe: 'setup.exe',
    setupIcon: './build/icon.ico',
	//If splash image is available
	//loadingGif: './build/splash.gif'
  });

resultPromise.then(() => console.log("Installer successfully built"), (e) => console.log(`Error: ${e.message}`));