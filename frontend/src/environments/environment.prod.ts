
import { HttpHeaders } from '@angular/common/http';

export const environment = {
  production: false,
  apiUrl: 'https://er-citytourister.appspot.com',
  token: {
    headers: new HttpHeaders({
      'auth': localStorage.getItem('TOKEN'),
    })
  }
};
