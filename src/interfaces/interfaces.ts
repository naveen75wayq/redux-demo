import { EntityId } from "@reduxjs/toolkit";

export interface Entity {
    id: EntityId;
    date: string; // Ensure that each entity has a date property
    // other properties
}
export interface Root {
    users: User[]
    posts: Post[]
  }
  
  export interface User {
    id: number
    name: string
    username: string
    email: string
    address: Address
    phone: string
    website: string
    company: Company
  }
  
  export interface Address {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: Geo
  }
  
  export interface Geo {
    lat: string
    lng: string
  }
  
  export interface Company {
    name: string
    catchPhrase: string
    bs: string
  }
  
  export interface Post extends Entity{
    id: number
    title: string
    body: string
    userId: number
    date: string
    reactions?: Reactions
  }
  
  export interface Reactions {
    thumbsUp: number
    wow: number
    heart: number
    rocket: number
    coffee: number
  }