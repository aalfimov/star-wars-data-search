import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SearchComponent} from './search/search.component';
import {SearchResultResolver} from './search-result/search-result-resolver.service';

const routes: Routes = [
    {
        path: 'home',
        component: SearchComponent,
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
        resolve: {
            resultsList: SearchResultResolver
        }
    },
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
