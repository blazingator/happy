import os from 'os'

import Image from '../models/Image'

const netIfs = os.networkInterfaces()
const localIp = netIfs.enp3s0[0].address

export default{
  render(image: Image){
    return {
      id: image.id,
      url: `http://${localIp}:3333/uploads/${image.url}`
    }
  },
  renderMany(images: Image[]){
    return images.map(img => this.render(img))
  }
}
