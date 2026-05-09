import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Dog } from '../../services/dog';
import { Router } from '@angular/router';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{
  dogsList:any;

  constructor(private dogService: Dog,
    private router: Router,
    private cdr: ChangeDetectorRef
  ){}
  async ngOnInit(): Promise<void>{
    try{
      this.dogsList = await this.dogService.getDogs();

      this.cdr.detectChanges();
    }
    catch(e){
      console.error(e);
    }
  }

  goToLogin(): void {

    const token = localStorage.getItem('token');

    if (!token) {
      this.router.navigate(['/login']);
    }
  }
}
