import { Application } from 'pixi.js'
import { Graphics } from '@pixi/graphics'

export default class App extends Application {
  constructor() {
    super({
      width: 448,
      height: 448,
      backgroundColor: 0x1099bb
    });
    const graphics = new Graphics();
    graphics.beginFill(0xDE3249)
    graphics.drawRect(50, 50, 100, 100);
    graphics.endFill();
    document.body.appendChild(this.view)
  }
}
