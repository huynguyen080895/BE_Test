import db from "../models/index";


const getAllCategory = ()=>{
  return new Promise(async(resolve,reject)=>{
    try{
      const data = db.Categories.findAll({raw :true});
      resolve(data)
    }catch(e){
      reject(e)
    }
  })
}

const getGames = (idCate,Count)=>{
  return new Promise(async(resolve,reject)=>{
    try{
      let data = db.Games.findAll({where :{idCatogory :idCate },limit :Count*12 });
      resolve(data)
    }catch(e){
      reject(e)
    }
  })
} 
module.exports = {
  getAllCategory: getAllCategory,
  getGames :getGames
};