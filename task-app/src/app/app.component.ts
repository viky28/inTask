import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   tableData:Array<any> = [];
  onSubmit(form:NgForm){
    console.log("form data",form.value.firstName,form.value.lastName,this.tableData)
    if(form.valid){
      this.tableData.push(form.value)
      form.resetForm();
    } else {
      alert("Please fill the form first !")
    }
  }
  remove(index){
    console.log("index clicked",index)
    this.tableData.splice(index,1)
  }
}
