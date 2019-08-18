import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {AppComponent} from '../app.component';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.sass'],
})
export class SearchComponent implements OnInit {
    private searchForm: FormGroup;

    constructor(private service: SearchService,
                private fb: FormBuilder,
                private route: ActivatedRoute,
                private appcomp: AppComponent) {
    }

    ngOnInit() {
        this.initForm();
        this.route.queryParamMap.subscribe(params => {
            this.updateValue(params.get('search'));
        });
    }

    private initForm() {
        this.searchForm = this.fb.group({
            searchQuery: ['', [Validators.required, Validators.minLength(3)]],
        });
    }

    private updateValue(search: string) {
        return this.searchForm.setValue({searchQuery: search});
    }

    private search() {
        this.appcomp.getSearch(this.searchForm.value.searchQuery);
    }
}
