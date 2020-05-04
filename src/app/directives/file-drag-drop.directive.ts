import {
    Directive,
    HostListener,
    HostBinding,
    EventEmitter,
    Output,
} from '@angular/core';

@Directive({ selector: '[file-drag-drop]' })
export class FileDragDropDirective {
    @HostBinding('class.file-over') fileOver: boolean;
    @HostBinding('class.file-upload-progress') fileUploadProgress: boolean;
    @Output()
    filesDropped = new EventEmitter();

    @HostListener('dragover', ['$event'])
    onDragOver(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.fileOver = true;
    }

    @HostListener('dragleave', ['$event'])
    onDragLeave(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.fileOver = false;
    }

    @HostListener('drop', ['$event'])
    onDrop(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();
        const files = event.dataTransfer.files;
        if (this.validateFiles(files) && !this.fileUploadProgress) {
            this.filesDropped.emit(files);
        }
        this.fileOver = false;
    }

    private validateFiles(files: FileList) {
        if (!files) {
            alert('No files');
            return false;
        }

        if (files.length > 1) {
            alert('Sorry, Multiple files are not supported');
            return false;
        }
        const file = files[0];
        if (file.type.indexOf('pdf') == -1) {
            alert('Sorry, Supported only for PDF files.');
            return false;
        }
        return true;
    }
}
