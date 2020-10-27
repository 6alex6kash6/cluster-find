import { Application } from 'pixi.js'
import { Graphics } from '@pixi/graphics'
import { Text } from '@pixi/text'

export default class App extends Application {
  constructor() {
    super({
      width: 640,
      height: 448,
      background: '0x000000'
    });
    this.colorsMatrix = [];
    this.clustersMatrix = []
    document.body.appendChild(this.view)
    this.init()
  }

  init() {
    this.loader.load(this.draw.bind(this))
    this.loader.load(this.findCluster.bind(this))
    console.log(this.clustersMatrix)
  }

  draw() {
    const graphics = new Graphics();
    const rectangleColors = [ 0xFEEB77, 0x650A5A, 0xC34288, 0x3500FA, 0xDE3249 ]
    this.stage.addChild(graphics);
    for (let i = 0; i < 7; i++) {
      this.colorsMatrix[i] = []
      for (let j = 0; j < 10; j++) {
        let fillColor = this.getRandomArbitraryFloor(0, 5)
        let x = 64 * j;
        let y = 64 * i;
        graphics.lineStyle(2, 0x35CC5A, 1);
        graphics.beginFill(rectangleColors[fillColor])
        graphics.drawRect(x, y, 64, 64);
        graphics.endFill();
        this.colorsMatrix[i][j] = rectangleColors[fillColor]
      }
    }
    // graphics.destroy()
  }

  findCluster() {
    const item = this.colorsMatrix
    for (let i = 0; i < item.length; i++) {
      for (let j = 0; j < item[i].length; j++) {
        if (item[i + 1] !== undefined && item[i][j] === item[i + 1][j]) {
          this.clustersMatrix.push(1)
          this.drawText(j, i)
          this.drawText(j, i + 1)
        } else this.clustersMatrix.push(0)
        if (item[i][j] === item[i][j + 1]) {
          this.clustersMatrix.push(1)
          this.drawText(j, i);
          this.drawText(j + 1, i)
        } else this.clustersMatrix.push(0)
      }
    }
  }

  getRandomArbitraryFloor(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  drawText(x, y) {
    const text = new Text('!', { fontFamily: 'Arial', fontSize: 24, fill: 0x000000, align: 'center' })
    text.x = 64 * x;
    text.y = 64 * y;
    this.stage.addChild(text);
  }
}
