# Application

This is a to-do app with a typescript/vite frontend and a django/postgresql backend. 

## About the App
The app will provide a clean interface to create and toggle status of tasks. First to come will be basic functionality and placement of UI. Followed by additional features, design and responsiveness. From there it will be a decision of increasing features or refining and refactoring the app. 

## Installation

Use the package managers pip and npm to install the required packages. If those are not installed, those will need to be installed first or an alternative used at your own discretion.
For the backend:
```bash
$: pip install << requirements.txt
```
For the frontend:
```bash
$: cd frontend
$: npm install
```

## Setup and Starting

Create a database in postgresql with the name `'todo'`.

Run the frontend build script:
```bash
$: npm run build
```

Run the app:
```bash
$: python3 manage.py makemigrations
$: python3 manage.py migrate
$: python3 manage.py loaddata backend/fixtures/seed.json
$: python3 manage.py runserver
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first 
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
