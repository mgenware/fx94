import { rendererFuncs } from '../common/ipcNames';

export default function handleDrop(element: HTMLElement) {
  // eslint-disable-next-line no-param-reassign
  element.ondrop = async (ev) => {
    // Prevent default behavior (Prevent file from being opened).
    ev.preventDefault();
    if (!ev.dataTransfer) {
      return;
    }

    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s).
      for (let i = 0; i < ev.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them.
        if (ev.dataTransfer.items[i].kind === 'file') {
          const file = ev.dataTransfer.items[i].getAsFile()?.path;
          if (file) {
            // eslint-disable-next-line no-await-in-loop
            await window.ipcRenderer.callMain(rendererFuncs.fileDrop, file);
            return;
          }
        }
      }
    }
  };

  // eslint-disable-next-line no-param-reassign
  element.ondragover = (ev) => {
    // Prevent default behavior (Prevent file from being opened).
    ev.preventDefault();
  };
}
