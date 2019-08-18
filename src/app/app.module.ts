import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SearchComponent} from './search/search.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SearchResultComponent} from './search-result/search-result.component';
import {SmallCardComponent} from './small-card/small-card.component';

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        SearchResultComponent,
        SmallCardComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientJsonpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
