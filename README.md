# Assignment9-Optimizing-Our-App
## Theory

Qn1.When and why do we need lazy()?
- It allows our page to load quickly by reducing the bundle size.
- Improves user experience at initial loading.
- Loading the content only when user wants it.

Qn2.WHAt is Suspense?
- Suspense is a new feature that lets your component “wait” for something before it can render.
- Suspense is a React feature that allows for components to be loaded asynchronously.
- It is used with lazy.
-Suspense is also used to display a loading indicator while the component is being fetched, or it can be used to render a fallback component if the component fails to load.

Qn3.Why we got this error: A component while responding to synchronous input.This will cause the UI to be replaced with a loading indicator.To fix,updates that suspend should be wrapped with startTransition?How does supense fix the error?

- If we use lazy without suspense, it will throw error on initial render and after refreshing only, we could get the content.
- So, to fix this we need Suspense which will delay the render and not throw eror while it if loading the data/component.
- We can have fallback property to show in the UI while the data is being loaded.

Qn4.Advantages & disadvantages of using this code splitting pattern?
- Advantages-
- 1.Split our code into smaller chunks which we can load on user demand.
- 2.Reduce the initial response size required to render the page.

- Disadvantages-
- 1.Increased complexity in development and testing process.
- 2.additional code & dependencies which increase the bundle size.

Qn5.When & Why do we use need Suspense()?
- Initially, while using lazy, we used to get error on initial render and after that we used to get our content after refreshing.
- To overcome this, we used Suspense which will not immediately throw error but waits for sometime before rendering.
- So, we could use fallback property inside SUspense to render some UI before loading the actual data or if data is not being fetched.

