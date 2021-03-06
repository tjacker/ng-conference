import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ISession } from '../shared/event.model';
import { restrictedWords } from '../shared/restricted-words.validator';

@Component({
  selector: 'session-create',
  templateUrl: 'session-create.component.html',
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        font-size: 12px;
        padding-left: 10px;
      }
      .error input,
      .error select,
      .error textarea {
        background-color: #e3c3c5;
      }
      .error ::placeholder {
        color: #999;
      }
    `
  ]
})
export class SessionCreateComponent implements OnInit {
  @Output() saveNewSession = new EventEmitter();
  @Output() cancelAddSession = new EventEmitter();

  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  constructor(private router: Router) {}

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [
      Validators.required,
      Validators.maxLength(400),
      // Simple validator example
      // this.restrictedWords
      restrictedWords(['foo', 'bar'])
    ]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }

  // Simple validator example
  // private restrictedWords(control: FormControl): { [key: string]: any } {
  //   console.log(control);
  //   return control.value.includes('foo') ? { restrictedWords: 'foo' } : null;
  // }

  saveSession(formValues): void {
    let session: ISession = {
      ...formValues,
      duration: +formValues.duration,
      id: undefined,
      voters: []
    };

    this.saveNewSession.emit(session);
  }

  cancel(): void {
    this.cancelAddSession.emit();
  }
}
