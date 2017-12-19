import { Injectable } from '@angular/core';

import { Image, SearchImage } from '../../models/image';

import { Color } from '../../models/color';

@Injectable()
export class ImageService {
  images: SearchImage[] = [
    {
      "id": "1", "name": "Acid Chess", "description": "lorem",
      "matchingColors": [new Color(255, 0, 0)], "dominantColor": new Color(0, 0, 0),
      "uploadDate": new Date(2017, 1, 1), "tags": ["chess","math","spirals"], "relevance": 0,
      "prices": { "mug": 10, "shirt": 15, "print": 10 },
      "questions": [{
        "question": "What is this?", "username": "SomeGuy", "askDate": new Date(2017, 1, 1), "verified": true,
        "answers": [
          { "answer": "Idk", "relevance": 0, "username": "SomeUser", "answerDate": new Date(2017, 1, 1), "best": true },
          { "answer": "yes", "relevance": 0, "username": "user69", "answerDate": new Date(2017, 1, 1), "best": false },
          { "answer": "yes", "relevance": 0, "username": "user", "answerDate": new Date(2017, 1, 1), "best": false },
        ]
      }],
      "reviews": [{ "text": "Nice", "verified": true, "username": "user1", "reviewDate": new Date(2017, 1, 1) }]
    },
    {
      "id": "2", "name": "Look at Me", "description": "a b",
      "matchingColors": [new Color(0, 255, 0)], "dominantColor": new Color(0, 0, 0),
      "uploadDate": new Date(2017, 1, 3), "tags": ["math","spirals"], "relevance": 0,
      "prices": { "mug": 10, "shirt": 15, "print": 10 },
      "questions": [{
        "question": "Why?", "username": "user1", "askDate": new Date(2017, 1, 1), "verified": true,
        "answers": [{ "answer": "no", "relevance": 0, "username": "user2", "answerDate": new Date(2017, 1, 1), "best": true }]
      }],
      "reviews": [{ "text": "very good", "verified": true, "username": "user1", "reviewDate": new Date(2017, 1, 1) }]
    },
    {
      "id": "3", "name": "Zebra", "description": "lorem",
      "matchingColors": [new Color(0, 0, 0)], "dominantColor": new Color(0, 0, 0),
      "uploadDate": new Date(2017, 1, 2), "tags": ["lines","math"], "relevance": 0,
      "prices": { "mug": 10, "shirt": 15, "print": 10 },
      "questions": [{
        "question": "How to use this??", "username": "user1", "askDate": new Date(2017, 1, 1), "verified": true,
        "answers": [{ "answer": "yes", "relevance": 0, "username": "user2", "answerDate": new Date(2017, 1, 1), "best": true }]
      }],
      "reviews": [{ "text": "very good", "verified": true, "username": "user1", "reviewDate": new Date(2017, 1, 1) }]
    },
    {
      "id": "4", "name": "Home", "description": "name1",
      "matchingColors": [new Color(0, 0, 0)], "dominantColor": new Color(0, 0, 0),
      "uploadDate": new Date(2017, 1, 4), "tags": ["color","math", "noise"], "relevance": 0,
      "prices": { "mug": 10, "shirt": 15, "print": 10 },
      "questions": [{
        "question": "I broke my cup. Can I get a refund?", "username": "user1", "askDate": new Date(2017, 1, 1), "verified": true,
        "answers": [{ "answer": "no", "relevance": 0, "username": "user2", "answerDate": new Date(2017, 1, 1), "best": true }]
      }],
      "reviews": [{ "text": "very good", "verified": true, "username": "user1", "reviewDate": new Date(2017, 1, 1) }]
    },
    {
      "id": "5", "name": "Wooden Jokes", "description": "ipsum",
      "matchingColors": [new Color(0, 0, 0)], "dominantColor": new Color(223, 191, 159),
      "uploadDate": new Date(2017, 1, 1), "tags": ["noise", "math"], "relevance": 0,
      "prices": { "mug": 10, "shirt": 15, "print": 10 },
      "questions": [{
        "question": "Why?", "username": "user1", "askDate": new Date(2017, 1, 1), "verified": true,
        "answers": [{ "answer": "yes", "relevance": 0, "username": "user2", "answerDate": new Date(2017, 1, 1), "best": true }]
      }],
      "reviews": [{ "text": "very good", "verified": true, "username": "user1", "reviewDate": new Date(2017, 1, 1) }]
    },
    {
      "id": "6", "name": "Dark Trip", "description": "rrr",
      "matchingColors": [new Color(0, 0, 0)], "dominantColor": new Color(255, 0, 0),
      "uploadDate": new Date(2017, 1, 2), "tags": ["color", "spirals", "math"], "relevance": 0,
      "prices": { "mug": 10, "shirt": 15, "print": 10 },
      "questions": [{
        "question": "Who is the artist?", "username": "user1", "askDate": new Date(2017, 1, 1), "verified": true,
        "answers": [{ "answer": "yes", "relevance": 0, "username": "user2", "answerDate": new Date(2017, 1, 1), "best": true }]
      }],
      "reviews": [{ "text": "very good", "verified": true, "username": "user1", "reviewDate": new Date(2017, 1, 1) }]
    },
    {
      "id": "7", "name": "Noisy World", "description": "rrr",
      "matchingColors": [new Color(0, 0, 0)], "dominantColor": new Color(51, 204, 51),
      "uploadDate": new Date(2017, 1, 2), "tags": ["color", "spirals", "math"], "relevance": 0,
      "prices": { "mug": 10, "shirt": 15, "print": 10 },
      "questions": [{
        "question": "What the f?", "username": "user1", "askDate": new Date(2017, 1, 1), "verified": true,
        "answers": [{ "answer": "yes", "relevance": 0, "username": "user2", "answerDate": new Date(2017, 1, 1), "best": true }]
      }],
      "reviews": [{ "text": "very good", "verified": true, "username": "user1", "reviewDate": new Date(2017, 1, 1) }]
    },
    {
      "id": "8", "name": "Drops", "description": "rrr",
      "matchingColors": [new Color(0, 0, 0)], "dominantColor": new Color(51, 204, 51),
      "uploadDate": new Date(2017, 1, 2), "tags": ["color", "spirals", "math"], "relevance": 0,
      "prices": { "mug": 10, "shirt": 15, "print": 10 },
      "questions": [{
        "question": "Where is this?", "username": "user1", "askDate": new Date(2017, 1, 1), "verified": true,
        "answers": [{ "answer": "yes", "relevance": 0, "username": "user2", "answerDate": new Date(2017, 1, 1), "best": true }]
      }],
      "reviews": [{ "text": "very good", "verified": true, "username": "userOne", "reviewDate": new Date(2017, 1, 1) },
      { "text": "I don't like this", "verified": false, "username": "Otheruser", "reviewDate": new Date(2017, 1, 1) }]
    },
  ];
  getImages(): SearchImage[] {
    return this.images;
  }
  getImageById(id): SearchImage {
    return this.images.find(item => item.id === id);
  }
  constructor() { }

}
