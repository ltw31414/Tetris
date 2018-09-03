import { gameConfig, systemInfo } from '../Global'
export default class ElementDrawable{
  constructor(x = 0, y = 0){
    this.x = x;
    this.y = y;
  }

  draw(){

    var ctx = systemInfo.canvas.getContext('2d')
    var w = gameConfig.ELEMENT_WIDTH
    var h = gameConfig.ELEMENT_HEIGHT
    ctx.drawImage(ElementDrawable.image, 0, 0, ElementDrawable.image.width, ElementDrawable.image.height, this.x,this.y,w, h)
  }
}
ElementDrawable.image = wx.createImage()
ElementDrawable.image.src = 'image/Cube.png'