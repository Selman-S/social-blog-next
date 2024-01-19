export type Posts = Post[]




// List Data Structure
export interface List<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

// User Preview
export interface Owner {
  id: string;
  title: "mr" | "ms" | "mrs" | "miss" | "dr" | "";
  firstName: string;
  lastName: string;
  picture: string;
}

// User Full
export interface UserFull  {
  id: string;
  title: "mr" | "ms" | "mrs" | "miss" | "dr" | "";
  firstName: string;
  lastName: string;
  picture: string;
  gender: "male" | "female" | "other";
  email: string;
  dateOfBirth: string; // Assuming ISO date format
  registerDate: string; // Assuming autogenerated
  phone: string;
  location: Location;
}


// Post Full
export interface PostFull  {
  id: string;
  text: string;
  image: string;
  likes: number;
  tags: string[];
  publishDate: string; // Assuming autogenerated
  updatedDate: string; // Assuming autogenerated
  owner: Owner;
}

// Location
export interface Location {
  street: string;
  city: string;
  state: string;
  country: string;
  timezone: string; // Valid timezone value ex. +7:00, -1:00
}

// Post Create
export interface PostCreate {
  text: string;
  image: string;
  likes: number;
  tags: string[];
  owner: string; // User id
}

// Post Preview
export interface Post {
  id: string;
  text: string;
  image: string;
  likes: number;
  tags: string[];
  publishDate: string; // Assuming autogenerated
  owner: Owner;
}

// Post
export interface PostLink extends Post {
  link: string;
}

// Comment Create
export interface CommentCreate {
  message: string;
  owner: string; // User Id
  post: string; // Post Id
}

// Comment
export interface Comment {
  id: string;
  message: string;
  owner: Owner;
  post: string; // Post Id
  publishDate: string; // Assuming autogenerated
}

// Tag
export type Tag = string[];



export interface CurrentUser {
  email: string;
  displayName: string;
  photoURL: string;
  accessToken: string;
  refreshToken: string;
}