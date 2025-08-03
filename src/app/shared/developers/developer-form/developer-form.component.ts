import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DeveloperService } from 'src/app/core/services/developer.service';

@Component({
  selector: 'app-developer-form',
  templateUrl: './developer-form.component.html',
  styleUrls: ['./developer-form.component.scss'],
})
export class DeveloperFormComponent implements OnInit {
  devForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dbService: DeveloperService,
    private router: Router
  ) {
    this.devForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      skills: this.fb.array([this.fb.control('', Validators.required)]),
      experience: [0, [Validators.required, Validators.min(0)]],
      location: [''],
    });
  }

  ngOnInit(): void {}
  get skills() {
    return this.devForm.get('skills') as FormArray;
  }
  addSkill() {
    this.skills.push(this.fb.control('', Validators.required));
  }
  removeSkill(index: number) {
    this.skills.removeAt(index);
  }
  submit() {
    if (this.devForm.valid) {
      this.dbService.addDeveloper(this.devForm.value);
      this.router.navigate(['./developers']);
    }
  }
}
