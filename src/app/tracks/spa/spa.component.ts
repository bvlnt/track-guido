import { Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

@Component({
  selector: 'app-spa',
  templateUrl: './spa.component.html',
  styleUrls: ['./spa.component.scss'],
})
export class SpaComponent {
  constructor() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);
  }

  ngOnInit() {
    gsap.to('#rect', {
      duration: 10,
      repeat: -1,
      ease: 'none',
      motionPath: {
        path: '#path',
        align: '#path',
        alignOrigin: [0.5, 0.5],
        start: 1,
        end: 0,
      },
    });
  }
}
