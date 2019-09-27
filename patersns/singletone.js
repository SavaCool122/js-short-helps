class dataBase {
  constructor(data) {
    if (dataBase.exists) {
      return dataBase.instance;
    }

    dataBase.instance = this;
    dataBase.exists = true;
    this.data = data;
  }

  getData = () => this.data;
}

const mongo = new dataBase("MongoDB");
console.log(mongo.getData());

const mysql = new dataBase("Mysql");
console.log(mysql.getData());
