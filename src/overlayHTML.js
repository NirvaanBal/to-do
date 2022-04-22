const overlay = document.createElement('div');
overlay.setAttribute('id', 'overlay');
overlay.style.cssText =
  'position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.6); z-index: 100; display: none;';

export default overlay;
