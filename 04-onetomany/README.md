# My Pets

## Objective

1.  Gain a deeper understanding of object relations.
2.  Build classes that produce objects that interact with one another through
    associations and behavior.

## Instructions

This is a test-driven lab. Use the test file and test output to understand what
is being asked of you as you follow the guidelines below.

### Overview

You will be building an `Owner`, `Dog`, and `Cat` class. An Owner will
know about all their pets, be able to buy a pet, change a pet's mood through
walking or feeding it, and sell all of their pets (for when they
move to that tiny NYC studio after college).

A `Dog` and a `Cat` are initialized with a name and an **Owner object**

### Part I: Object Models

- Define a `Dog` and `Cat` class that have the attributes required by the
  test suite. Keep in mind, some of the attributes should be readable and writable
  (i.e. `attr_accessor`s), while others may need to be _just_ setters
  (`attr_writer`) or _just_ getters (`attr_reader`). The test suite will make this
  clear so pay attention to the test output.

### Part II: Object Relations

- An owner should be able to buy and sell a pet, which will change the pet's mood.

- When an owner buys a new pet, the `buy_cat/buy_dog` methods **take in an
  argument of a _name_.** You must take that name and do the following:

  - _Make a new instance of the appropriate pet, initializing it with that name
    and the owner who is purchasing it_.

- An owner should have the ability to walk all their dogs or feed all their cats, which
will change the mood of all of their pets of that type to "happy".

![Owner, Dogs and Cats](https://curriculum-content.s3.amazonaws.com/module-1/ruby-oo-relationships/my-pets/Image_140_Relations_OwnerDogCat.png)

These are just a few hints and guidelines to help you through this lab. This lab
is extensive and challenging. Rely on the guides here, refer to the previous
Code Along on object relations, and **read the test output and test files**.
Never forget to ask a question on Learn if you are stuck. And remember, as a
programmer, your job is to _fix broken code!_ Broken code is the norm, the
baseline, the starting point for all of the projects you will build. Embrace it!

<p class='util--hide'>View <a href='https://learn.co/lessons/oo-my-pets'>OO My Pets</a> on Learn.co and start learning to code for free.</p>

