import { Component, OnInit, Input, OnDestroy } from "@angular/core";
//import { PostsService } from '../services/post.service';
import { Post } from "../model/post.model";
import { Subscription } from "rxjs";
@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.scss"]
})
export class PostListComponent implements OnInit, OnDestroy {
  @Input() posts: Post[];
  postsSubscription: Subscription;

  constructor(/*private postService: PostsService*/) {}

  ngOnInit() {
    /* this.postsSubscription = this.postService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPosts();*/
  }

  ngOnDestroy() {
    /* this.postsSubscription.unsubscribe();*/
  }
}
