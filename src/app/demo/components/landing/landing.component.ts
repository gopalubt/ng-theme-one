import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html'
})
export class LandingComponent {

    constructor(public layoutService: LayoutService, public router: Router) { }
    
    onClickLogin(){
        this.gotoUrl("/auth/login")
    }
    onClickRegister(){
        this.gotoUrl("/auth/register")
    }
    gotoUrl(url: string, params?: any){
        this.router.navigate([url], {queryParams: params})
    }
}
