import { HomePage } from './home.page';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: 'tabs',
        component: HomePage,
        children: [
            {
                path: 'about',
                children: [
                    {
                        path: '',
                        loadChildren: '../about/about.module#AboutPageModule'
                    }
                ]
            },
            {
                path: 'projects',
                children: [
                    {
                        path: '',
                        loadChildren: '../projects/projects.module#ProjectsPageModule'
                    }
                ]
            },
            {
                path: 'settings',
                children: [
                    {
                        path: '',
                        loadChildren: '../settings/settings.module#SettingsPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/projects',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/home/tabs/projects',
        pathMatch: 'full'
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule { }