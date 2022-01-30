  function compareObjects3(objectLeft, objectRight) {

    var result = {};

    //Перебор по левому объекту
    for (key in objectLeft) 
    {     
      //Если элемент есть в правом объекте   
      if (key in objectRight) 
      {          
        //Если внутри объекта другой объект:
        if (typeof(objectLeft[key]) === 'object') 
        {    
          //Перебор по внутреннему объекту      
            for (objIn in objectLeft[key]) 
            {
              //Если такой же объект есть в правом
              if (objIn in objectRight[key]) 
              {
                //Если они не равны друг другу
                if (objectLeft[key][objIn] !== objectRight[key][objIn]) {              
                  result[key] = 'different';
                }
              } else {
                result[key] = 'different';
              }
            
            }
        }
        //Если НЕ объекты внутри
        else
        {
          if (objectLeft[key] !== objectRight[key]) {              
                    result[key] = 'different';
          }
        }
      } 
      //Если элемента нет в правом
      else
      {
          result[key] = 'missing';
      }
    }
    return result;
  }

  // Пример объектов
  var objectLeft = {
    person1: {
      name: 'Name1',
      surname: 'Surname1',
      balance: 100,
    },
    person2: {
      name: 'Name2',
      surname: 'Surname2',
      balance: 200,
    },
    person3: {
      name: 'Name3',
      surname: 'Surname3',
      balance: 300,
    },
    person4: {
      surname: 'Surname4',
      balance: 400,
    },
  };

  var objectRight = {
    person1: {
      name: 'Name1',
      surname: 'Surname1',
      balance: 100,
    },
    person2: {
      name: 'Name2',
      surname: 'Surname0',
      balance: 150,
    },
    person4: {
      name: 'Name4',
      balance: 0,
    },
    person5: {
      name: 'Name5',
      surname: 'Surname5',
      balance: 500,
    },
  };

  // Тут ваш вывод в консоль
  var result = compareObjects3(objectLeft, objectRight);
  console.log(result);

  // Это нужно чтобы тесты выполнялись
  module.exports = compareObjects3;
