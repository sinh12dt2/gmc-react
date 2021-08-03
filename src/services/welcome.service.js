import http from 'src/http-common';

class WelcomeService {
  constructor() {
    this.http = http;
  }

  getMembers() {
    return this.http.get('/members');
  }
}

export default new WelcomeService();
