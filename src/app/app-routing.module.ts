import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { PlaylistIndexComponent } from './components/playlist/playlist-index/playlist-index.component';
import { SongIndexComponent } from './components/song/song-index/song-index.component';

const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'playlist', children: [
      { path: '', component: PlaylistIndexComponent},
    ]
  },
  {
    path: 'song', children: [
      { path: '', component: SongIndexComponent }
    ]
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
