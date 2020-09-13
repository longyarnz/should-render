# ShouldRender

A react component to conditionally render JSX on the fly without dirtying your code with if blocks, ternaries and conditional expressions, in between JSX. The aim is to eliminate all conditional blocks from JSX, making code look more readable and cleaner.  
For example, if you want to render AdminPage to an admin and UserPage to a user, you write:
```js
  function RenderForAdmin(props) {
    return (
      <div>
        {
          userIsAdmin ? (
            <AdminPage />
          ) : (
            <UserPage />
          )
        }
      </div>
    )
  }
```
Depending on your app, your use case may be more complex with nested ternaries and boolean evaluations. To make your code look cleaner and readable, you can write:
```js
  function RenderForAdmin(props) {
    return (
      <div>
          <ShouldRender if={userIsAdmin}>
            <AdminPage />
          </ShouldRender>

          <ShouldRender if={!userIsAdmin}>
            <UserPage />
          </ShouldRender>
        }
      </div>
    )
  }
```


## How to install

```sh
yarn add should-render
```

OR

```sh
npm i should-render
```

## How to use

```js
import { ShouldRender } from "should-render";

function RenderIfAdmin(props) {
  const userIsAdmin = true;

  return (
    <>
      <ShouldRender if={userIsAdmin}>
        <h1>Welcome to your dashboard</h1>
      </ShouldRender>

      <ShouldRender if={!userIsAdmin}>
        <h1>Sign in as admin to view your dashboard</h1>
      </ShouldRender>
    </>
  );
}
```


## Props

- **if**: This prop determines whether the children components is to be rendered or not. It takes a boolean value.
- **children**: This is the children of the ShouldRender component. They are rendered if the `if` props resolves to a truthy value
