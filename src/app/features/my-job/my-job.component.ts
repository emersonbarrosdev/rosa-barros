import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

export interface ChefTip {
  id: string;
  number: string;
  title: string;
  text: string;
  icon: string;
}

@Component({
  selector: 'app-my-job',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './my-job.component.html',
  styleUrl: './my-job.component.scss'
})
export class MyJobComponent {
  showTips: boolean = false;

  readonly tips: ChefTip[] = [
    {
      id: 'mise-en-place',
      number: '01',
      title: 'Mise en place',
      text: 'Organize e prepare todos os ingredientes antes de iniciar o cozimento. Além de agilizar o preparo, isso reduz erros e permite maior controle de cada etapa da receita.',
      icon: 'inventory_2'
    },
    {
      id: 'temperatura-importa',
      number: '02',
      title: 'Temperatura importa',
      text: 'Carnes, massas, molhos e outros preparos respondem de maneira diferente à temperatura. Respeitar o tempo e o ponto correto é tão importante quanto utilizar bons ingredientes.',
      icon: 'local_fire_department'
    },
    {
      id: 'finalizacao',
      number: '03',
      title: 'Finalização',
      text: 'Cor, textura e disposição fazem parte da experiência gastronômica. Pequenos cuidados na montagem e na apresentação podem transformar completamente a percepção de um prato.',
      icon: 'auto_awesome'
    }
  ];

  toggleTips(): void {
    this.showTips = !this.showTips;
    if (this.showTips) {
      setTimeout(() => {
        const panel = document.getElementById('chef-tips-panel');
        if (panel) {
          panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 100);
    }
  }
}
