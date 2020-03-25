import sequelize from "../../src/database";

export default function (){
  return Promise.all( Object.keys(sequelize.models).map(key=>{
      return sequelize.models[key].destroy({
        truncate: true,
        force: true
      });
    })
  );
}
