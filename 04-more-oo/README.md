
# Questions

- What is self?

- Class vs Instance
  - class method vs instance method
  - self


# OO Person

![people](https://s3-us-west-2.amazonaws.com/web-dev-readme-photos/oo-labs/people.jpg)

## Objectives
1. Gain proficiency instantiating a class
2. Gain ability to discern when to implement `attr_accessor`, `attr_reader`,  and `attr_writer`
3. Gain abiity to discern when to define your own `attr_reader`(getter) and `attr_writer`(setter) methods

## Introduction
To practice object oriented programming (OOP), you're going to create a Person class. Each instance of the `Person` class will have the ablity to:
  - get paid/receive payments
  - take a bath
  - call a friend
  - start a conversation
  - state if they are happy and/or clean


## Instructions
- First you need to create a person class that is initialized with a name that cannot be changed.
- Each instance of class `Person`should be able to remember their name
- Each instance of  class `Person` should start with $25 in their bank accounts
- Each instance of  class `Person` should start with eight happiness points
- Each instance of  class `Person` should start with eight hygiene points
- The happiness and hygiene points should be able to change, however the maximum and minimum points for both happiness and hygiene should be 10 and  0 respectively
- The amount in the bank account should also be able to change, though it has no max or min.

##### Non-attribute defining instance methods

1. The `clean?` and `happy?` methods are pretty similiar: they should return `true` if the happiness or hygiene points exceed seven. Otherwise they should return false.

2. The `get_paid` method should accept a salary amount and add this to the person's bank account. Then the method should return the string "all about the benjamins".

3. The `take_bath` method should increment the person's hygiene points by four and return the string "♪ Rub-a-dub just relaxing in the tub ♫".

4. The `work_out` method should increment the person's happiness by two points, decrease their hygiene by three points, and return the Queen lyrics, "♪ another one bites the dust ♫".

5. The `call_friend` method should accept another instance of the Person class, or "friend". The method should increment the caller and the callee's happiness points by three. If Stella calls her friend Felix, the method should return "Hi Felix! It's Stella. How are you?"

6. Finally, the `start_conversation` method should accept two arguments, the person to start a conversation with and the topic of conversation.
  * If the topic is politics, both people get sadder and the method returns "blah blah partisan blah lobbyist".
  * If the topic is weather, both people get a little happier and the method returns "blah blah sun blah rain".
  * If the topic is not politics or weather, their happiness points don't change and the method returns "blah blah blah blah blah".

<p class='util--hide'>View <a href='https://learn.co/lessons/oo-person'>Oo Person</a> on Learn.co and start learning to code for free.</p>
