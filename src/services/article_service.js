let artikel = [];

fetch(
  "https://newsapi.org/v2/everything?q=tesla&from=2024-06-11&sortBy=publishedAt&apiKey=b676e64963a94128ba445b5497bba05e"
)
  .then((response) => response.json())
  .then((result) => {
    result.articles.map(
      (value) =>
        value.author != null &&
        value.title != null &&
        value.urlToImage != null &&
        value.description != null &&
        artikel.push({
          author: value.author,
          title: value.title,
          image: value.urlToImage,
          description: value.description,
        })
    );
  });

export default artikel;
