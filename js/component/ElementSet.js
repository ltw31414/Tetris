import { gameConfig, systemInfo } from '../Global'
import ElementDrawable from './ElementDrawable'

export default class ElementSet {
  constructor(x = 0 , y = 0 , centerX = 0 , centerY = 0, elementList = null){
    this.x = x
    this.y = y
    this.centerX = centerX
    this.centerY = centerY
    this.elementList = elementList
  }
  rotation(radian){
    if (this.elementList && this.elementList.length > 0) {
      for (var i = 0; i < this.elementList.length; i++){
        let newX = Math.cos(radian) * (this.elementList[i].y - 1) - Math.sin(radian) * (this.elementList[i].x - 1) + 1
        let newY = Math.sin(radian) * (this.elementList[i].y - 1) + Math.cos(radian) * (this.elementList[i].x - 1) + 1
        this.elementList[i].y = newX
        this.elementList[i].x = newY
      }
    }
  }
  draw(){
    if (this.elementList && this.elementList.length > 0){
      var elementDrawable = new ElementDrawable()
      var x = gameConfig.PADDING_LEFT + this.y * gameConfig.ELEMENT_WIDTH
      var y = gameConfig.PADDING_TOP + this.x * gameConfig.ELEMENT_HEIGHT

      for (var i = 0; i < this.elementList.length;i++){
        elementDrawable.x = x + this.elementList[i].y * gameConfig.ELEMENT_WIDTH
        elementDrawable.y = y + this.elementList[i].x * gameConfig.ELEMENT_HEIGHT
        elementDrawable.draw()
      }
    }
  }
}