
import React from 'react';
import CodeSnippetList from '../components/CodeSnippetList';

const snippets = [
  { id: 1, title: 'For Loop JavaScript', code: `
// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Iterate through the array using a for loop
for (let i = 0; i < numbers.length; i++) {
  // Log each number to the console
  console.log(numbers[i]);
}` },
  { id: 2, title: 'Do-While Loop in JavaScript', code: `
// Define a variable
let i = 0;

// Execute a do-while loop
do {
  // Code block to be executed
  console.log("The value of i is: " + i);
  i++; // Increment the value of i
} while (i < 5); // Condition to continue the loop
` },
  { id: 3, title: 'for loop c#', code: `
using System;

class Program
{
    static void Main()
    {
        // Define a for loop to iterate from 1 to 5
        for (int i = 1; i <= 5; i++)
        {
            // Code block to be executed for each iteration
            Console.WriteLine("Current value of i is: " + i);
        }
    }
}
` },
  { id: 4, title: 'C# do-while loop', code: `
using System;

class Program
{
    static void Main()
    {
        // Define a variable
        int i = 0;

        // Execute a do-while loop
        do {
            // Code block to be executed
            Console.WriteLine("The value of i is: " + i);
            i++; // Increment the value of i
        } while (i < 5); // Condition to continue the loop
    }
}
` },
  { id: 5, title: 'new page Java script', code: `
// pages/index.js
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>This is a basic page built with Next.js.</p>
    </div>
  );
};

export default Home;
` },
];

const Home = () => {
  return (
    <div>
      <h1>Code Snippets</h1>
      <CodeSnippetList snippets={snippets} />
    </div>
  );
};

export default Home;
