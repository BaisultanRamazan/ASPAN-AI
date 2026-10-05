import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface EventItem {
  title: string;
  img: string;
}

interface AdvantageItem {
  title: string;
  img: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html', // или './app.component.html'
  styleUrls: ['./app.css']   // или ['./app.component.css']
})
export class App {
  // Карточки для крутящейся ленты
  events: EventItem[] = [
    { title: 'Университеттік іс-шаралар', img: '/graduation.png' },
    { title: 'Ауқымды концерттер', img: '/concert.png' },
    { title: 'Ресми конференциялар', img: '/conference.png' },
    { title: 'Спорттық ойындар', img: '/sports.png' }
  ];

  // Карточки преимуществ
  advantages: AdvantageItem[] = [
    { title: '#1 Күзет агенттігі', img: '/guard.png' },
    { title: 'ИИ және Автоматизация', img: '/cyber.png' },
    { title: 'Сенімді серіктестік', img: '/handshake.png' }
  ];

  mapUrl: SafeResourceUrl;
  youtubeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    // Карта Google Maps
    const rawMap = 'https://www.google.com/maps?q=43.2551,76.9126&hl=kk&z=15&output=embed';
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(rawMap);

    // Ваше видео Roboflow Visual Intelligence Summit
    const rawVideo = 'https://www.youtube.com/embed/RvbQmfdr6lI?rel=0';
    this.youtubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(rawVideo);
  }

  onOrder(): void {
    window.open('https://t.me/aiaspan_bot', '_blank');
  }
}