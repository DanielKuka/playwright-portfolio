import {test, expect} from "@playwright/test";
import {isValidEmail, getUserFullName, userHasAvatar} from "../../helpers/userHelper";

test("GET /api/users - should return list of users", async ({request}) => {
    const response = await request.get("/api/users?page=1");
    const body = await response.json();
    expect(response.status()).toBe(200);
    expect(Array.isArray(body.data)).toBe(true);

    const allEmailsValid = body.data.every(user => isValidEmail(user.email));
    expect(allEmailsValid).toBe(true);
})

test("GET /api/users/2 - should return single user", async ({request}) => {
    const response = await request.get('/api/users/2');
    const body = await response.json();

    expect(response.status()).toBe(200);
    expect(body.data.id).toBe(2);
})

test("GET /api/users/999 - should return 404 for non-existing user", async ({request}) => {
    const response = await request.get('/api/users/999');
    expect(response.status()).toBe(404);
})