# Section 2 — Short Response

Write your responses directly in this file. Follow markdown formatting guidelines. Check the rubric.md file to see how your short responses will be graded. 

As a quick guide, check the following before submitting:
- [] Answered all parts of every question
- [] No typos or grammar mistakes (use grammarly!)
- [] Accurately uses relevant technical terminology
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Responses are concise and easy to comprehend

---

## Question 1

In your own words, explain what does _encapsulation_ refer to? Why is this concept beneficial when programming? 

Provide a code snippet to illustrate _encapsulation_.

## Response 1

Encapsulation refers to using Objects to isolate relating methods and data by context, keeping code organized, clear and concise.

Instead of doing something like this:

```js

const MyFood = 'food';
const Kitchen = [];

function cookFood(food){
  return `${food} is being cooked. YUM!`;
};

function burnFood(food){
  return `${food} is now burnt. :(`;
};

function addToKitchen(food){
  Kitchen.push(food);
  return `${food} was tossed in the kitchen.`;
};


```

We could split our food and kitchen methods into corresponding classes.

In this example, we have two contexts, `Kitchen` and `MyFood`. When we think with encapsulation in mind, we think about isolating or segregating our contexts. Lets refactor our code and **Encapsulate**:

```js

class MyFood{

constructor(foodName){
  this.foodName=foodName;
}

cookFood(){
  return `${this.foodName} is being cooked. YUM!`;
};

burnFood(){
  return `${this.foodName} is now burnt. :(`;
};

}

class Kitchen{

  constructor(){
    this.foodList=[];
  }

  addToKitchen(food){
    this.foodList.push(food);
    return `${food} was tossed in the kitchen.`;
};

}

```

## Question 2

Explain what the `this` keyword is. Why is the `this` keyword useful?

In the code snippet below, what does `this` refer to?

```js
class Counter {
	constructor() {
		this.count = 0;
	}
  increment() {
    this.count++;
  }
}

const counterA = new Counter();
const counterB = new Counter();

counterA.increment();
counterA.increment();
counterA.increment();

counterB.increment();

console.log(counterA.count);
console.log(counterB.count);
```

## Response 2

(The funny thing about `this` is `this` is not this it's `this` keep that in mind when using `this`) < a joke do not grade

The `this` keyword is all about context, it's a tool you can use when writing with OOP or **object-oriented-programming**.

Take a look at this example:

```js

function process() {
  console.log(this);
}

process();
// <ref *1> Object [global] {...}

const candy = {
  type: 'lollipop',
  process,
};

candy.process();
// { type: 'lollipop', process: [Function: process] }
class Food {
  constructor(name) {
    this.name = name;
    this.process = process;
  }
}
const lasagna = new Food('lasagna');
lasagna.process();
// Food { name: 'lasagna', process: [Function: process] }

```

Well, what do we notice? `this` is all about context and `Object scope` when we call process from the main file, we get back our Global object because that is the context or the `Object` calling our function. When we use `process` in our `candy` Object, we get back our `candy` Object because that is the context or the object our function was called in. The same thing happens when we use process in Food, `this` is all about context and location! Keep that in mind!

**Note that the example I gave only works in this `function __name__()` syntax**

## Question 3

In your own words, explain what **polymorphism** means in OOP. Provide an example in code that demonstrates polymorphism.

## Response 3

Polymorphism is all about interface and usability. Polymorphism refers to how different Objects and classes can be treated the same way because of the same methods and or properties.

Take a look at this example:

```js

class InstagramV2 {
  constructor(username) {
    this.username = username;
    this.followers = [];
  }

  getFollowers() {
    return { followers: [...this.followers] };
  }
}

class InstagramV3 extends InstagramV2 {
  getFollowers() {
    return { followers: [...this.followers], suggestions: this.getSuggestions() };
  }

  getSuggestions() {
    // some cloud function
  }
}

```

In this example polymorphism is used for **Version Control**. Using polymorphism, if there is a list of users that are using `InstagramV2` or `InstagramV3`, we can use `getFollowers()` for both functions and users will can get the experience they expect without having the latest version.

--Note that polymorphism has NOTHING to do with inheritance but simply interface I can have several unrelated classes with a `debug` method. But because that same method name, I can treat them the same in that way without errors.

## Question 4

You're building a game where players can raise different digital pets: Cats, Dogs, and Birds. All pets have have a `name`, `energy` level, and `happiness` level and can all `sleep`. Cats have the ability to `hunt`, dogs have the ability to `chase`, and birds have the ability to `fly`.

**Part A:** Describe in words how you would use inheritance to organize these classes.

Well when we use inheritance we think about the basics, what are the main basic things we need? In this case it would be a `pet` or `digitalPet` a `digitalPet` will have:

- name
- energy
- happiness
- sleep()

We can make extensions of this base digitalPet, and for polymorphism sake add an extra method in each called `useAbility`. For dogs the ability is `chase`, cats: `hunt`, and birds `fly`.

**Part B:** Explain one advantage of using inheritance here instead of creating three completely separate classes.

Inheritance takes away from the chaos or confusion of repetitive classes or heavy one-size-fits-all classes, it allows us to reuse code and pass methods down onto similar yet different versions of a base class. Thus saving memory and time and giving your code a level of readability that might just get you the job!

## Response 4