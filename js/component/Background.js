import { gameConfig, systemInfo } from '../Global'

export default class Background {
  constructor(){
    this.image = wx.createImage()
    this.image.src = 'image/Background.jpg'
  }
  draw(){
    var ctx = systemInfo.canvas.getContext('2d')
    var canvas = systemInfo.canvas
    ctx.drawImage(this.image, 0, 0, this.image.width, this.image.height, 0, 0, canvas.width, canvas.height)
  }
}