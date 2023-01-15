# React for Infrastructure-as-Code

A bold statement? Maybe. 

Solving a real problem like React does? 100%. 

Let's look at the **reasons** behind the claim and then the **similarities** and **differences** between the two frameworks. 

## React for Building UI v. CDF for Building Infrastructure

We developers have long benefited from the arrivals from frameworks that boost productivity when developing using certain languages. Think *Ruby on Rails* to *Ruby*, or *Spring (Boot)* to *Java*. 

The arrival of *React* has completely changed how we develop UI (React DOM on web, React Native on mobile). Yes, we have had *JavaScript* for as many years as Internet, which seems to give us good enough web development experience. But there was nothing like React that gives us a component-based approach while marrying *HTML* and *JavaScript* seamlessly, and seeing *TypeScript* gaining popularity as a result. 

*CDF* is aiming to do the same, in a different space. 

## What's in Common

They advocate the same approach: **modularised, component-based** patterns and code. For *React*, it took a while to win over developers but there has been no turning back ever since. We predict the same adoption path for *CDF*: start small and gain popularity gradually once developers realise the benefits. This is also the **MODULAR** part in *CDF*'s design principles.

Because of the use of components, *React* also makes **testing** in UI development easy which in turn pushes for the good practice to be utilised among developers. Since the birth of imperative IaC such as *AWS CDK* and *Pulumi*, testing is often cited as one of the biggest game-changers. With *CDF* and its modular approach, **testing against modules** should be considered part of the IaC development lifecycle. In scenarios where security and compliance are of paramount importance, the approach should become the standard practice to be followed throughout any engineering organisation. 

Virtual DOM is a concept that *React* helps democratise. It is a way of **abstraction**, just like how *CDF* establishes the layer between package authors (DevOps/platform engineers) and framework users (application developers), with the help of an open standard that makes building *CDF* packages a breeze. 

One less obvious point: *React* puts *HTML*, *CSS* and *JS/TS* in one basket and makes it nice and easy to work with; similarly *CDF* unites different IaC runtime under one roof. It is about **rethinking the status quo** in their respective space and offering a better developer experience. 

## Where They Differ

Managing **state** is tedious but necessary for UI development. One of *React*'s design goals is to simplify it. Cloud infrastructure is different in that we can about two states and two states only: **what it is before the change** and **what it is after the change**. As a result, *CDF* does not need to treat state as a key concept in its design. It does offer **test support** to make sure any change is having desirable effect.

In recent years, *React* has moved away from a class-based component model, to encouraging the use of **functional components and hooks**. Part of the reason is also related to the complexity of state management in UI which may result in questionable patterns and hard-to-understand code. On the contrary, *CDF* follows and advocates **construct-based modularity** which has been made de-facto standard by *AWS CDK* and *Terraform CDK*, which is a kind of class-based component model. Here, a consistent programming and mental model is encouraged and able to be applied universally in constructing both low-level and high-level infrastructure components/modules. 

Last but not least, while *React*'s programming model can be applied universally in UI development, *CDF* consciously makes effort to allow escape hatch which is a common and necessary pattern in cloud infrastructure. This is the **CUSTOM** part in *CDF*'s design principles. 

## One More Thing

An interesting trend that is emerging, particularly relevant to *TypeScript*: **it is now possible to have a truly full-stack software application built in *TypeScript* alone**, with the help of *React* (frontend), *Node* (backend) and *CDF* (infra). Full-stack *JavaScript* or *TypeScript* is nothing new; *CDF* extends that reach to give engineering organisations the opportunity to completely eliminate context switching because of differing programming languages in use, therefore helping with hiring too. 

