import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewCategoryComponent } from './new-category/new-category.component'
import { NewPostComponent } from './new-post/new-post.component'


const appRoutes: Routes = [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'new-category',
      component: NewCategoryComponent,
    },
    {
      path: 'category/:id',
      component: NewPostComponent,
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
