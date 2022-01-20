'use strict';
import { Blog } from "./blog";
import { BlogPost } from "./blog-post";

let myBlog = new Blog();

let date1: string = '2000.05.04.';
let date2: string = '2010.10.10.';
let date3: string = '2017.03.28.';
let blogNoONe = new BlogPost('John Doe', '"Lorem ipsum"', 'Lorem ipsum dolor sit amet.', date1);
let blogNoTwo = new BlogPost('Tim Urban', '"Wait but why"', 'A popular long-form, stick-figure-illustrated blog about almost everything.', date2)
let blogNoThree = new BlogPost('William Turton', '"One Engineer Is Trying to Get IBM to Reckon With Trump"', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', date3);
let blogNoFour = new BlogPost('Angie', '"This is a cool post"', 'Hello everyone. OOP is cool.', date3);

myBlog.add(blogNoONe);
myBlog.add(blogNoThree);
myBlog.add(blogNoFour);
myBlog.printBlogTitles();
console.log('---');


myBlog.delete(1);
myBlog.printBlogTitles();
console.log('---');

myBlog.update(0, blogNoTwo);
myBlog.printBlogTitles();