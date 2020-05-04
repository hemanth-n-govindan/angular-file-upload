import { Component } from "@angular/core";
import { HttpClient, HttpHeaders, HttpHandler } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "fileupload";
  fileUploadInProgress: boolean;
  fileName: string;

  constructor(private http: HttpClient) {}

  onFileUpload(files: FileList): void {
    console.log(files);
    const file: File = files[0];
    if (file) {
      this.fileName = file.name;
      this.fileUploadInProgress = true;
      // this.fileUploadService(file).subscribe((response) => {
      //   if (response) {
      //   } else {
      //     alert("Sorry, upload failed. Try again");
      //     this.fileUploadInProgress = false;
      //   }
      // });

      setTimeout(() => {
        this.fileUploadInProgress = false;
      }, 500);
    }
  }

  fileUploadService(file) {
    return this.http.post(
      "url",
      {
        body: file,
      },
      {
        headers: {},
        params: {},
      }
    );
  }
}
