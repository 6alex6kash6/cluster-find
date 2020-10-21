import { Application } from 'pixi.js'
import { Graphics } from '@pixi/graphics'

export default class App extends Application {
  constructor() {
    super({
      width: 448,
      height: 448,
      background: '0x000000'
    });
    document.body.appendChild(this.view)
    this.init()
  }

  init() {
    this.loader.load(this.draw.bind(this))
  }

  draw() {
    const graphics = new Graphics();
    const rectangleColors = [ 0xFEEB77, 0x650A5A, 0xC34288, 0x3500FA ]
    this.stage.addChild(graphics);
    console.log('drawedjgjg')
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
        let fillColor = this.getRandomArbitraryFloor(0, 4)
        let x = 64 * j;
        let y = 64 * i;
        graphics.lineStyle(2, 0x650A5A, 1);
        graphics.beginFill(rectangleColors[fillColor])
        graphics.drawRect(x, y, 64, 64);
        graphics.endFill();
        this.stage.addChild(graphics);
      }
    }
  }

  getRandomArbitraryFloor(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
