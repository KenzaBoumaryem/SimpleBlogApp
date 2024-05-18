This project is intended for use by a single user that can edit,delete,create multiple blogs

----Solutions For Problems Confronted during the developement of this project

----for applying css
in order to use tailwind with ensuring not breaking other css style ,we should add a prefix: 'tw-',in the tailwind.config.ts and then each time we need to use a tailwind class we should prefix it with -tw

----for large files that could not be pushed in github 
we add the large file in .gitattributes so that it could be tracked as LF and pushed without any issues

------making jsx supported during making tests 
in order to make jsx supported we add the jest.config.js file when we make some configuration

------To Avoid the error invariant expected app router to be mounted During tests
we add 
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));
to mock the next/navigation module and replaces its useRouter function with a Jest mock function.

