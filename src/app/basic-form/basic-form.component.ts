import { Component, OnInit } from '@angular/core';
import { CountryListService } from '../country-list.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-basic-form',
	templateUrl: './basic-form.component.html',
	styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {
	public countryList = [];
	signUpForm: FormGroup;

	constructor(private _countryService: CountryListService) { }

	ngOnInit() {
		this.countryList = this._countryService.getCountryList();

		this.signUpForm = new FormGroup({

			'firstName': new FormControl('', Validators.required),
			'lastName': new FormControl('', Validators.required),
			'userName': new FormControl('', Validators.required),
			'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
			'country': new FormControl('india', Validators.required)
		});
	}

	OnSubmit() {
		console.log(this.signUpForm)
	}
}
