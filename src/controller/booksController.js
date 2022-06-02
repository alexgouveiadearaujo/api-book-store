import books from "../models/Book.js";

class BookController {
  static getBooks = (req, res) => {
    books.find()
    .populate('author')
    .exec((err, books) => {
      res.status(200).json(books);
    });
  };

  static getBookId= (req, res) =>{
      const id = req.params.id;
      books.findById(id)
      .populate('author' , 'name')
      .exec((err, book)=>{
          if(err){
              res.status(400).send({message:`${err.message} - id não localizado`})
          }else{
              res.status(200).send(book)
          }
      })
  }

  static registerBook = (req, res) => {
      let book = new books(req.body);
      book.save((err)=>{
          if(err){
              res.status(500).send({message:`${err.message} - falha ao cadastrar livro`})
          }else{
              res.status(201).send(book.toJSON())
          }
      })
  }

  static updateBook = (req, res) => {
    const id= req.params.id;
    books.findByIdAndUpdate(id , {$set: req.body} , (err)=>{
        if(!err){
            res.status(200).send({message:`Livro atualizado com sucesso`})
        } else {
            res.status(500).send({message:err.message})
        }
    })
  }

  static deleteBook = (req,res)=>{
      const id= req.params.id;
      books.findByIdAndDelete(id , (err)=>{
          if(!err){
              res.status(200).send({message: `Livro removido com sucesso`})
          }else{
              res.status(500).send({message:`${err.message} - Falha ao tentar remover livro, verifique id`})
          }
      })
  }



}

export default BookController;
