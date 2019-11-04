const cart = [
  { name: 'Soda', price: 3.12 },
  { name: 'Margarita', price: 12.99 },
  { name: 'Beer', price: 6.5 }
];

const users = [
  { name: 'Eran', age: 48 },
  { name: 'Dorit', age: 44 },
  { name: 'Eran', age: 48 },
  { name: 'Ariel', age: 17 }
];

const employees = [
  { id: 1, name: 'John Smith' },
  { id: 2, name: 'John Smith' },
  { id: 3, name: 'John Smith' },
  { id: 4, name: 'John Smith' },
  { id: 2, name: 'John Smith' },
  { id: 2, name: 'John Smith' },
  { id: 9, name: 'John Smith' },
  { id: 6, name: 'John Smith' },
  { id: 1, name: 'John Smith' },
  { id: 4, name: 'John Smith' }
];

const sumAges = () => {
  const ages = users
    .map(item => item.age)
    .reduce((total, next) => {
      return total + next;
    });

  console.log('ages:', ages);
};

const removeDuplicate = () => {
  // Filter
  const lookup = {};
  const users1 = users.filter(user => {
    if (!lookup[`${user.name}${user.age}`]) {
      lookup[`${user.name}${user.age}`] = true;
      return true;
    }
    return false;
  });

  // Filter + Set
  const lookupSet = new Set();
  const users2 = users.filter(user => {
    return (
      !lookupSet.has(`${user.name}${user.age}`) &&
      lookupSet.add(`${user.name}${user.age}`)
    );
  });

  // Reduce + Find
  const users3 = users.reduce((acc, next) => {
    if (!acc.find(user => user.name === next.name && user.age === next.age)) {
      return [...acc, next]
    }
    return acc;
  }, []);

  console.log('Filter:', users1);
  console.log('Filter and Set:', users2);
  console.log('Reduce + Find:', users3);
}

removeDuplicate();