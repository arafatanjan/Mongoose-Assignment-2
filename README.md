## Question 1: What is the purpose of creating a model with an interface and schema in MongoDB? How does it help in defining the structure of a collection?
Creating a model with an interface and schema in MongoDB, particularly when using Mongoose (a MongoDB object data modeling library), helps in several ways such as
1. Enforcing Structure and Consistency
   MongoDB by itself is a NoSQL database, meaning it doesn’t impose a strict schema. While this flexibility can be advantageous for certain use cases, it can lead to inconsistent data if not handled carefully. Using Mongoose schemas helps enforce a structure on your collections, ensuring consistency across documents.
2.  Type Safety (via Interface in TypeScript)
   When we use TypeScript, creating an interface for  MongoDB model provides type safety and ensures that we follow the right structure when interacting with our data in your application.
3. Validation and Constraints
Using Mongoose schemas, we can define validation rules and constraints for each field.

## Question 2: Explain the concept of field filtering in MongoDB. How can you specify which fields to include or exclude in the returned documents?
Field filtering in MongoDB refers to selecting specific fields to include or exclude in the documents returned by a query.
MongoDB provides a way to specify which fields should be included or excluded in the query result by using projections. A projection allows us to limit the fields that are returned for each document.

## Question 3: What are instance methods in MongoDB models? Provide an example of a custom instance method and explain its purpose.
In Mongoose (an ODM for MongoDB), instance methods are custom methods that can be added to documents created from a model. These methods can be used to perform operations on individual documents (instances) in the MongoDB collection.


Purpose of Instance Methods
Instance methods allow us to:
Perform operations on a document, such as formatting or calculating values.
Add custom functions that act on the document’s data.
Keep business logic related to the model within the model definition.

## Question 4: How do you use comparison operators like "$ne," "$gt," "$lt," "$gte," and "$lte" in MongoDB queries? Provide examples to illustrate their usage.
1. $ne (Not Equal)
The $ne operator is used to find documents where the field value is not equal to the specified value.
2. $gt (Greater Than)
The $gt operator is used to find documents where the field value is greater than the specified value.
3. $lt (Less Than)
The $lt operator is used to find documents where the field value is less than the specified value.
4. $gte (Greater Than or Equal To)
The $gte operator is used to find documents where the field value is greater than or equal to the specified value.
5. $lte (Less Than or Equal To)
The $lte operator is used to find documents where the field value is less than or equal to the specified value.

## Question 5: What are MongoDB’s “$in” and “$nin” operators? How can you use them to match values against an array of values or exclude values from a given array?
1. $in Operator
The $in operator allows one to select documents where the value of a field matches any value in a specified array.
2. $nin Operator
The $nin operator allows you to select documents where the value of a field does not match any value in a specified array.



