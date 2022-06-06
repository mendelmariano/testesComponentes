import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  public skillsForm: FormGroup;

  public skillsDefault: Array<any> = [{
    skill: 'Angular',
    exp: 'rxjs'
  },
  {
    skill: 'Node',
    exp: 'Express'
  },
  {
    skill: 'Php',
    exp: 'Laravel'
  }
  ];

  constructor(private fb: FormBuilder) {

    this.skillsForm = this.fb.group({
      name: '',
      skills: this.fb.array([]),
    });

  }

  ngOnInit(): void {
    this.adicionarSkillsDefault();
  }

  get skills(): FormArray {
    return this.skillsForm.get("skills") as FormArray
  }

  newSkill(skill:any = {}): FormGroup {
    return this.fb.group({
      skill: skill.skill || '',
      exp: skill. exp || '',
    })
  }

  addSkills(skill?) {
    this.skills.push(this.newSkill(skill));
  }

  removeSkill(i: number): void {
    this.skills.removeAt(i);
  }

  onSubmit() {
    console.log(this.skillsForm.value);
  }

  adicionarSkillsDefault(): void {
    this.skillsDefault.forEach(
      (skill) => {
        this.addSkills(skill);
      }
    );
    this.skillsForm.updateValueAndValidity();
  }

}
