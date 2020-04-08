import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { strings } from '../../config/strings';
import { MuscleObject } from '../../interfaces/interfaces';
import { AdmobService } from '../../services/admob.service';
import { AuthService } from '../../services/auth.service';
import { SubscriptionService } from '../../services/subscription.service';
import {StreamingMedia, StreamingVideoOptions} from '@ionic-native/streaming-media/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { DATABASE_URL } from '@angular/fire';


@Component({
  selector: 'app-ebodyparts',
  templateUrl: './ebodyparts.page.html',
  styleUrls: ['./ebodyparts.page.scss'],
})
export class EbodypartsPage implements OnInit {

  show: {[key: number]: boolean} = {};
  strings = strings;
  exercises: MuscleObject[] = [];
  title: string;
  isLoading = false;
  id: any;
  height: any;
  subscribe: any
  et:string;
  st:string;
  exercise: any = {};
  isInfoHidden = true;
  isInstruHidden = true;
  isTipsHidden = true;
  orientation = 'landscape';
  exercise2: any = {};

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    public plt: Platform,
    private streamingMedia: StreamingMedia,
    private admob: AdmobService,
    private screenOrientation: ScreenOrientation,
    public auth: AuthService,
    public subService: SubscriptionService,

  ) { }

  ngOnInit() {
    this.admob.BannerAd();
    this.subscribe = true;
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    this.admob.HideBannerAd();
  }

  async ionViewWillEnter() {
    let userid = this.auth.getUserId();
/*
    this.subService.getStatus(userid).subscribe((data: any) => {
      if(!data.status){
        this.subscribe = false;

      }else{
        this.subscribe = true;

        //this.subscribe = data.status;

      }
   //   this.subscribe = data.status;
    }, err => { console.log(err) },
    );

*/


    this.isLoading = true;

    this.route.params.subscribe(
      data => {
        this.id = data.id;
        this.title = data.title;
        this.getExercises();

        if (!this.id) {
          this.goBack();
        }
      }
    );
  }

  goBack() {
    this.router.navigate(['/home']);
  }


  toggleInfo(index: number,id) {

    this.dataService.getDataExerciseById(id)
    .subscribe( resp => {

      this.exercise2 = resp[0];
      this.isLoading = false;

  } );
    this.show[index] = true;
  }
  play() {
    const options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played'); },
      errorCallback: (e) => { console.log('Error streaming'); },
      orientation: 'landscape',
      shouldAutoClose: true,
      controls: true
    };
  
    // tslint:disable-next-line: max-line-length
    this.streamingMedia.playVideo('https://firebasestorage.googleapis.com/v0/b/six-pack-app.appspot.com/o/video.mp4?alt=media&token=453512dd-f079-4355-a325-92a9b2f7e465', options);
  }
  getExercises() {

    this.dataService.getDataExercisesByBodypart(this.id)
      .subscribe(resp => {

        this.exercises = resp;

        this.isLoading = false;

      });
  }

}
