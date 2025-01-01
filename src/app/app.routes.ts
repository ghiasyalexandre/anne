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
        path: 'wait',
        component: HomeComponent,
        data: {
            animation: 'HomePage',
            title: 'UCF Pi Delta Psi Home',
            description:
              'Discover the UCF Phi Chapter of the Pi Delta Psi fraternity. Learn about our mission, history, and brotherhood. Explore social events, videos, and community initiatives. Join us today!',
          },
    },
    {
        path: 'WeddingInvitation',
        component: SavethedComponent,
        // data: {
        //     animation: 'HomePage',
        //     title: 'UCF Pi Delta Psi Home',
        //     description:
        //       'Discover the UCF Phi Chapter of the Pi Delta Psi fraternity. Learn about our mission, history, and brotherhood. Explore social events, videos, and community initiatives. Join us today!',
        //   },
    },
    {
        path: 'details',
        component: DetailsComponent,
        data: {
            animation: 'HomePage',
            title: 'UCF Pi Delta Psi Home',
            description:
              'Discover the UCF Phi Chapter of the Pi Delta Psi fraternity. Learn about our mission, history, and brotherhood. Explore social events, videos, and community initiatives. Join us today!',
          },
    },
    {
        path: '',
        component: PreviewwebComponent,
        data: {
            animation: 'HomePage',
            title: 'UCF Pi Delta Psi Home',
            description:
              'Discover the UCF Phi Chapter of the Pi Delta Psi fraternity. Learn about our mission, history, and brotherhood. Explore social events, videos, and community initiatives. Join us today!',
          },
    },
    {
        path: 'gallery',
        component: GalleryComponent,
        data: {
            animation: 'HomePage',
            title: 'UCF Pi Delta Psi Home',
            description:
              'Discover the UCF Phi Chapter of the Pi Delta Psi fraternity. Learn about our mission, history, and brotherhood. Explore social events, videos, and community initiatives. Join us today!',
          },
    },
    {
        path: 'accomondations',
        component: AccomondationsComponent,
        data: {
            animation: 'HomePage',
            title: 'UCF Pi Delta Psi Home',
            description:
              'Discover the UCF Phi Chapter of the Pi Delta Psi fraternity. Learn about our mission, history, and brotherhood. Explore social events, videos, and community initiatives. Join us today!',
          },
    },
    {
        path: 'registry',
        component: RegistryComponent,
        data: {
            animation: 'HomePage',
            title: 'UCF Pi Delta Psi Home',
            description:
              'Discover the UCF Phi Chapter of the Pi Delta Psi fraternity. Learn about our mission, history, and brotherhood. Explore social events, videos, and community initiatives. Join us today!',
          },
    },
    {
        path: 'rsvp',
        component: RsvpComponent,
        data: {
            animation: 'HomePage',
            title: 'UCF Pi Delta Psi Home',
            description:
              'Discover the UCF Phi Chapter of the Pi Delta Psi fraternity. Learn about our mission, history, and brotherhood. Explore social events, videos, and community initiatives. Join us today!',
          },
    },
];
