import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'terms',
    redirectTo: 'terms',
  },
  {
    path: 'privacy',
    redirectTo: 'privacy',
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpPageModule)
  },
  {
    path: 'home',
    canLoad: [AuthGuard],
    loadChildren: './home/home.module#HomePageModule',
  },
  {
    path: 'terms',
    canLoad: [AuthGuard],
    loadChildren: './terms/terms.module#TermsPageModule'
  },
  {
    path: 'privacy',
    loadChildren: './privacy/privacy.module#PrivacyPageModule'
  },
  {
    path: 'about',
    canLoad: [AuthGuard],
    loadChildren: './about/about.module#AboutPageModule'
  },
  {
    path: 'settings',
    loadChildren: './settings/settings.module#SettingsPageModule'
  },
  {
    path: 'projects',
    canLoad: [AuthGuard],
    loadChildren: './projects/projects.module#ProjectsPageModule'
  },
  {
    path: 'single-project/:project_id',
    canLoad: [AuthGuard],
    loadChildren: './projects/single-project/single-project.module#SingleProjectPageModule'
  },
  {
    path: 'new-project',
    canLoad: [AuthGuard],
    loadChildren: './projects/new-project/new-project.module#NewProjectPageModule'
  },
  {
    path: 'edit-project/:project_id',
    canLoad: [AuthGuard],
    loadChildren: './projects/edit-project/edit-project.module#EditProjectPageModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
