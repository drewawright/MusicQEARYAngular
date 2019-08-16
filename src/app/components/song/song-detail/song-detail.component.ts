import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongService } from 'src/app/services/song.service';
import { Song } from 'src/app/models/song';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {

  song: Song;
  songUrl: string;

  public chartType: string = "radar";

  public chartDataSets: Array<any> = [
    { data: [this.song.Acousticness, this.song.Danceability, this.song.Energy, this.song.Instrumentalness, this.song.Liveness, this.song.Speechiness, this.song.Valence], label: "Measure for Measure" }
  ];

  public chartLabels: Array<any> = [ 'acousticness', 'danceability', 'energy', 'instrumentalness', 'liveness', 'speechiness', 'valence'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  }



  constructor(private _songService: SongService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._songService.getSongById(routeData.get('id')).subscribe((singleSong: Song) => {
        this.song = singleSong; this.songUrl = singleSong.SongId;
      });
    });
  }

}
