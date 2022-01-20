'use strict';

// Reuse your BlogPost class

export class BlogPost {
    private authorName: string;
    private title: string;
    private text: string;
    private publicationDate: string;

    constructor (authorName: string, title: string, text: string, publicationDate: string){
        this.authorName = authorName;
        this.title = title;
        this.text = text;
        this. publicationDate = publicationDate;
    }
    printContent () {
        console.log(this.title + ' titled by ' + this.authorName + ' posted at ' + this.publicationDate);
        console.log(this.text);
    }

    getTitles() {
        return this.title;
    }
}