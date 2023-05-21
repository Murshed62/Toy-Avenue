import React from "react";
import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  useTitle('blogs')
  return (
    <div className="grid lg:grid-cols-4 w-2/3 mx-auto mt-20 gap-5">
      <div className="bg-purple-100 rounded-2xl p-5">
        <h1 className="pb-2 font-bold">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h1>
        <p>
          Ans. <strong>Access token:</strong> A credential issued by an
          authentication server after successful authentication, used to access
          protected resources or perform authorized actions. <br />{" "}
          <strong>Refresh token:</strong> A long-lived token issued alongside an
          access token, used to obtain a new access token once the current one
          expires without requiring re-authentication. <br /> storage Store
          access tokens and refresh tokens securely on the client-side using
          mechanisms like sessionStorage or localStorage, ensuring HTTPS usage
          for secure transmission. Expiration and renewal: Handle token
          expiration by using the refresh token to obtain a new access token
          from the server, implementing automatic renewal mechanisms.
          Revocation: Revoke both the access token and refresh token on the
          server-side when a user logs out or terminates their session to
          invalidate them and enhance security.
        </p>
      </div>
      <div className="bg-purple-100 rounded-2xl p-5">
        <h1 className="font-bold mb-3">Compare SQL and NoSQL databases?</h1>
        <p>
          Ans. <strong>SQL:</strong> Structured data model with predefined
          schemas Tables with rows and columns Relationships established through
          keys (primary and foreign keys) Vertical scaling (increasing hardware
          resources) Querying using SQL language Rigid schemas, requiring schema
          modifications for changes Well-suited for complex querying,
          transactions, and structured data <br /> <strong>NoSQL:</strong>{" "}
          Various data models (key-value, document, columnar, graph) Flexible
          and dynamic schemas Horizontal scaling (distributed across multiple
          servers) Varying query languages specific to data model Flexible
          schemas, accommodating unstructured or semi-structured data Ideal for
          scalability, large volumes of data, and dynamic data models
        </p>
      </div>
      <div className="bg-purple-100 rounded-2xl p-5">
        <h1 className="font-bold mb-3">What is express js? What is Nest JS?</h1>
        <p>
          Ans. Express.js is a popular web application framework for Node.js. It
          provides a minimal and flexible set of tools for building web
          applications and APIs. Express.js simplifies tasks like routing,
          handling HTTP requests and responses, and managing middleware. It is
          known for its simplicity, speed, and ease of use, making it a popular
          choice for building lightweight and efficient server-side
          applications. NestJS is a progressive and opinionated framework for
          building scalable server-side applications with Node.js. It is built
          with TypeScript and takes inspiration from Angular's architectural
          patterns. NestJS combines the power of TypeScript with the simplicity
          of Express.js, providing a structured and organized approach to
          building server-side applications. It offers features like dependency
          injection, decorators, modules, and advanced architectural patterns to
          ensure scalability, maintainability, and testability of applications.
        </p>
      </div>
      <div className="bg-purple-100 rounded-2xl p-5">
        <h1 className="font-bold mb-3">
          What is MongoDB aggregate and how does it work (google it)?
        </h1>
        <p>
          Ans. The aggregate function in MongoDB follows the concept of the
          aggregation pipeline, which allows for a flexible and expressive way
          to transform and aggregate data. Each stage in the pipeline operates
          on the documents received from the previous stage and passes the
          result to the next stage. The pipeline stages can be arranged in any
          order, allowing you to customize the data transformation and
          aggregation process based on your specific requirements. MongoDB
          provides a wide range of operators that can be used within the
          pipeline stages, such as arithmetic operators, comparison operators,
          array operators, date operators, and more. These operators enable
          powerful data manipulation and aggregation capabilities. The aggregate
          function supports complex operations like multi-field grouping, nested
          field manipulations, conditional aggregations, and combining multiple
          aggregation functions in a single query.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
