# Doctor API

This API provides a way for medical professionals to search for doctors and retrieve information about them. The API uses RESTful conventions and JSON for data exchange.

## Endpoints

### GET /doctors

Returns a list of all doctors in the database, sorted by years of experience in descending order.

**Example request:**

```bash
curl https://example.com/api/doctors
```

**Example response:**

```json
[
  {
    "_id": "5fc09999999999999999999",
    "doctorName": "John Doe",
    "specialization": "Cardiology",
    "yearsOfExp": 10
  },
  {
    "_id": "5fc099999999999999999998",
    "doctorName": "John Doe",
    "specialization": "Dermatology",
    "yearsOfExp": 20
  }
]
```

### GET /searchDoctor

Searches for doctors based on their specialization.

**Example request:**

```bash
curl https://example.com/doctors/search \
  -H "Content-Type: application/json" \
  -d '{"specialization": "Cardiology"}'
```

**Example response:**

```json
[
  {
    "_id": "5fc09999999999999999999",
    "doctorName": "John Doe",
    "specialization": "Cardiology",
    "yearsOfExp": 10
  }
]
```

## Error Handling

In case of an error, the API returns a JSON object with a `success` field set to `false` and an `error` field containing a human-readable error message. The following are some examples of error responses:

**404 Not Found**

```json
{
  "success": false,
  "error": "Doctor not found"
}
```

**400 Bad Request**

```json
{
  "success": false,
  "error": "Invalid request body"
}
```

**500 Internal Server Error**

```json
{
  "success": false,
  "error": "Internal server error"
}
```
