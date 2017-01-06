import { Component, OnInit } from '@angular/core';
import { Document } from './document';
import { DocumentService } from './document.service';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html',
	styleUrls: ['documents.component.css'],
})
export class DocumentsComponent implements OnInit {
	pageTitle: string = "Document Dashboard"
	documents: Document[];
	errorMessage: string;
	mode = "Observable";

	constructor(
		private documentService: documentService;
	) {}

	ngOnInit() {

	}

	getDocuments() {
		this.documentService.getDocuments()
				.subscribe(
					documents => this.documents = documents,
					error => this.errorMessage = <any>error
				);
	}	
}