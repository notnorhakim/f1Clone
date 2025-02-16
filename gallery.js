// gallery template handlebars
// all images are take from unsplash.com
// all data here to be written in the tamplate in html 
//<!--  Handlebarsjs.com, 'Handlebars Reference', 2022. [Online]. Available: http://handlebarsjs.com/reference.html. [Accessed: 20- Aug- 2022].  -->

var gallerydata = {
    gallery: [
        {
            url:"https://images.unsplash.com/photo-1537402792645-b6d9a3ac3fad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9ybXVsYSUyMDF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            alt:"F1 Car"
        },
        {
            url:"https://images.unsplash.com/flagged/photo-1574786351749-2c2b5984a541?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9ybXVsYSUyMDF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            alt:"Red Bull F1 Car"
        },
        {
            url:"https://images.unsplash.com/photo-1630446838167-4f63bc82e1cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvcm11bGElMjAxfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            alt:"Mercedes F1 Car in the Rain"
        },
        {
            url:"https://images.unsplash.com/photo-1574781689744-c255032f79da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9ybXVsYSUyMDF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            alt:"Ferarri F1 Car"
        },
        {
            url:"https://images.unsplash.com/photo-1537029271773-31e5422be11c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
            alt:"Singapore F1 Track"
        },
        {
            url:"https://images.unsplash.com/photo-1545823812-a074a1bd5e91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            alt:"F1 Fans"
        },{
            url:"https://images.unsplash.com/photo-1563556469065-2cb69c7a1900?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
            alt:"Close up view of Mercedes F1 Car"
        },
        {
            url:"https://images.unsplash.com/photo-1527757780101-05985993b2e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
            alt:"Pit Lane"
        },
        {
            url:"https://images.unsplash.com/photo-1596109984702-50c662691699?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            alt:"Monaco"
        },
        {
            url:"https://images.unsplash.com/photo-1632604679855-96b560b7c636?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
            alt:"Pit Stop"
        },
        {
            url:"https://images.unsplash.com/photo-1556659382-846969acba0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
            alt:"Starting Grid"
        },
        {
            url:"https://images.unsplash.com/photo-1601956982970-43d7f480f568?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=722&q=80",
            alt:"Abu Dhabi"
        },
        {
            url:"https://images.unsplash.com/photo-1589966043845-02852b8d6eaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=932&q=80",
            alt:"Night Race"
        },
        {
            url:"https://images.unsplash.com/photo-1632604679835-e16c46d535b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            alt:"Alpine F1 Car"
        },
        {
            url:"https://images.unsplash.com/photo-1634417176323-58c9e7f51a69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            alt:"Safety Car"
        },
        {
            url:"https://images.unsplash.com/photo-1596109958806-f8dc839446f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            alt:"Race Day"
        }
    ]
};

// conpiling the template from html
var gallerytemplate = Handlebars.compile(document.getElementById("gallery-template").innerHTML);
// reder the data together with the template in html
var galleryrendered = gallerytemplate(gallerydata);
// change the innerhtml in the html to produce rendered data 
document.getElementById("gallery-target").innerHTML = galleryrendered;