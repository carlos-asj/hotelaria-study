describe("GET /api/v1/guests", () => {
  describe("Anonymous user", () => {
    test("Retrieving current guests list", async () => {
      const response = await fetch("http://localhost:3000/api/v1/guests");
      expect(response.status).toBe(200);

      const responseBody = await response.json();
      expect(responseBody).toEqual({
        guests: expect.any(Array),
      });
    });
  });
});
