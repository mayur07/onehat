import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable()
export class AuthenticationService {

    constructor(private http: HttpClient) {
    }

    login(email: string, password: string) {
        debugger;
        // this.http.get('/api/cats').subscribe((data) => {
        //     console.log('cat......',data);
        // });

        // this.http.post('api/register', { email: email, password: password }).map((response: Response) => {
        //     let user = response.json();
        //     if (user) {
        //         localStorage.setItem('currentUser', JSON.stringify(user));
        //     }
        // });
        return this.http.post('api/login', { email: email, password: password }).map((response: Response) => {
            let user = response;
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
