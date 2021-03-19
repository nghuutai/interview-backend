# interview-backend

* Clone this repository:

```bash
git clone https://github.com/nghuutai/interview-backend.git
```

## Start the containers

* Change into this directory:

```bash
cd interview-backend/
```

* Start the profile:

```bash
docker-compose up
```

## Stop and remove the containers

* Press `Ctrl-C` to stop the containers.

* Destroy the stopped containers:

```bash
docker-compose down
```

## Test Postman
* URL: http://localhost:5000/api/user?offset=0&limit=3
* Method: GET
* Header: "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVlZDI1YTQyLTdlYzQtNGQzMi1hNTY2LTBmZDMxNWI5MWE0YSIsIm5hbWUiOiJIdXUgVGFpIiwicm9sZSI6ImRpcmVjdG9yIiwiaWF0IjoxNjE1NDcxMzgyLCJleHAiOjE2NDcwMjg5ODJ9.sbTKJIM0jA-DwKSAK7PHkrxRwEZPtUKMfGtXCCUYDkM"