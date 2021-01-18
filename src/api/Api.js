import axios from 'axios';
import { REQUEST_METHODS } from '@/const/requestMethods';

export default class Api {
  constructor(host) {
    this.host = host;
  }

  GetData() {
    return this.Request(REQUEST_METHODS.GET);
  }

  PostData() {
    return this.Request(REQUEST_METHODS.POST);
  }

  ChangeHost(newHost) {
    this.host = newHost;
  }

  Request(methodType) {
    return new Promise((resolve) => {
      if (methodType === REQUEST_METHODS.GET) {
        axios.get(this.host)
          .then((response) => resolve(response.data))
          .catch((error) => resolve({ data: false, error }));
      }
      if (methodType === REQUEST_METHODS.POST) {
        axios.post(this.host)
          .then((response) => {
            resolve(response.data);
          })
          .catch((error) => resolve({ data: false, error }));
      }
    });
  }
}
