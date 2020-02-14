import uuidv4 from 'uuid/v4'
import { CAPTURE_OPTIONS } from '../constants'


export function ScreenCapture ({uuid=null, imageURI=null}) {
  this.uuid = uuid || uuidv4()
  this.imageURI = imageURI
}


ScreenCapture.prototype = {
  toJson: function () {
    return {
      uuid: this.uuid,
      imageURI: this.imageURI
    }
  }
}


export function Settings({email=null, fullname=null, apiToken=null}) {
  this.email = email
  this.fullname = fullname
  this.apiToken = apiToken
}

Settings.prototype = {
  toJson: function () {
    return {
      email: this.email,
      fullname: this.fullname,
      apiToken: this.apiToken
    }
  }
}
