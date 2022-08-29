export const getGifs = async (categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=QbKyLZhHIgj8lf4hvjPX6vZIWMoWitme&limit=10&q=${categoria}`;
    const resp = await fetch(url);

    const { data } = await resp.json();

    return data.map((img) => ({
        id: img.id,
        titulo: img.title,
        url: img.images.downsized_medium.url
    }));
};
