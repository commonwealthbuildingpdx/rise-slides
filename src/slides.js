export default class Slides {
  constructor(shadowRoot, url, width, height) {
    this.shadowRoot = shadowRoot;
    this.url = url;
    this.width = width + 'px';
    this.height = height + 'px';
  }

  play() {
    this._loadFrame();
  }

  stop() {
    // do nothing for now
  }

  _loadFrame() {
    var frame = this._getFrameElement();

    this.shadowRoot.querySelector('.slides-component-template').appendChild(frame);
  }

  _getFrameElement() {
    var frame = document.createElement('iframe');

    frame.className = 'webpage-frame';
    frame.style.visibility = 'hidden';
    frame.setAttribute('frameborder', '0');
    frame.setAttribute('allowTransparency', 'true');
    frame.setAttribute('allowfullscreen', 'true');
    frame.setAttribute('mozallowfullscreen', 'true');
    frame.setAttribute('webkitallowfullscreen', 'true');

    frame.setAttribute('width', this.width);
    frame.setAttribute('height', this.height);
    frame.setAttribute('sandbox', 'allow-forms allow-same-origin allow-scripts');

    frame.onload = function () {
      this.onload = null;
      this.style.visibility = 'visible';
    }

    frame.setAttribute('src', this.url);

    return frame;
  }
}
