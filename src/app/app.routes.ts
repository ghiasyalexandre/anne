import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AccomondationsComponent } from './accomondations/accomondations.component';
import { RegistryComponent } from './registry/registry.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SavethedComponent } from './savethed/savethed.component';
import { PreviewwebComponent } from './previewweb/previewweb.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'SaveTheDate',
    component: SavethedComponent,
  },
  {
    path: 'details',
    component: DetailsComponent,
  },
  {
    path: 'Wait',
    component: PreviewwebComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'accomondations',
    component: AccomondationsComponent,
  },
  {
    path: 'registry',
    component: RegistryComponent,
  },
  {
    path: 'rsvp',
    component: RsvpComponent,
  },
];
