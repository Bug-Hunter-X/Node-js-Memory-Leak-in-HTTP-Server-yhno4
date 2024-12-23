# Node.js Memory Leak in HTTP Server

This repository demonstrates a common Node.js memory leak scenario in an HTTP server and provides a solution.

## Bug

The `bug.js` file contains code that creates an HTTP server.  The server does not properly handle large incoming requests, leading to a memory leak due to the continuous accumulation of data from the 'data' event.

## Solution

The `bugSolution.js` file demonstrates how to fix the memory leak using data aggregation and proper event handling.  Specifically, it uses the body-parser and removes the default data listener.

## How to Reproduce

1. Clone the repository.
2. Run `node bug.js`. 
3. Send a large request to the server using a tool like `curl` or `httpie`. Observe the memory usage. 
4. Run `node bugSolution.js`. 
5. Repeat step 3 and compare memory usage.

The memory leak will be clearly visible in `bug.js` compared to the absence of leaks in `bugSolution.js`.
