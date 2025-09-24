# Movie Search App
Overview
- The Movie Search App is a dynamic web application built using HTML, CSS, and JavaScript (with jQuery) that allows users to search for movies from around the world. Users can type the name of any movie into the input field, click the Search button, and receive a list of movies matching their query. The app fetches data from a comprehensive movie database API to provide accurate and up-to-date results.

Features

- Search Movies: Enter any movie title or keyword to get relevant movie results.
- Dynamic Results: Movie results are displayed instantly without refreshing the page.
- jQuery Integration: Uses jQuery to handle DOM manipulation and API requests efficiently.
- API-Powered: Retrieves data from a movie API with a vast database of worldwide films.
- Responsive Design: Works on both desktop and mobile devices.

Technologies Used
- HTML5 – Structure of the web page
- CSS3 – Styling and layout design
- JavaScript (ES6) – Logic for fetching data and displaying results
- jQuery – Simplified DOM manipulation and AJAX requests
- Movie API – Backend data source for movies

How It Works
- User types a movie name or keyword into the input field.
- On clicking Search, an API call is made to retrieve movies matching the input.
- The results are displayed dynamically below the input field, showing relevant movie titles.
- Users can scroll through the results and click on individual movies for more details (optional if implemented).

How to Run
- Clone or download the repository:
- git clone https://github.com/yourusername/movie-search-app.git
- Open the index.html file in your web browser.
- Type a movie name in the search box and click Search.
- View the list of movies displayed from the API.

Future Improvements
- Add movie posters and additional movie details like ratings and release date.
- Implement pagination for large result sets.
- Add search history to allow users to quickly access previous searches.
- Include filter options for genre, year, or country.

Credits
- Built by Andrea Dass
- Uses (https://api.themoviedb.org/3/search/movie?api_key=88892ad80656f3a2257a48524e58c860&query=${wei}) & https://api.themoviedb.org/3/search/movie?api_key=88892ad80656f3a2257a48524e58c860&query=batman for movie data
- Inspired by modern movie search applications

License
- This project is open-source and available under the MIT License.
