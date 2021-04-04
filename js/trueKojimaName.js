//A class descibing a KojimaName object
class TestName {
  constructor(aName) {
    this.aName = aName;
    this.nametype = NameTypes.NOTAPPLICABLE;
  }
  getTestName() {return this.aName;}
  testNameToString() {return "the test name is: " + this.aName;}
}


var NameTypes = {
  NORMAL : 'N', OCCUPATION : 'O', HORNY: 'H', THE: 'T', COOL : 'C', VIOLENT : 'V', UNSUBTLE: 'U', NOTAPPLICABLE : 'A'
};

class KojimaName {
  constructor(nameNum, trueNameType) {
    this.nameNum = nameNum; //determines whether user has one name or one name and six other names
    this.trueNameType = trueNameType; //describes the kind of name the user's true name is--if they have six names, the first name assigned a type is their true name
    this.firstname = firstname;
    this.lastname = lastname;
    console.log("KojimaName constructed with " + this.getNameNum() + " names and a " + this.getTrueNameType() + " true name.");
  }

  getNameNum() { return this.nameNum; }
  getTrueNameType() { return this.trueNameType; }

}

class NormalName { //should extend from/to KojimaName--see /*https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance*/
  constructor(firstname, lastname) {
//    this.middlenames = [""];
//    this.fullname = function() {
//    }
    this.nametype = NameTypes.NORMAL;
  }
  getNameType() {return this.nametype;}
}

class OccupationalName {}
class HornyName {}
class TheName {}
class CoolName {}
class ViolentName {}
class UnsubtleName {}