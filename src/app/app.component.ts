import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'legalizacao-processos';

  loader = true;
  ngOnInit() {
    setTimeout(() => {
      this.loader = false;
    }, 2000);
  }
}
