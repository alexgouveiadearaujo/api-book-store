import authors from "../models/Author.js";

class AuthorController {
  static getAuthors = (req, res) => {
    authors.find((err, authors) => {
      res.status(200).json(authors);
    });
  };

  static getAuthorId= (req, res) =>{
      const id = req.params.id;
      authors.findById(id , (err, author)=>{
          if(err){
              res.status(400).send({message:`${err.message} - id não localizado`})
          }else{
              res.status(200).send(author)
          }
      })
  }

  static registerAuthor = (req, res) => {
      let author = new authors(req.body);
      author.save((err)=>{
          if(err){
              res.status(500).send({message:`${err.message} - falha ao cadastrar autor`})
          }else{
              res.status(201).send(author.toJSON())
          }
      })
  }

  static updateAuthor= (req, res) => {
    const id= req.params.id;
    authors.findByIdAndUpdate(id , {$set: req.body} , (err)=>{
        if(!err){
            res.status(200).send({message:`Autor atualizado com sucesso`})
        } else {
            res.status(500).send({message:err.message})
        }
    })
  }

  static deleteAuthor = (req,res)=>{
      const id= req.params.id;
      authors.findByIdAndDelete(id , (err)=>{
          if(!err){
              res.status(200).send({message: `Autor removido com sucesso`})
          }else{
              res.status(500).send({message:`${err.message} - Falha ao tentar remover autor, verifique id`})
          }
      })
  }



}

export default AuthorController;
