import { say } from './util'

class VRender {
  constructor() {
    console.log('hello world')
  }
}

new VRender()

export default VRender

window['VRender'] = VRender