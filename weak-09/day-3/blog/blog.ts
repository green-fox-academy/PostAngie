'use strict';
import { BlogPost } from "./blog-post";

// Reuse your BlogPost class
// Create a Blog class which can:
// store a list of BlogPosts
// and has the following methods:
// add(BlogPost) -> adds a BlogPost to the list
// delete(int) -> deletes the BlogPost from the given index
// update(int, BlogPost) -> replaces an item at the given index with a new BlogPost

export class Blog {
    listOfBlogPosts: BlogPost [] = [];

    add (blogPost: BlogPost) {
        return this.listOfBlogPosts.push(blogPost);
    }

    delete (int:number) {
        return this.listOfBlogPosts.splice(int, 1);
    }

    update (int: number, blogPost: BlogPost) {
        return this.listOfBlogPosts.splice(int, 1, blogPost);
    }

    printBlogTitles () {
        for (let i = 0; i < this.listOfBlogPosts.length; i++) {
            console.log(this.listOfBlogPosts[i].getTitles());
        }
    }
}
