var ipc=require("electron").ipcRenderer,setElectronBadge=function(e){ipc&&"function"==typeof ipc.send&&ipc.send("badge",e)};global.setElectronBadge=setElectronBadge,window.is_electron=1;