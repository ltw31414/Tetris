import { gameConfig, systemInfo } from './Global'
import Background from './component/Background'
import ElementSet from './component/ElementSet'
import Element from './component/Element'
import ElementDrawable from './component/ElementDrawable'

export default class Main {
  constructor() {
    this.aniId = 0
    this.bindLoop = this.loop.bind(this)
    this.background = new Background()
    this.elementSet = new ElementSet(0, 0, 1, 1, [new Element(0, 1), new Element(1, 0), new Element(1, 1), new Element(1, 2)])
    this.frames = 0
  }

  run(){
    this.aniId = requestAnimationFrame(this.bindLoop)
  }

  render(){
    this.background.draw()
    if (this.frames % 30 == 0){
      this.elementSet.x ++
      if (this.elementSet.x >= gameConfig.ROWS){
        this.elementSet.x = 0
        this.elementSet.y++
        if (this.elementSet.y >= gameConfig.COLUMNS){
          this.elementSet.y = 0
        }
      }
    }
    this.elementSet.draw()
  }

  loop() {
    this.frames++
    this.render()
    this.aniId = requestAnimationFrame(this.bindLoop)
  }
}