const Usuario = require('../model/Usuario')

const cadastrar = async (req,res)=>{
    const valores = req.body
    try{
        const dados = await Usuario.create(valores)
        res.status(200).json(dados)
    }catch(err){
        console.error('Erro ao cadastrar os dados!',err)
        res.status(500).json({message: 'Erro ao cadastrar os dados!'})
    }
}

const listar = async (req,res)=>{
    try{
        const valores = await Usuario.findAll()
        res.status(200).json(valores)
        if(valores){
        res.status(200).json(valores)
        console.log(valores)
         }else{
        res.status(404).json({message: 'Dados não encontrados'})
        console.log(valores)
          }
    }catch(err){
        console.error('Erro ao listar os dados!',err)
        res.status(500).json({message: 'Erro ao listar os dados!'})
    }
}

const atualizar = async (req,res)=>{
    const idUsuario = req.params.id
    const valores = req.body
    try{
        let dados = await Compra.findByPk(idUsuario)
        if(dados){
            await Compra.update(valores, {where: { idUsuario: idUsuario}})
            dados = await Compra.findByPk(idUsuario)
            res.status(200).json(dados)
        }else{
            res.status(404).json({message: 'Compra não encontrado!'})
        }
    }catch(err){
        console.error('Erro ao atualizar os dados!',err)
        res.status(500).json({message: 'Erro ao atualizar os dados!'})
    }
}

const apagar = async (req,res)=>{
    const idUsuario = req.params.id
    console.log(idUsuario)
    try{
        const valor = await Compra.findByPk(idUsuario)
        if(valor == null){
            res.status(404).json({message: 'Compra não encontrado!'})
        }else{
            await Compra.destroy({where: { idUsuario: idUsuario}})
            res.status(204).json({message: 'Dados excluídos com sucesso!'})
        }    
    }catch(err){
        console.error('Erro ao apagar os dados!',err)
        res.status(500).json({message: 'Erro ao apagar os dados!'})
    }
}

module.exports = { cadastrar, listar, atualizar, apagar }
