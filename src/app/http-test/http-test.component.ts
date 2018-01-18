import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
    selector: 'app-http-test',
    templateUrl: './http-test.component.html',
    styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

    tulos = 'Moro';
    apitulos = 'hei';
    tulokset: any;
    // apiosoite = 'kuvaosoite = \'http://media.mw.metropolia.fi/wbma/uploads/\';';
    // http://media.mw.metropolia.fi/wbma/docs/

    apiosoite = 'http://media.mw.metropolia.fi/wbma';
    apiosoite2 = 'http://rata.digitraffic.fi//api/v1/live-trains'; // 'http://media.mw.metropolia.fi/wbma';
    kuvaosoite = 'http://media.mw.metropolia.fi/wbma/uploads/';

    constructor(private http: HttpClient) {
    }

    getJson() {

        interface Myinterface {
            license: string;
        }

        this.http.get<Myinterface>('/assets/package.json').subscribe((data) => {
            console.log(data);
            this.tulos = data.license;
        });
    }

    /*getFromApi() {
        this.http.get(this.apiosoite + '/media').subscribe(data => {
            console.log('file name = ' + data[0].filename);
            this.apitulos = this.kuvaosoite + data[0].filename;
        });
    }*/

    getTrains() {
        this.http.get(this.apiosoite2).subscribe(data => {
            console.log('file name = ' + data[0].trainNumber);

            this.tulokset = data;

        });
    }

    ngOnInit() {
        this.getJson();
        this.getTrains();
    }

}
