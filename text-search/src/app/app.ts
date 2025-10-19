import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlighterPipe } from './highlighter-pipe';


type Article ={
  title:string;
  summary:string;
  date:string
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule,HighlighterPipe],
  templateUrl: './app.html',
 styleUrls: ['./app.css'] 
})


export class App {
searchText="";



 articles: Article[] = [
  {
    title: 'Understanding the difference between grid-template and grid-auto',
    summary:'With new CSS Grid properties it is easy to confuse grid-template-* with grid-auto-rows/columns. This guide explains when each applies and why.',
    date: 'Oct 09, 2018'
  },
  {
    title: 'Recreating the GitHub Contribution Graph with CSS Grid Layout',
    summary:'Walk through building a contribution heatmap using semantic HTML and pure CSS Grid—no absolute positioning, just grid areas.',
    date: 'Mar 14, 2019'
  },
  {
    title: 'Flexbox vs Grid: choosing the right layout tool',
    summary:'Flexbox is one-dimensional; Grid is two-dimensional. Learn practical rules for deciding when a layout wants flex or grid.',
    date: 'Jan 03, 2020'
  },
  {
    title: 'A 12-column grid without a framework',
    summary:'Build a responsive 12-column CSS Grid with minmax(), fractional units, and gap—no Bootstrap or utility classes required.',
    date: 'May 27, 2020'
  },
  {
    title: 'Auto-placement magic in CSS Grid',
    summary:'How the auto-placement algorithm flows items into the grid, how dense packing works, and when to define explicit tracks.',
    date: 'Aug 19, 2020'
  },
  {
    title: 'Named grid areas: cleaner templates for complex UIs',
    summary:'Use grid-template-areas to describe your layout in words. It makes dashboards, media objects, and page shells far easier to reason about.',
    date: 'Nov 30, 2020'
  },
  {
    title: 'Building a card layout with Masonry-like rows using Grid',
    summary:'Achieve a Masonry-ish effect with CSS Grid’s auto-rows and content sizing, including tips for variable-height cards.',
    date: 'Feb 11, 2021'
  },
  {
    title: 'Subgrid explained with real page examples',
    summary:'Subgrid lets child elements align to the parent grid tracks. See how headers, sidebars, and article bodies line up perfectly.',
    date: 'Sep 06, 2021'
  },
  {
    title: 'CSS Grid gaps vs margins: which to use and when',
    summary:'The gap property creates spatial rhythm inside a grid without collapsing issues. Learn patterns for mixing gap and margins safely.',
    date: 'Dec 18, 2021'
  },
  {
    title:'Holy Grail layout with modern CSS Grid',
    summary:'Revisit the classic header-sidebar-content-footer page using a minimal grid template and fluid tracks that collapse gracefully.',
    date: 'Apr 09, 2022'
  },
  {
    title:'Intrinsic sizing: min-content, max-content, and fit-content() in Grid',
    summary:'Understand how content-based sizing interacts with grid tracks to prevent overflow and produce beautiful, flexible layouts.',
    date: 'Jul 22, 2022'
  },
  {
    title:'Grid performance: tips for fast rendering',
    summary:'Practical advice: reduce deeply nested grids, avoid overly complex templates, and prefer content visibility optimizations.',
    date: 'Jan 05, 2023'
  }
 ];



 
  filtered(): Article[] {
    const q = this.searchText.trim().toLowerCase();
    if (!q) return this.articles;
    return this.articles.filter(a =>
      (a.title + ' ' + a.summary).toLowerCase().includes(q)
    );
  }


}

