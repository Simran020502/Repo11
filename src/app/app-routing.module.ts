import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { Header2Component } from './components/header2/header2.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { RepoComponent } from './components/repo/repo.component';

const routes: Routes = [
  {path: 'header',component:HeaderComponent},
  {path:'header2',component:Header2Component},
  {path:'profile',component:ProfileComponent},
  {path:'footer',component:FooterComponent},
  {path:'repo',component:RepoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
