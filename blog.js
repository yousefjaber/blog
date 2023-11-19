const express= require ('express');
const app = express()
app.use(express.json());
const blogs=[];

app.get("/blogs",(req,res)=>{
    if(blogs.length==0){
        res.status(404).send("no blogs found")
        return;
    }
    res.status(200).send(blogs);
})

app.post("/blogs", (req,res) => {
    const blog ={
        id : blogs.length+1,
        title : req.body.title,
        content : req.body.content,
        author : req.body.author,
    };
    blogs.push(blog);
    res.status(201).send(blog);
});

app.put("/blogs/:id",(req,res)=> {
const blog = blogs.find((i)=> i.id ===parseInt(req.params.id));
if(!blog){ res.status(404).send("blog not found")};
return;
blog.title = req.body.title,
blog.content = req.body.content,
blog.author = req.body.author,
res.json(blog);
});

app.delete("blogs/:id",(req,res)=>{
    const blogIndex = blogs.findIndex((i)=>i.id===id)
    if (blogIndex== -1){
        res.status(404).send('Blog Not Found')
}
blogs.splice(blogIndex,1)
});

app.listen(3000, ()=> console.log("listening on port 3000"))