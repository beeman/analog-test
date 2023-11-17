import { Component } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'
import { injectContentFiles } from '@analogjs/content'
import { NgFor } from '@angular/common'

export interface PostAttributes {
  title: string
  slug: string
  description: string
  coverImage: string
}

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgFor],
  template: `
    <h1>Blog Posts</h1>
    <ul>
      <li *ngFor="let post of posts">
        <a [routerLink]="['/blog', post.slug]">{{ post.attributes.title }}</a>
      </li>
    </ul>
  `,
})
export default class PostListComponent {
  readonly posts = injectContentFiles<PostAttributes>()
}
