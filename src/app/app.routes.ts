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

    },
    {
        path: 'WeddingInvitation',
        component: SavethedComponent,
        // data: {
        //     animation: 'HomePage',
        //     title: ' Home',
        //     description:
        //       'Discoverd community initiatives!',
        //   },
    },
    {
        path: 'Details',
        component: DetailsComponent,

    },
    {
        path: '',
        component: PreviewwebComponent,

    },
    {
        path: 'Gallery',
        component: GalleryComponent,

    },
    {
        path: 'Accomondations',
        component: AccomondationsComponent,

    },
    {
        path: 'Registry',
        component: RegistryComponent,

    },
    {
        path: 'RSVP',
        component: RsvpComponent,

    },
];
