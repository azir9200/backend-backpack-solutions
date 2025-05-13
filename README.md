# Q: What are some differences between interfaces and types in TypeScript ?

## Explain: In TypeScript , interfaces and type are used to defined the shape of objects, but they have some key differences. The differences are below:

1. interfaces can be extended and merged, but types cannot be merged.

2. Use interface for object shapes and when working with classes. but Use type for more complex structures, like unions, tuples, mapped types etc.

3.Type support unions and intersections, Interface does not directly support unions.

4. Interface only works for object types, but type can alias any type, including primitives and functions.

# Q: What is is the use of keyof keyword in Typescript ?

## Explain: The key of keyword in TypeScript is used to get a union of all the keys of an object type. It is commonly used in generics and type-safe property access.

- Usage: keyof returns a union type of the keys of the given type.
  Example:  
   type Person = {
  name: string;
  age: number;
  };
  type PersonKeys = keyof Person;

Actually keyof used to ensure only valid key are being used. It
is very useful to building generic and utility types and functions.

           *** ----***
