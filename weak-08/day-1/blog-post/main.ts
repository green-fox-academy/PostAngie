'use strict';
import { BlogPost } from "./blog-post";

// Create a BlogPost class that has
    // an authorName
    // a title
    // a text
    // a publicationDate
    // Create a few blog post objects:
    // "Lorem Ipsum" titled by John Doe posted at "2000.05.04."
    // Lorem ipsum dolor sit amet.
    // "Wait but why" titled by Tim Urban posted at "2010.10.10."
    // A popular long-form, stick-figure-illustrated blog about almost everything.
    // "One Engineer Is Trying to Get IBM to Reckon With Trump" titled by William Turton at "2017.03.28."
    // Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. 
    // When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really 
    // into the whole organizer profile thing.

    let date1 = new Date ('2000.05.04.');  // ezt még nem jól írja ki konzolra...
    let date2 = new Date('2010.10.10.');
    let date3 = new Date('2017.03.28.');
    let blogNoONe = new BlogPost('John Doe', '"Lorem ipsum"', 'Lorem ipsum dolor sit amet.', date1);
    let blogNoTwo = new BlogPost('Tim Urban', '"Wait but why"', 'A popular long-form, stick-figure-illustrated blog about almost everything.', date2)
    let blogNoThree = new BlogPost('William Turton', '"One Engineer Is Trying to Get IBM to Reckon With Trump"', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', date3);

    blogNoONe.printContent()