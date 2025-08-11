
Node Js 
1. What is the difference between Node.js and Non-blocking I/O, and why is it significant?
 Node.js is a runtime environment that executes JavaScript outside the browser, designed for scalable network applications. Non-blocking I/O refers to the way Node.js handles input/output operations asynchronously without waiting for tasks to complete, improving efficiency. This allows Node.js to handle many operations concurrently, making it suitable for high-performance, real-time apps.

2. What is the Event Loop in Node.js and what are its key features?
 The Event Loop is a mechanism that handles asynchronous callbacks and manages the execution of non-blocking operations in Node.js. It continuously checks the callback queue and executes queued functions after the call stack is empty. This enables Node.js to perform non-blocking I/O, keeping the single-threaded process responsive.

3. What is the difference between npm and yarn? Where and when should they be used?
 npm and Yarn are both package managers for JavaScript, managing dependencies and scripts. Yarn was created to address performance and security issues in npm’s earlier versions, offering faster installs and better offline support. Today, both are widely used, with npm being default for Node.js and Yarn preferred in projects prioritizing speed and deterministic installs.

4. How does Node.js handle multiple tasks even after being single-threaded?
 Node.js uses an event-driven, non-blocking I/O model where tasks are offloaded to system APIs or worker threads when possible. The single thread handles callbacks via the event loop, allowing multiple tasks to be processed concurrently without blocking. This design enables efficient multitasking despite having only one main thread.

5. What are Node.js and asynchronous programming, and how does it create a non-blocking user interface?
 Node.js supports asynchronous programming where operations like file reads or API calls don’t block program execution. Instead, callbacks, promises, or async/await handle results once ready, keeping the main thread free. This non-blocking approach enables smooth user interactions and fast response times in apps.

6. What are Node.js streams? How do they work?
 Streams are objects in Node.js that let you read or write data piece-by-piece rather than all at once, improving memory efficiency. They come in four types: readable, writable, duplex, and transform streams. Streams process data in chunks, allowing handling of large files or continuous data (like video) efficiently.

7. What is middleware in Node.js?
 Middleware is a function that sits between the request and response cycle in frameworks like Express.js. It can modify requests, handle authentication, log data, or terminate requests before they reach the final route handler. Middleware enables modular, reusable, and layered processing of HTTP requests.

8. What is Node.js EventEmitter?
 EventEmitter is a core class in Node.js that allows objects to emit named events and register listeners for those events. It facilitates asynchronous communication within applications by triggering and responding to events. Many Node.js modules and custom objects use EventEmitter to handle events efficiently.

9. Why is Node.js used in Microservice architecture and what are its benefits?
 Node.js is lightweight and fast, making it ideal for microservices that require handling many small, independent processes. Its asynchronous, event-driven nature supports high concurrency and scalability. Additionally, Node.js enables code reuse across front-end and back-end, speeding up development.

10. What are Node.js and WebSocket? How do they work and why are they used in real-time applications?
 WebSocket is a protocol that enables full-duplex, persistent communication channels between a client and server over a single TCP connection. Node.js supports WebSocket to create real-time applications like chats or live updates by handling bidirectional data streams efficiently. This reduces latency and overhead compared to traditional HTTP requests, ideal for interactive apps.


Express js
1. How to do Cross-Origin Resource Sharing (CORS) in Express.js?
 CORS in Express is enabled by using the cors middleware package, which handles Cross-Origin Resource Sharing headers automatically. You install it via npm, import it, and then use app.use(cors()) to allow requests from different origins. This is essential for enabling client apps from other domains to access your API securely.

2. What are the characteristics of global error handlers?
 Global error handlers in Express catch errors from anywhere in the middleware or route handlers and send consistent error responses. They have four parameters (err, req, res, next) to identify them as error handlers. They centralize error management and prevent app crashes by properly handling uncaught errors.

3. What are the differences between app.route() and app.use()?
 app.route() creates chainable route handlers for a specific path and HTTP method, helping organize routes. app.use() is middleware-focused, applying functions to all HTTP methods or specific paths, often for tasks like logging or parsing. app.route() is for defining endpoints, while app.use() is for attaching middleware globally or conditionally.

4. What are the uses of the Next function?
 The next() function passes control from one middleware function to the next in the stack. It’s used to continue processing or to handle errors by calling next(err). Without calling next(), the request will hang, as Express won’t know to move forward.

5. What are the advantages and disadvantages of using middleware?
 Middleware modularizes request handling, making code reusable, maintainable, and easier to organize. However, excessive middleware can lead to complex control flow and performance overhead if not managed well. Debugging middleware chains may be tricky without proper logging.

6. How is JSON and URL encoded body parsing done in Express?
 Express uses built-in middleware express.json() for parsing JSON request bodies and express.urlencoded() for URL-encoded form data. These middleware parse incoming data and populate req.body for easy access in route handlers. They replace the older body-parser package with a simpler interface.

7. How to create and use custom middleware in Express?
 Custom middleware is a function with signature (req, res, next) that processes requests before reaching route handlers. You create it to add features like logging, authentication, or data transformation, then attach it using app.use() or directly on specific routes. Calling next() inside middleware passes control onward.

8. What is the lifecycle of Express Middleware and how does it work?
 Middleware executes sequentially in the order defined, processing requests before they reach route handlers or send responses. Each middleware can modify req and res objects and must call next() to continue the chain. If next() is not called, the request stalls, and no further middleware or routes run.

9. How are static files served in Express?
 Express serves static files using the express.static() middleware by specifying a directory containing files like HTML, CSS, images, or JS. For example, app.use(express.static('public')) makes files in the “public” folder accessible via URL. This simplifies serving client assets directly without custom route handlers.

10. What kind of tasks are required to configure a project in Express?
 Configuring an Express project involves setting up middleware (for parsing, CORS, logging), defining routes, configuring view engines if needed, and handling errors. You also typically configure environment variables and connect databases. Proper setup ensures organized code structure, security, and performance.

Mongoose and MongoDB
1. What is Mongoose and how does it relate to MongoDB?
 Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js that provides a schema-based solution to model application data. It simplifies interactions with MongoDB by enforcing schemas, validation, and business logic on documents. Mongoose acts as a bridge between your Node.js code and MongoDB database, making data management easier and more structured.

2. What are the advantages of using Mongoose for MongoDB?
 Mongoose offers schema enforcement, which MongoDB itself lacks, ensuring data consistency and structure. It provides built-in data validation, middleware (hooks), and easier query building, improving developer productivity and reducing errors. Additionally, Mongoose supports population (joining documents), making complex data relations simpler to manage.

3. What is a Schema in Mongoose?
 A Schema in Mongoose defines the shape and structure of documents within a MongoDB collection, specifying fields, data types, and validation rules. It acts as a blueprint to enforce consistency and provides methods for data manipulation. Schemas enable Mongoose to create models that represent and interact with MongoDB collections.

4. Explain the purpose of the $set operator in MongoDB updates.
 The $set operator updates the value of a specified field in a MongoDB document without altering other fields. It is commonly used in update operations to modify existing data safely and precisely. Using $set helps avoid overwriting the entire document unintentionally.

5. What is indexing in MongoDB, and why is it important?
 Indexing in MongoDB creates data structures that improve query performance by allowing faster retrieval of documents. Without indexes, queries require scanning every document, which is inefficient for large collections. Proper indexing speeds up searches, sorts, and ensures scalability.

6. Explain the purpose of the $lookup aggregation stage in MongoDB.
 The $lookup stage performs a left outer join between two collections within an aggregation pipeline. It allows combining related data from different collections into a single result set, similar to SQL joins. This enables more complex queries and data aggregation across multiple collections.

7. How do you implement data validation using custom validators in Mongoose schemas?
 Custom validators are functions defined within a schema field’s validate property to enforce specific validation logic beyond built-in validators. These functions receive the field value and return true or false based on custom criteria, or throw an error on failure. This enables precise control over data integrity during document creation or updates.

8. How do you implement field-level encryption in MongoDB to enhance data security?
 Field-level encryption can be implemented using MongoDB’s Client-Side Field Level Encryption (CSFLE), which encrypts sensitive data before sending it to the server. This protects data at rest and in transit, ensuring only authorized clients can decrypt it. Integrating CSFLE requires configuring encryption keys and modifying the driver to encrypt/decrypt specified fields automatically.

9. Explain the purpose of the unique option in Mongoose schemas.
The unique option in Mongoose schemas ensures that the value of a specified field is unique across all documents in a collection, preventing duplicate entries. It creates a unique index at the database level, helping maintain data integrity for fields like usernames or emails. However, it does not perform validation by itself—it's mainly enforced by MongoDB during data insertion or updates.
10 . Explain the purpose of the required validator in Mongoose

The required validator in Mongoose enforces that a particular field must have a value when creating or saving a document. It ensures essential data is not missing by throwing a validation error if the field is absent or empty. This helps maintain consistency and prevents incomplete records from being stored in the database.

