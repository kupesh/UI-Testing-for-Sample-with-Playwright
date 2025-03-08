// Install dependencies: npm install -D @playwright/test
const { test, expect, request } = require('@playwright/test');

// Define API Test Suite
test.describe('API Testing with Playwright', () => {
  const baseURL = 'https://jsonplaceholder.typicode.com';

  // Test Case 1: Get all posts
  test('GET /posts - Retrieve all posts', async ({ request }) => {
    const response = await request.get(`${baseURL}/posts`);
    expect(response.status()).toBe(200);
    const posts = await response.json();
    expect(posts.length).toBeGreaterThan(0);
  });

  // Test Case 2: Get a single post by ID
  test('GET /posts/1 - Retrieve single post', async ({ request }) => {
    const response = await request.get(`${baseURL}/posts/1`);
    expect(response.status()).toBe(200);
    const post = await response.json();
    expect(post.id).toBe(1);
  });

  // Test Case 3: Create a new post
  test('POST /posts - Create a new post', async ({ request }) => {
    const newPost = {
      title: 'Playwright API Test',
      body: 'This is a test post',
      userId: 1
    };
    const response = await request.post(`${baseURL}/posts`, { data: newPost });
    expect(response.status()).toBe(201);
    const createdPost = await response.json();
    expect(createdPost.title).toBe(newPost.title);
  });

  // Test Case 4: Update a post
  test('PUT /posts/1 - Update an existing post', async ({ request }) => {
    const updatedPost = {
      title: 'Updated Title',
      body: 'Updated content',
      userId: 1
    };
    const response = await request.put(`${baseURL}/posts/1`, { data: updatedPost });
    expect(response.status()).toBe(200);
    const post = await response.json();
    expect(post.title).toBe(updatedPost.title);
  });

  // Test Case 5: Delete a post
  test('DELETE /posts/1 - Delete a post', async ({ request }) => {
    const response = await request.delete(`${baseURL}/posts/1`);
    expect(response.status()).toBe(200);
  });
});
