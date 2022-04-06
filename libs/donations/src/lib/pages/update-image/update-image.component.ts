import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { timer } from 'rxjs';
import { DonationsService } from '../../services/donations.service';

@Component({
  selector: 'crowdfunding-update-image',
  templateUrl: './update-image.component.html',
  styleUrls: ['./update-image.component.scss']
})
export class UpdateImageComponent implements OnInit {
  form!: FormGroup;
  imageDisplay!: string | ArrayBuffer| any;

  constructor(private formBuilder: FormBuilder, 
    private activatedRoute: ActivatedRoute, 
    private donationService: DonationsService,
    private messageService : MessageService,
    private location: Location,
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      image: ['', Validators.required],       
    })
  }

  onSubmit(){
    const fileFormData = new FormData();
    Object.keys(this.fileForm).map((key) => {
      fileFormData.append(key, this.fileForm[key].value);
    });

    // fileFormData.append('donationId', this.activatedRoute.snapshot.params['id'])
    this.donationService.updateImage(fileFormData, this.activatedRoute.snapshot.params['id']).subscribe(()=>{

      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Fundraising successfuly updated!'
      });
      timer(2000)
        .toPromise()
        .then(() => {
          this.location.back();
        });

    }, (error) => {

    })
    

  }
  onImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.form.patchValue({ image: file });
      this.form.get('image')?.updateValueAndValidity();
      const fileReader = new FileReader();
      fileReader.onload = () => {
        this.imageDisplay = fileReader.result;
      };
      fileReader.readAsDataURL(file);
    }
  }

  onCancel(){

  }

  get fileForm(){
    return this.form.controls
  }


}
