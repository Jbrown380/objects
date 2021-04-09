const ol = document.querySelector("ol");
const movies = [
{
    name:"Pokemon Black/White Victini",
    year: 2011,
    director: "Kunihiko Yuyama",
    picture: "https://th.bing.com/th/id/OIP.KBhEIefFJ0TD4yfTNO0GCwHaKW?w=182&h=254&c=7&o=5&pid=1.7"
},

{
 name: "Spiderman Into the Spiderverse",
 year: 2018,
 director: "Peter Ramsey",
 picture: "https://th.bing.com/th/id/OIP.6CkpXOpRi090m_TL3hkgsAHaLA?w=182&h=270&c=7&o=5&pid=1.7"
},
{
    name: "Batman Begins",
    year: 2005,
    director: "Christopher Nolan",
    picture: "https://th.bing.com/th/id/OIP.Ecmcy8CoYliKGd8g0s9oMgAAAA?w=155&h=231&c=7&o=5&pid=1.7"
}
];

const template = movies.map(movies => `
    <li>
    <p>Name: ${movies.name}</p>
    <p>year: ${movies.year}</p>
    <p>director: ${movies.director}</p>
    <p>picture: ${movies.picture}</p>
    `);
    ol.innerHTML = template.join(``);